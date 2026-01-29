<template>
  <div class="fd-container">
    <div class="demo-window">
      <div class="demo-browser-bar">
        <div class="demo-dot" />
        <div class="demo-dot" />
        <div class="demo-dot" />
        <div class="demo-url">localhost:3000/settings</div>
      </div>

      <div class="demo-content" ref="contentRef">
        <div class="csd-profile-card">
          <div ref="btnRef" class="csd-avatar" />
          <div class="csd-profile-info">
            <div class="csd-name" />
            <div class="csd-email" />
          </div>
          <div class="csd-edit-btn" />
        </div>
        <div class="csd-stats-row">
          <div class="csd-stat">
            <div class="csd-stat-value" />
            <div class="csd-stat-label" />
          </div>
          <div class="csd-stat">
            <div class="csd-stat-value short" />
            <div class="csd-stat-label" />
          </div>
          <div class="csd-stat">
            <div class="csd-stat-value" />
            <div class="csd-stat-label" />
          </div>
        </div>

        <div
          :class="['csd-highlight', { visible: showHighlight }]"
          :style="{ top: btnPos.y - 4 + 'px', left: btnPos.x - 4 + 'px', width: btnPos.width + 8 + 'px', height: btnPos.height + 8 + 'px' }"
        />
        <div
          :class="['demo-marker', { visible: showMarker }]"
          :style="{ top: btnPos.y + btnPos.height / 2 + 'px', left: btnPos.x + btnPos.width / 2 + 'px' }"
        >1</div>

        <div :class="['demo-popup csd-popup', { visible: showPopup }]" style="top: 55px; left: 35%">
          <div class="csd-popup-header">
            <button ref="chevronRef" class="csd-toggle-btn" type="button">
              <svg
                :class="['csd-chevron', { expanded: isStylesExpanded }]"
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M5.5 10.25L9 7.25L5.75 4"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="csd-element">&lt;img.avatar&gt;</span>
            </button>
          </div>

          <div :class="['csd-styles-wrapper', { expanded: isStylesExpanded }]">
            <div class="csd-styles-inner">
              <div class="csd-styles-block">
                <div v-for="style in computedStyles" :key="style.prop" class="csd-style-line">
                  <span class="csd-style-prop">{{ style.prop }}</span>
                  : <span class="csd-style-value">{{ style.value }}</span>;
                </div>
              </div>
            </div>
          </div>

          <div class="demo-popup-input">
            {{ typedText }}<span style="opacity: 0.4">|</span>
          </div>
          <div class="demo-popup-actions">
            <div class="demo-popup-btn cancel">Cancel</div>
            <div class="demo-popup-btn submit">Add</div>
          </div>
        </div>

        <div class="demo-cursor" :style="{ left: cursorPos.x + 'px', top: cursorPos.y + 'px' }">
          <div :class="['demo-cursor-pointer', { hidden: isCrosshair }]">
            <svg height="24" width="24" viewBox="0 0 32 32">
              <g fill="none" fill-rule="evenodd" transform="translate(10 7)">
                <path d="m6.148 18.473 1.863-1.003 1.615-.839-2.568-4.816h4.332l-11.379-11.408v16.015l3.316-3.221z" fill="#fff"/>
                <path d="m6.431 17 1.765-.941-2.775-5.202h3.604l-8.025-8.043v11.188l2.53-2.442z" fill="#000"/>
              </g>
            </svg>
          </div>
          <div :class="['demo-cursor-crosshair', { hidden: !isCrosshair }]">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <line x1="8.5" y1="0" x2="8.5" y2="17" stroke="black" stroke-width="1"/>
              <line x1="0" y1="8.5" x2="17" y2="8.5" stroke="black" stroke-width="1"/>
            </svg>
          </div>
        </div>

        <div class="demo-toolbar">
          <div class="demo-toolbar-buttons">
            <ToolbarIcon icon="pause" />
            <ToolbarIcon icon="eye" :disabled="!showMarker" />
            <ToolbarIcon icon="copy" :disabled="!showMarker" />
            <ToolbarIcon icon="trash" :disabled="!showMarker" />
            <ToolbarIcon icon="settings" />
            <div class="demo-toolbar-divider" />
            <ToolbarIcon icon="close" />
          </div>
        </div>
      </div>
    </div>

    <p style="margin-top: 1rem; font-size: 0.75rem; color: rgba(0,0,0,0.5); white-space: pre-line; line-height: 1.3">
      {{ $t('computedStylesDemo.caption') }}
    </p>
  </div>
</template>

<script>
import ToolbarIcon from './ToolbarIcon.vue'

