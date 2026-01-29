<template>
  <div class="demo-window">
    <div class="demo-browser-bar">
      <div class="demo-dot" />
      <div class="demo-dot" />
      <div class="demo-dot" />
      <div class="demo-url">localhost:3000/account</div>
    </div>

    <div class="demo-content" ref="contentRef">
      <div class="ecd-faux-title" />
      <div class="ecd-plan-card">
        <div class="ecd-plan-header">
          <div class="ecd-faux-badge" />
          <div class="ecd-plan-usage">
            <div class="ecd-faux-label" />
            <div class="ecd-faux-value" />
          </div>
        </div>
        <div class="ecd-plan-progress">
          <div class="ecd-plan-progress-fill" />
        </div>
        <div class="ecd-plan-features">
          <div class="ecd-feature">
            <div class="ecd-faux-check" />
            <div class="ecd-faux-text" :style="{ width: '50px' }" />
          </div>
          <div class="ecd-feature">
            <div class="ecd-faux-check" />
            <div class="ecd-faux-text" :style="{ width: '70px' }" />
          </div>
          <div class="ecd-feature disabled">
            <div class="ecd-faux-x" />
            <div class="ecd-faux-text" :style="{ width: '80px' }" />
          </div>
        </div>
        <div class="ecd-upgrade-btn" ref="btnRef" />
      </div>

      <div
        :class="['ecd-highlight', { visible: showHighlight }]"
        :style="{ top: btnPos.y - 4 + 'px', left: btnPos.x - 4 + 'px', width: btnPos.width + 8 + 'px', height: btnPos.height + 8 + 'px' }"
      />
      <div
        :class="['demo-marker', { visible: showMarker }]"
        :style="{ top: btnPos.y + btnPos.height / 2 + 'px', left: btnPos.x + btnPos.width / 2 + 'px' }"
      >1</div>

      <div :class="['demo-popup ecd-popup', { visible: showPopup }]" style="top: 115px">
        <div class="demo-popup-header">&lt;button.upgrade-btn&gt;</div>
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
</template>

<script>
import ToolbarIcon from './ToolbarIcon.vue'

export default {
  name: 'ElementClickDemo',
  components: { ToolbarIcon },

  data() {
    return {
      cursorPos: { x: 350, y: 80 },
      showHighlight: false,
      showPopup: false,
      showMarker: false,
      typedText: '',
      isCrosshair: false,
      btnPos: { x: 20, y: 181, width: 330, height: 32 },
      btnPosRef: { x: 20, y: 181, width: 330, height: 32 },
      feedbackText: 'Make this more prominent',
      cancelled: false,
      interval: null
    }
  },

  mounted() {
    setTimeout(() => this.measure(), 100)
    window.addEventListener('resize', this.measure)
    document.addEventListener('visibilitychange', this.handleVisibility)
    this.runAnimation()
    this.interval = setInterval(() => this.runAnimation(), 8000)
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
      this.cursorPos = { x: 350, y: 80 }
      this.showHighlight = false
      this.showPopup = false
      this.showMarker = false
      this.typedText = ''
      this.isCrosshair = true

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
      await this.delay(300)
      if (this.cancelled) return

      for (let i = 0; i <= this.feedbackText.length; i++) {
        if (this.cancelled) return
        this.typedText = this.feedbackText.slice(0, i)
        await this.delay(30)
      }
      await this.delay(400)
      if (this.cancelled) return

      this.showPopup = false
      await this.delay(200)
      if (this.cancelled) return
      this.showMarker = true

      await this.delay(2500)
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
          this.interval = setInterval(() => this.runAnimation(), 8000)
        }, 100)
      }
    }
  }
}
</script>
