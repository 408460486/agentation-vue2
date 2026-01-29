<template>
  <div class="fd-container">
    <div class="demo-window sid-demo">
      <div class="demo-browser-bar">
        <div class="demo-dot" />
        <div class="demo-dot" />
        <div class="demo-dot" />
        <div class="demo-url">localhost:3000/@benjitaylor</div>
      </div>

      <div class="demo-content sid-page" ref="contentRef">
        <!-- Banner -->
        <div ref="cardRef" :class="['sid-banner', { hovered: activeElement === 'card' }]" />

        <!-- Avatar -->
        <img
          ref="imageRef"
          src="/demo-avatar.png"
          alt="avatar"
          :class="['sid-avatar', { hovered: activeElement === 'image' }]"
        />

        <!-- Follow button -->
        <button ref="buttonRef" :class="['sid-follow-btn', { hovered: activeElement === 'button' }]">
          Follow
        </button>

        <!-- Profile info -->
        <div class="sid-profile-info">
          <h3 ref="headingRef" :class="['sid-name', { hovered: activeElement === 'heading' }]">
            Benji Taylor
          </h3>
          <span class="sid-handle">@benjitaylor</span>
          <p class="sid-bio">head of design <span class="sid-mention">@base</span>. founder <span class="sid-mention">@family</span> (acq by <span class="sid-mention">@aave</span>). tools <span class="sid-mention">@dip</span>.</p>
          <div class="sid-meta">
            <span class="sid-location">Los Angeles, CA</span>
            <a ref="linkRef" :class="['sid-link', { hovered: activeElement === 'link' }]">
              benji.org
            </a>
          </div>
          <div class="sid-stats">
            <span><strong>394</strong> Following</span>
            <span><strong>28.3K</strong> Followers</span>
          </div>
        </div>

        <!-- Tabs -->
        <div class="sid-tabs">
          <input
            ref="inputRef"
            type="text"
            placeholder="Search posts"
            :class="['sid-search', { hovered: activeElement === 'input' }]"
            readonly
          />
        </div>

        <!-- Label -->
        <div
          v-if="showLabel && activeElement"
          :class="['sid-label', labelPos.below ? 'below' : 'above']"
          :style="{ left: labelPos.x + 'px', top: labelPos.y + 'px' }"
        >
          {{ labels[activeElement] }}
        </div>

        <!-- Cursor -->
        <div class="demo-cursor" :style="{ left: cursorPos.x + 'px', top: cursorPos.y + 'px' }">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <line x1="8.5" y1="0" x2="8.5" y2="17" stroke="black" stroke-width="1"/>
            <line x1="0" y1="8.5" x2="17" y2="8.5" stroke="black" stroke-width="1"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Caption -->
    <p :key="activeCaption" style="margin-top: 1rem; font-size: 0.75rem; color: rgba(0,0,0,0.5); line-height: 1.5; animation: fadeIn 0.3s ease">
      {{ $t(captionKeys[activeCaption]) }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SmartIdentificationDemo',

  data() {
    return {
      cursorPos: { x: 100, y: 80 },
      activeElement: null,
      activeCaption: 'button',
      showLabel: false,
      labelPos: { x: 0, y: 0, below: false },
      labels: {
        button: 'button.Follow',
        link: 'a.benji.org',
        heading: 'h3.Benji Taylor',
        image: 'img[alt="avatar"]',
        input: 'input[placeholder]',
        card: '.header-banner'
      },
      captionKeys: {
        button: 'smartIdDemo.buttonCaption',
        link: 'smartIdDemo.linkCaption',
        heading: 'smartIdDemo.headingCaption',
        image: 'smartIdDemo.imageCaption',
        input: 'smartIdDemo.inputCaption',
        card: 'smartIdDemo.cardCaption'
      },
      cancelled: false,
      interval: null
    }
  },

  mounted() {
    document.addEventListener('visibilitychange', this.handleVisibility)
    this.runAnimation()
    this.interval = setInterval(() => this.runAnimation(), 14000)
  },

  beforeDestroy() {
    this.cancelled = true
    if (this.interval) clearInterval(this.interval)
    document.removeEventListener('visibilitychange', this.handleVisibility)
  },

  methods: {
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },

    getElementPosition(el, preferBelow = false) {
      if (!el || !this.$refs.contentRef) return null
      const contentRect = this.$refs.contentRef.getBoundingClientRect()
      const rect = el.getBoundingClientRect()

      const cursorX = rect.left - contentRect.left + 14
      const cursorY = rect.top - contentRect.top + 14

      const rawLabelX = rect.left - contentRect.left + rect.width / 2
      const labelX = Math.max(70, Math.min(rawLabelX, contentRect.width - 70))

      const spaceAbove = rect.top - contentRect.top
      const below = preferBelow || spaceAbove < 30
      const labelY = below
        ? Math.min(rect.bottom - contentRect.top + 8, contentRect.height - 30)
        : Math.max(rect.top - contentRect.top - 8, 30)

      return { cursorX, cursorY, labelX, labelY, below }
    },

    async hoverElement(element, el, preferBelow = false, duration = 1600) {
      if (this.cancelled) return
      this.showLabel = false
      this.activeElement = null
      this.activeCaption = element

      const pos = this.getElementPosition(el, preferBelow)
      if (!pos) return

      this.cursorPos = { x: pos.cursorX, y: pos.cursorY }

      await this.delay(400)
      if (this.cancelled) return

      this.activeElement = element
      this.labelPos = { x: pos.labelX, y: pos.labelY, below: pos.below }
      this.showLabel = true

      await this.delay(duration)
      if (this.cancelled) return

      this.showLabel = false
      this.activeElement = null
      await this.delay(60)
    },

    async runAnimation() {
      this.cursorPos = { x: 100, y: 80 }
      this.activeElement = null
      this.showLabel = false

      await this.delay(400)
      if (this.cancelled) return

      await this.hoverElement('button', this.$refs.buttonRef, true)
      if (this.cancelled) return

      await this.hoverElement('link', this.$refs.linkRef, true)
      if (this.cancelled) return

      await this.hoverElement('heading', this.$refs.headingRef, true)
      if (this.cancelled) return

      await this.hoverElement('image', this.$refs.imageRef)
      if (this.cancelled) return

      await this.hoverElement('input', this.$refs.inputRef)
      if (this.cancelled) return

      await this.hoverElement('card', this.$refs.cardRef)
      if (this.cancelled) return

      await this.delay(500)
    },

    handleVisibility() {
      if (document.visibilityState === 'visible') {
        this.cancelled = true
        if (this.interval) clearInterval(this.interval)
        setTimeout(() => {
          this.cancelled = false
          this.runAnimation()
          this.interval = setInterval(() => this.runAnimation(), 14000)
        }, 100)
      }
    }
  }
}
</script>