export default {
  name: 'ComputedStylesDemo',
  components: { ToolbarIcon },

  data() {
    return {
      cursorPos: { x: 300, y: 80 },
      showHighlight: false,
      showPopup: false,
      showMarker: false,
      typedText: '',
      isCrosshair: true,
      isStylesExpanded: false,
      btnPos: { x: 20, y: 100, width: 100, height: 36 },
      btnPosRef: { x: 20, y: 100, width: 100, height: 36 },
      chevronPosRef: { x: 0, y: 0 },
      feedbackText: 'Make avatar 48px',
      computedStyles: [
        { prop: 'width', value: '44px' },
        { prop: 'height', value: '44px' },
        { prop: 'border-radius', value: '50%' },
        { prop: 'object-fit', value: 'cover' },
        { prop: 'background', value: 'linear-gradient(...)' }
      ],
      cancelled: false,
      interval: null
    }
  },

  watch: {
    showPopup(visible) {
      if (visible && this.$refs.chevronRef && this.$refs.contentRef) {
        setTimeout(() => {
          if (this.$refs.chevronRef && this.$refs.contentRef) {
            const chevronRect = this.$refs.chevronRef.getBoundingClientRect()
            const contentRect = this.$refs.contentRef.getBoundingClientRect()
            this.chevronPosRef = {
              x: chevronRect.left - contentRect.left + chevronRect.width / 2,
              y: chevronRect.top - contentRect.top + chevronRect.height / 2
            }
          }
        }, 50)
      }
    }
  },

  mounted() {
    setTimeout(() => this.measure(), 100)
    window.addEventListener('resize', this.measure)
    document.addEventListener('visibilitychange', this.handleVisibility)
    this.runAnimation()
    this.interval = setInterval(() => this.runAnimation(), 10000)
  },

  beforeDestroy() {
    this.cancelled = true
    if (this.interval) clearInterval(this.interval)
    window.removeEventListener('resize', this.measure)
    document.removeEventListener('visibilitychange', this.handleVisibility)
  },

  methods: {
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },

    measure() {
      if (this.$refs.btnRef && this.$refs.contentRef) {
        const btnRect = this.$refs.btnRef.getBoundingClientRect()
        const contentRect = this.$refs.contentRef.getBoundingClientRect()
        const newPos = {
          x: btnRect.left - contentRect.left,
          y: btnRect.top - contentRect.top,
          width: btnRect.width,
          height: btnRect.height
        }
        this.btnPosRef = newPos
        this.btnPos = newPos
      }
    },

    async runAnimation() {
      this.cursorPos = { x: 300, y: 80 }
      this.showHighlight = false
      this.showPopup = false
      this.showMarker = false
      this.typedText = ''
      this.isCrosshair = true
      this.isStylesExpanded = false

      await this.delay(600)
      if (this.cancelled) return

      const pos = this.btnPosRef
      this.cursorPos = { x: pos.x + pos.width / 2, y: pos.y + pos.height / 2 }
      await this.delay(400)
      if (this.cancelled) return

      this.showHighlight = true
      await this.delay(300)
      if (this.cancelled) return

      await this.delay(200)
      if (this.cancelled) return
      this.showPopup = true
      await this.delay(400)
      if (this.cancelled) return

      this.isCrosshair = false
      const chevronPos = this.chevronPosRef
      this.cursorPos = { x: chevronPos.x, y: chevronPos.y }
      await this.delay(400)
      if (this.cancelled) return

      this.isStylesExpanded = true
      await this.delay(1200)
      if (this.cancelled) return

      this.isStylesExpanded = false
      await this.delay(400)
      if (this.cancelled) return

      this.isCrosshair = true
      this.cursorPos = { x: 180, y: 168 }
      await this.delay(300)
      if (this.cancelled) return

      for (let i = 0; i <= this.feedbackText.length; i++) {
        if (this.cancelled) return
        this.typedText = this.feedbackText.slice(0, i)
        await this.delay(35)
      }
      await this.delay(400)
      if (this.cancelled) return

      this.showPopup = false
      await this.delay(200)
      if (this.cancelled) return
      this.showMarker = true

      await this.delay(2000)
      if (this.cancelled) return

      this.showMarker = false
      this.showHighlight = false
      await this.delay(300)
    },

    handleVisibility() {
      if (document.visibilityState === 'visible') {
        this.cancelled = true
        if (this.interval) clearInterval(this.interval)
        setTimeout(() => {
          this.cancelled = false
          this.runAnimation()
          this.interval = setInterval(() => this.runAnimation(), 10000)
        }, 100)
      }
    }
  }
}
</script>
