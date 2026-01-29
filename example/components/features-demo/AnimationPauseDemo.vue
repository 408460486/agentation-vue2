<template>
  <div class="demo-window">
    <div class="demo-browser-bar">
      <div class="demo-dot" />
      <div class="demo-dot" />
      <div class="demo-dot" />
      <div class="demo-url">localhost:3000/upload</div>
    </div>

    <div class="demo-content" ref="contentRef">
      <div class="apd-skeleton-card" ref="progressRef">
        <div :class="['apd-skeleton-avatar', { paused: isPaused }]" />
        <div class="apd-skeleton-lines">
          <div :class="['apd-skeleton-line', { paused: isPaused }]" style="width: 70%" />
          <div :class="['apd-skeleton-line short', { paused: isPaused }]" style="width: 45%" />
        </div>
      </div>
      <div class="apd-skeleton-card">
        <div :class="['apd-skeleton-avatar', { paused: isPaused }]" />
        <div class="apd-skeleton-lines">
          <div :class="['apd-skeleton-line', { paused: isPaused }]" style="width: 85%" />
          <div :class="['apd-skeleton-line short', { paused: isPaused }]" style="width: 55%" />
        </div>
      </div>

      <div
        :class="['apd-highlight', { visible: showHighlight }]"
        :style="{ top: progressPos.y - 4 + 'px', left: progressPos.x - 4 + 'px', width: progressPos.width + 8 + 'px', height: progressPos.height + 8 + 'px' }"
      />
      <div
        :class="['demo-marker', { visible: showMarker }]"
        :style="{ top: progressPos.y + progressPos.height / 2 + 'px', left: progressPos.x + progressPos.width / 2 + 'px' }"
      >1</div>

      <div :class="['demo-popup', { visible: showPopup }]" style="top: 70px">
        <div class="demo-popup-header">&lt;div.skeleton-card&gt;</div>
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
          <div ref="pauseBtnRef" style="display: flex">
            <ToolbarIcon :icon="isPaused ? 'play' : 'pause'" :active="isPaused" />
          </div>
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
  name: 'AnimationPauseDemo',
  components: { ToolbarIcon },

  data() {
    return {
      cursorPos: { x: 300, y: 100 },
      isPaused: false,
      showHighlight: false,
      showPopup: false,
      showMarker: false,
      typedText: '',
      isCrosshair: false,
      progressPos: { x: 20, y: 138, width: 330, height: 12 },
      pauseBtnPos: { x: 218, y: 275, width: 28, height: 28 },
      progressPosRef: { x: 20, y: 138, width: 330, height: 12 },
      pauseBtnPosRef: { x: 218, y: 275, width: 28, height: 28 },
      feedbackText: 'Skeleton pulses too fast',
      cancelled: false,
      interval: null
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
      if (this.$refs.progressRef && this.$refs.contentRef) {
        const progressRect = this.$refs.progressRef.getBoundingClientRect()
        const contentRect = this.$refs.contentRef.getBoundingClientRect()
        const newPos = {
          x: progressRect.left - contentRect.left,
          y: progressRect.top - contentRect.top,
          width: progressRect.width,
          height: progressRect.height
        }
        this.progressPosRef = newPos
        this.progressPos = newPos
      }
      if (this.$refs.pauseBtnRef && this.$refs.contentRef) {
        const btnRect = this.$refs.pauseBtnRef.getBoundingClientRect()
        const contentRect = this.$refs.contentRef.getBoundingClientRect()
        const newPos = {
          x: btnRect.left - contentRect.left,
          y: btnRect.top - contentRect.top,
          width: btnRect.width,
          height: btnRect.height
        }
        this.pauseBtnPosRef = newPos
        this.pauseBtnPos = newPos
      }
    },

    async runAnimation() {
      this.cursorPos = { x: 300, y: 100 }
      this.isPaused = false
      this.showHighlight = false
      this.showPopup = false
      this.showMarker = false
      this.typedText = ''
      this.isCrosshair = true

      await this.delay(800)
      if (this.cancelled) return

      this.isCrosshair = false
      const pausePos = this.pauseBtnPosRef
      this.cursorPos = { x: pausePos.x + pausePos.width / 2, y: pausePos.y + pausePos.height / 2 }
      await this.delay(450)
      if (this.cancelled) return

      await this.delay(150)
      if (this.cancelled) return
      this.isPaused = true
      await this.delay(500)
      if (this.cancelled) return

      this.isCrosshair = true
      const pos = this.progressPosRef
      this.cursorPos = { x: pos.x + pos.width / 2, y: pos.y + pos.height / 2 }
      await this.delay(450)
      if (this.cancelled) return

      this.showHighlight = true
      await this.delay(300)
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
      this.isPaused = false
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
