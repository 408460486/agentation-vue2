<template>
  <div class="sd-outer">
    <div class="sd-container" ref="containerRef">
      <div
        :class="['sd-panel', { visible: showPanel }, isDarkMode ? 'dark' : 'light']"
        @click.capture.stop
      >
        <!-- Header -->
        <div class="sd-header">
          <span class="sd-brand">
            <span class="sd-brand-slash" :style="{ color: currentColor }">/</span>
            agentation
          </span>
          <span class="sd-version">v0.3.2</span>
          <button ref="themeToggleRef" class="sd-theme-toggle">
            <svg v-if="isDarkMode" width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
              <path d="M12 2V4M12 20V22M4 12H2M22 12H20M5.64 5.64L4.22 4.22M19.78 19.78L18.36 18.36M5.64 18.36L4.22 19.78M19.78 4.22L18.36 5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <!-- Output Detail -->
        <div class="sd-section">
          <div class="sd-row">
            <span class="sd-label">Output Detail</span>
            <button ref="cycleBtnRef" class="sd-cycle-btn">
              <span class="sd-cycle-text" :key="outputDetail">{{ outputDetailOptions[outputDetail] }}</span>
              <span class="sd-cycle-dots">
                <span
                  v-for="(_, i) in outputDetailOptions"
                  :key="i"
                  :class="['sd-cycle-dot', { active: outputDetail === i }]"
                />
              </span>
            </button>
          </div>
        </div>

        <!-- Marker Colour -->
        <div class="sd-section">
          <span class="sd-label sd-label-marker">Marker Colour</span>
          <div class="sd-colors">
            <div
              v-for="(color, i) in colorOptions"
              :key="color.value"
              :ref="i === 3 ? 'greenColorRef' : undefined"
              :class="['sd-color-ring', { selected: selectedColor === i }]"
              :style="{ borderColor: selectedColor === i ? color.value : 'transparent' }"
            >
              <div
                :class="['sd-color', { selected: selectedColor === i }]"
                :style="{ backgroundColor: color.value }"
              />
            </div>
          </div>
        </div>

        <!-- Checkboxes -->
        <div class="sd-section">
          <label class="sd-checkbox-row">
            <span ref="clearCheckboxRef" :class="['sd-checkbox', { checked: clearAfterCopy }]">
              <svg v-if="clearAfterCopy" width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L19 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="sd-checkbox-label">Clear after output</span>
          </label>
          <label class="sd-checkbox-row">
            <span ref="blockCheckboxRef" :class="['sd-checkbox', { checked: blockInteractions }]">
              <svg v-if="blockInteractions" width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L19 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="sd-checkbox-label">Block page interactions</span>
          </label>
        </div>
      </div>

      <!-- Cursor -->
      <div :class="['sd-cursor', { clicking: isClicking }]" :style="{ left: cursorPos.x + 'px', top: cursorPos.y + 'px' }">
        <svg height="24" width="24" viewBox="0 0 32 32">
          <g fill="none" fill-rule="evenodd" transform="translate(10 7)">
            <path d="m6.148 18.473 1.863-1.003 1.615-.839-2.568-4.816h4.332l-11.379-11.408v16.015l3.316-3.221z" fill="#fff"/>
            <path d="m6.431 17 1.765-.941-2.775-5.202h3.604l-8.025-8.043v11.188l2.53-2.442z" fill="#000"/>
          </g>
        </svg>
      </div>
    </div>

    <!-- Caption -->
    <p :key="activeCaption" style="margin-top: 1rem; font-size: 0.75rem; color: rgba(0,0,0,0.5); white-space: pre-line; line-height: 1.3; animation: fadeIn 0.3s ease">
      {{ $t(activeCaption ? captionKeys[activeCaption] : captionKeys.output) }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SettingsDemo',

  data() {
    return {
      outputDetailOptions: ['Compact', 'Standard', 'Detailed', 'Forensic'],
      colorOptions: [
        { value: '#AF52DE', label: 'Purple' },
        { value: '#3c82f7', label: 'Blue' },
        { value: '#5AC8FA', label: 'Cyan' },
        { value: '#34C759', label: 'Green' },
        { value: '#FFD60A', label: 'Yellow' },
        { value: '#FF9500', label: 'Orange' },
        { value: '#FF3B30', label: 'Red' }
      ],
      showPanel: true,
      isDarkMode: true,
      outputDetail: 1,
      selectedColor: 1,
      clearAfterCopy: false,
      blockInteractions: false,
      cursorPos: { x: 190, y: 20 },
      isClicking: false,
      activeCaption: 'output',
      positionsRef: {
        cycleBtn: { x: 178, y: 82 },
        greenColor: { x: 106, y: 142 },
        clearCheckbox: { x: 24, y: 188 },
        blockCheckbox: { x: 24, y: 210 },
        themeToggle: { x: 194, y: 42 }
      },
      captionKeys: {
        output: 'settingsDemo.outputCaption',
        color: 'settingsDemo.colorCaption',
        clear: 'settingsDemo.clearCaption',
        block: 'settingsDemo.blockCaption',
        theme: 'settingsDemo.themeCaption'
      },
      cancelled: false,
      interval: null
    }
  },

  computed: {
    currentColor() {
      return this.colorOptions[this.selectedColor].value
    }
  },

  mounted() {
    setTimeout(() => this.measurePositions(), 100)
    window.addEventListener('resize', this.measurePositions)
    document.addEventListener('visibilitychange', this.handleVisibility)
    this.runAnimation()
    this.interval = setInterval(() => this.runAnimation(), 26000)
  },

  beforeDestroy() {
    this.cancelled = true
    if (this.interval) clearInterval(this.interval)
    window.removeEventListener('resize', this.measurePositions)
    document.removeEventListener('visibilitychange', this.handleVisibility)
  },

  methods: {
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },

    measurePositions() {
      if (!this.$refs.containerRef) return
      const containerRect = this.$refs.containerRef.getBoundingClientRect()

      const getCenter = (el) => {
        if (!el) return null
        const rect = el.getBoundingClientRect()
        return {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2
        }
      }

      const cyclePos = getCenter(this.$refs.cycleBtnRef)
      // In Vue 2, refs inside v-for return arrays
      const greenRef = Array.isArray(this.$refs.greenColorRef)
        ? this.$refs.greenColorRef[0]
        : this.$refs.greenColorRef
      const greenPos = getCenter(greenRef)
      const clearPos = getCenter(this.$refs.clearCheckboxRef)
      const blockPos = getCenter(this.$refs.blockCheckboxRef)
      const themePos = getCenter(this.$refs.themeToggleRef)

      if (cyclePos) this.positionsRef.cycleBtn = cyclePos
      if (greenPos) this.positionsRef.greenColor = greenPos
      if (clearPos) this.positionsRef.clearCheckbox = clearPos
      if (blockPos) this.positionsRef.blockCheckbox = blockPos
      if (themePos) this.positionsRef.themeToggle = themePos
    },

    async click() {
      this.isClicking = true
      await this.delay(100)
      if (!this.cancelled) this.isClicking = false
    },

    async runAnimation() {
      this.showPanel = true
      this.isDarkMode = true
      this.outputDetail = 1
      this.selectedColor = 1
      this.clearAfterCopy = false
      this.blockInteractions = false
      this.activeCaption = 'output'

      await this.delay(100)
      this.measurePositions()
      const pos = this.positionsRef
      this.cursorPos = pos.cycleBtn
      await this.delay(1400)
      if (this.cancelled) return

      await this.click()
      this.outputDetail = 2
      await this.delay(2800)
      if (this.cancelled) return

      this.activeCaption = 'color'
      this.cursorPos = pos.greenColor
      await this.delay(1000)
      if (this.cancelled) return
      await this.click()
      this.selectedColor = 3
      await this.delay(2800)
      if (this.cancelled) return

      this.activeCaption = 'clear'
      this.cursorPos = pos.clearCheckbox
      await this.delay(1000)
      if (this.cancelled) return
      await this.click()
      this.clearAfterCopy = true
      await this.delay(2800)
      if (this.cancelled) return

      this.activeCaption = 'block'
      this.cursorPos = pos.blockCheckbox
      await this.delay(1000)
      if (this.cancelled) return
      await this.click()
      this.blockInteractions = true
      await this.delay(2800)
      if (this.cancelled) return

      this.activeCaption = 'theme'
      this.cursorPos = pos.themeToggle
      await this.delay(1000)
      if (this.cancelled) return
      await this.click()
      this.isDarkMode = false
      await this.delay(3000)
      if (this.cancelled) return

      await this.delay(1500)
    },

    handleVisibility() {
      if (document.visibilityState === 'visible') {
        this.cancelled = true
        if (this.interval) clearInterval(this.interval)
        setTimeout(() => {
          this.cancelled = false
          this.runAnimation()
          this.interval = setInterval(() => this.runAnimation(), 26000)
        }, 100)
      }
    }
  }
}
</script>
