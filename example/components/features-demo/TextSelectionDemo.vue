<template>
  <div class="demo-window text-demo">
    <div class="demo-browser-bar">
      <div class="demo-dot" />
      <div class="demo-dot" />
      <div class="demo-dot" />
      <div class="demo-url">localhost:3000/blog</div>
    </div>

    <div class="demo-content" ref="contentRef">
      <p class="demo-quote">
        "Simple can be harder than complex: You have to work hard to get your thinking clean to make it <span ref="wordRef">simpl</span>. But it's worth it in the end because once you get there, you can move mountains."
      </p>
      <p class="demo-quote-author">— Steve Jobs</p>

      <div
        :class="['tsd-highlight', { visible: showSelection }]"
        :style="{ left: wordPos.x - 2 + 'px', top: wordPos.y - 1 + 'px', width: selectionWidth + 4 + 'px', height: '16px' }"
      />
      <div
        :class="['demo-marker', { visible: showMarker }]"
        :style="{ top: wordPos.y + 1 + 'px', left: wordPos.x + wordPos.width + 'px' }"
      >1</div>

      <div :class="['demo-popup', { visible: showPopup }]">
        <div class="demo-popup-header">"simpl"</div>
        <div class="demo-popup-input">
          {{ typedText }}<span style="opacity: 0.4">|</span>
        </div>
        <div class="demo-popup-actions">
          <div class="demo-popup-btn cancel">Cancel</div>
          <div class="demo-popup-btn submit">Add</div>
        </div>
      </div>

      <div :class="['demo-cursor', { selecting: isSelecting }]" :style="{ left: actualCursorX + 'px', top: cursorPos.y + 'px' }">
        <div :class="['demo-cursor-crosshair', { hidden: isTextCursor }]">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <line x1="8.5" y1="0" x2="8.5" y2="17" stroke="black" stroke-width="1"/>
            <line x1="0" y1="8.5" x2="17" y2="8.5" stroke="black" stroke-width="1"/>
          </svg>
        </div>
        <div :class="['demo-cursor-text', { hidden: !isTextCursor }]">
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M3 1H7M3 15H7M5 1V15" stroke="#000" stroke-width="1" stroke-linecap="round"/>
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
  name: 'TextSelectionDemo',
  components: { ToolbarIcon },

  data() {
    return {
      typedText: '',
      cursorPos: { x: 300, y: 180 },
      showSelection: false,
      selectionWidth: 0,
      showPopup: false,
      showMarker: false,
      isTextCursor: false,
      isSelecting: false,
      wordPos: { x: 52, y: 57, width: 44 },
      wordPosRef: { x: 52, y: 57, width: 44 },
      feedbackText: 'Fix typo',
      cancelled: false,
      interval: null
    }
  },

  computed: {
    actualCursorX() {
      return this.isSelecting ? this.wordPos.x + this.selectionWidth : this.cursorPos.x
    }
  },

  mounted() {
    setTimeout(() => this.measure(), 100)
    window.addEventListener('resize', this.measure)
    document.addEventListener('visibilitychange', this.handleVisibility)
    this.runAnimation()
    this.interval = setInterval(() => this.runAnimation(), 6000)
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
      if (this.$refs.wordRef && this.$refs.contentRef) {
        const wordRect = this.$refs.wordRef.getBoundingClientRect()
        const contentRect = this.$refs.contentRef.getBoundingClientRect()
        const newPos = {
          x: wordRect.left - contentRect.left,
          y: wordRect.top - contentRect.top,
          width: wordRect.width
        }
        this.wordPosRef = newPos
        this.wordPos = newPos
      }
    },

    async runAnimation() {
      this.typedText = ''
      this.cursorPos = { x: 300, y: 180 }
      this.showSelection = false
      this.selectionWidth = 0
      this.showPopup = false
      this.showMarker = false
      this.isTextCursor = false
      this.isSelecting = false

      await this.delay(600)
      if (this.cancelled) return

      const pos = this.wordPosRef
      this.cursorPos = { x: pos.x, y: pos.y }
      await this.delay(180)
      if (this.cancelled) return
      this.isTextCursor = true
      await this.delay(250)
      if (this.cancelled) return

      this.isSelecting = true
      this.showSelection = true

      const endWidth = pos.width
      const steps = 14
      const stepSize = endWidth / steps

      for (let i = 0; i <= steps; i++) {
        if (this.cancelled) return
        this.selectionWidth = Math.round(i * stepSize)
        await this.delay(20)
      }

      this.cursorPos = { x: pos.x + endWidth, y: pos.y }
      this.isSelecting = false
      await this.delay(250)
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

      await this.delay(1800)
      if (this.cancelled) return

      this.showMarker = false
      this.showSelection = false
      await this.delay(200)
    },

    handleVisibility() {
      if (document.visibilityState === 'visible') {
        this.cancelled = true
        if (this.interval) clearInterval(this.interval)
        setTimeout(() => {
          this.cancelled = false
          this.runAnimation()
          this.interval = setInterval(() => this.runAnimation(), 7000)
        }, 100)
      }
    }
  }
}
</script>
