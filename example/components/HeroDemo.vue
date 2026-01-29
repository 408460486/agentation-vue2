<template>
  <div class="hero-demo-container">
    <!-- Browser window -->
    <div :class="['hero-demo-browser', { faded: showTerminal }]">
      <!-- Browser chrome -->
      <div class="hero-demo-browser-bar">
        <div class="hero-demo-dot red" />
        <div class="hero-demo-dot yellow" />
        <div class="hero-demo-dot green" />
        <div class="hero-demo-url-bar">localhost:3000</div>
      </div>

      <!-- Page content -->
      <div class="hero-demo-content" ref="contentRef">
        <!-- Sidebar -->
        <div class="hero-demo-sidebar">
          <div class="hero-demo-sidebar-logo" />
          <div class="hero-demo-sidebar-icons" ref="sidebarIconsRef">
            <div :class="['hero-demo-sidebar-icon', { selected: selectedSidebarIcons.includes(0) }]" />
            <div :class="['hero-demo-sidebar-icon', 'active', { selected: selectedSidebarIcons.includes(1) }]" />
            <div :class="['hero-demo-sidebar-icon', { selected: selectedSidebarIcons.includes(2) }]" />
          </div>
          <div class="hero-demo-sidebar-bottom">
            <div class="hero-demo-sidebar-icon circle" />
          </div>
        </div>

        <!-- Main content -->
        <div class="hero-demo-main">
          <!-- Header -->
          <div class="hero-demo-header">
            <div class="hero-demo-header-left">
              <div class="hero-demo-logo" />
              <span class="hero-demo-title-text" ref="timeRef">{{ headerText }}</span>
            </div>
            <div class="hero-demo-button" ref="btnRef" />
          </div>

          <!-- Metrics row -->
          <div class="hero-demo-metrics" ref="metricsRef">
            <div :class="['hero-demo-metric', { selected: selectedMetrics.includes(0) }]">
              <div class="hero-demo-metric-label" />
              <div class="hero-demo-metric-value" />
            </div>
            <div :class="['hero-demo-metric', { selected: selectedMetrics.includes(1) }]">
              <div class="hero-demo-metric-label" style="width: 55px" />
              <div class="hero-demo-metric-value wide" />
            </div>
            <div :class="['hero-demo-metric', { selected: selectedMetrics.includes(2) }]">
              <div class="hero-demo-metric-label" style="width: 38px" />
              <div class="hero-demo-metric-value" style="width: 40px" />
            </div>
          </div>

          <!-- Table -->
          <div class="hero-demo-table">
            <div class="hero-demo-table-header">
              <div class="hero-demo-th" style="width: 60px" />
              <div class="hero-demo-th" style="width: 45px" />
              <div class="hero-demo-th" style="width: 40px" />
            </div>
            <div class="hero-demo-table-row">
              <div class="hero-demo-td" style="width: 70px" />
              <div class="hero-demo-td" style="width: 50px" />
              <div class="hero-demo-td-pill" />
            </div>
            <div class="hero-demo-table-row">
              <div class="hero-demo-td" style="width: 55px" />
              <div class="hero-demo-td" style="width: 42px" />
              <div class="hero-demo-td-pill" style="width: 42px" />
            </div>
            <div class="hero-demo-table-row">
              <div class="hero-demo-td" style="width: 62px" />
              <div class="hero-demo-td" style="width: 38px" />
              <div class="hero-demo-td-pill" />
            </div>
          </div>

          <!-- Toolbar -->
          <div
            ref="toolbarRef"
            :class="['hero-demo-toolbar', { expanded: isToolbarExpanded, hovered: isToolbarHovered, clicking: isToolbarClicking }]"
          >
            <div class="hero-demo-toolbar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M11.5 12L5.5 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.5 6.75L5.5 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.25 17.25L5.5 17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
            </div>

            <div class="hero-demo-toolbar-buttons">
              <!-- Pause -->
              <div class="hero-demo-toolbar-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M8 6L8 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M16 18L16 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <!-- Eye -->
              <div class="hero-demo-toolbar-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <!-- Copy -->
              <div ref="copyBtnRef" :class="['hero-demo-toolbar-btn', { active: copyClicked, hovered: copyHovered }]">
                <svg v-if="copyClicked" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12L10 17L19 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <!-- Trash -->
              <div class="hero-demo-toolbar-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M10 11.5L10.125 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14 11.5L13.87 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 7.5V6.25C9 5.42157 9.67157 4.75 10.5 4.75H13.5C14.3284 4.75 15 5.42157 15 6.25V7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.5 7.75H18.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M6.75 7.75L7.11691 16.189C7.16369 17.2649 7.18708 17.8028 7.41136 18.2118C7.60875 18.5717 7.91211 18.8621 8.28026 19.0437C8.69854 19.25 9.23699 19.25 10.3139 19.25H13.6861C14.763 19.25 15.3015 19.25 15.7197 19.0437C16.0879 18.8621 16.3912 18.5717 16.5886 18.2118C16.8129 17.8028 16.8363 17.2649 16.8831 16.189L17.25 7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <!-- Gear -->
              <div class="hero-demo-toolbar-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="12" r="2.5" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </div>

              <div class="hero-demo-toolbar-divider" />

              <!-- X -->
              <div class="hero-demo-toolbar-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M16.25 16.25L7.75 7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.75 16.25L16.25 7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Overlays -->
        <div
          :class="['hero-demo-button-highlight', { visible: showHighlight }]"
          :style="{ top: btnPos.y - 4 + 'px', left: btnPos.x - 4 + 'px', width: btnPos.width + 8 + 'px', height: btnPos.height + 8 + 'px' }"
        />

        <!-- Drag box -->
        <div
          v-if="dragBox.visible"
          class="hero-demo-drag-box"
          :style="{ left: dragBox.x + 'px', top: dragBox.y + 'px', width: dragBox.width + 'px', height: dragBox.height + 'px' }"
        />

        <!-- Area outline -->
        <div
          :class="['hero-demo-area-outline', { visible: areaOutline.visible }]"
          :style="{ left: areaOutline.x + 'px', top: areaOutline.y + 'px', width: areaOutline.width + 'px', height: areaOutline.height + 'px' }"
        />

        <!-- Existing markers -->
        <div class="hero-demo-marker visible" style="top: 52px; left: 104px">1</div>
        <div class="hero-demo-marker visible" style="top: 105px; left: 224px">2</div>

        <!-- New marker -->
        <div
          :class="['hero-demo-marker', { visible: showNewMarker }]"
          :style="{ top: btnPos.y + btnPos.height / 2 + 'px', left: btnPos.x + btnPos.width / 2 + 'px' }"
        >3</div>

        <!-- Green marker -->
        <div
          :class="['hero-demo-marker', 'green', { visible: showGreenMarker }]"
          :style="{ top: greenMarkerPos.y + 'px', left: greenMarkerPos.x + 'px' }"
        >4</div>

        <!-- Text selection -->
        <div
          v-if="textSelection.visible"
          class="hero-demo-text-selection"
          :style="{ left: textSelection.x + 'px', top: textSelection.y + 'px', width: textSelection.width + 'px' }"
        />

        <!-- Orange marker -->
        <div
          :class="['hero-demo-marker', 'orange', { visible: showOrangeMarker }]"
          :style="{ top: orangeMarkerPos.y + 'px', left: orangeMarkerPos.x + 'px' }"
        >{{ isMobileView ? 3 : 5 }}</div>

        <!-- Popup -->
        <div
          :class="['hero-demo-popup', { visible: showPopup }]"
          :style="{ left: popupPos.x + 'px', top: popupPos.y + 'px' }"
        >
          <div class="hero-demo-popup-header">{{ popupHeader }}</div>
          <div class="hero-demo-popup-input">
            {{ typedText }}<span style="opacity: 0.4">|</span>
          </div>
          <div class="hero-demo-popup-actions">
            <div class="hero-demo-popup-btn cancel">Cancel</div>
            <div :class="['hero-demo-popup-btn', 'submit', popupButtonClass]">Add</div>
          </div>
        </div>

        <!-- Cursor -->
        <div
          :class="['hero-demo-cursor', { dragging: isDragging }]"
          :style="{ left: cursorPos.x + 'px', top: cursorPos.y + 'px' }"
        >
          <div :class="['hero-demo-cursor-pointer', { hidden: isCrosshair || isIBeam }]">
            <svg height="24" width="24" viewBox="0 0 32 32">
              <g fill="none" fill-rule="evenodd" transform="translate(10 7)">
                <path d="m6.148 18.473 1.863-1.003 1.615-.839-2.568-4.816h4.332l-11.379-11.408v16.015l3.316-3.221z" fill="#fff"/>
                <path d="m6.431 17 1.765-.941-2.775-5.202h3.604l-8.025-8.043v11.188l2.53-2.442z" fill="#000"/>
              </g>
            </svg>
          </div>
          <div :class="['hero-demo-cursor-crosshair', { hidden: !isCrosshair || isIBeam }]">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <line x1="8.5" y1="0" x2="8.5" y2="17" stroke="black" stroke-width="1"/>
              <line x1="0" y1="8.5" x2="17" y2="8.5" stroke="black" stroke-width="1"/>
            </svg>
          </div>
          <div :class="['hero-demo-cursor-ibeam', { hidden: !isIBeam }]">
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M3 1H7M3 15H7M5 1V15" stroke="black" stroke-width="1" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Terminal window -->
    <div :class="['hero-demo-terminal', { visible: showTerminal }]">
      <div class="hero-demo-terminal-bar">
        <div class="hero-demo-terminal-dot red" />
        <div class="hero-demo-terminal-dot yellow" />
        <div class="hero-demo-terminal-dot green" />
        <div class="hero-demo-terminal-title">Benji's Project</div>
      </div>
      <div class="hero-demo-terminal-content">
        <div class="hero-demo-terminal-welcome">
          <svg viewBox="0 0 240 76" fill="none" style="width: 100%; height: auto; display: block">
            <rect x="4" y="4" width="148" height="68" rx="3" stroke="#D97757" stroke-width="1.5" fill="none" />
            <text x="160" y="16" fill="rgba(0,0,0,0.7)" font-size="9" font-family="ui-monospace, SFMono-Regular, monospace" font-weight="500">Claude Code</text>
            <text x="160" y="26" fill="rgba(0,0,0,0.4)" font-size="7" font-family="ui-monospace, SFMono-Regular, monospace">v2.1.14</text>
            <text x="78" y="20" fill="rgba(0,0,0,0.6)" font-size="8" font-family="ui-monospace, SFMono-Regular, monospace" text-anchor="middle">Welcome back Benji!</text>
            <g transform="translate(56, 26) scale(0.35)">
              <path d="M104.998 0H20.998V16.2H104.998V0Z" fill="#D77757"/>
              <path d="M34.998 16.1953H20.998V32.3953H34.998V16.1953Z" fill="#D77757"/>
              <rect x="35" y="14.7266" width="56" height="29.4545" fill="black"/>
              <path d="M84 14.7266H42V36.8175H84V14.7266Z" fill="#D77757"/>
              <path d="M105.002 16.1953H91.002V32.3953H105.002V16.1953Z" fill="#D77757"/>
              <path d="M119 32.4023H7V48.6023H119V32.4023Z" fill="#D77757"/>
              <path d="M104.998 48.5977H20.998V64.7977H104.998V48.5977Z" fill="#D77757"/>
              <path d="M35 64.8047H28V81.0047H35V64.8047Z" fill="#D77757"/>
              <path d="M49 64.8047H42V81.0047H49V64.8047Z" fill="#D77757"/>
              <path d="M84 64.8047H77V81.0047H84V64.8047Z" fill="#D77757"/>
              <path d="M98.002 64.8047H91.002V81.0047H98.002V64.8047Z" fill="#D77757"/>
            </g>
            <text x="78" y="62" fill="rgba(0,0,0,0.4)" font-size="7" font-family="ui-monospace, SFMono-Regular, monospace" text-anchor="middle">Opus 4.5 · ~/Code/agentation</text>
          </svg>
        </div>
        {{ terminalText }}<span style="opacity: 0.4">█</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroDemo',

  data() {
    return {
      // Animation states
      typedText: '',
      cursorPos: { x: 280, y: 180 },
      isToolbarExpanded: false,
      isToolbarHovered: false,
      isToolbarClicking: false,
      showHighlight: false,
      showPopup: false,
      showNewMarker: false,
      isCrosshair: false,
      btnPos: { x: 20, y: 82, width: 68, height: 33 },

      // Extended demo states
      dragBox: { visible: false, x: 0, y: 0, width: 0, height: 0 },
      isDragging: false,
      areaOutline: { visible: false, x: 0, y: 0, width: 0, height: 0 },
      showGreenMarker: false,
      greenMarkerPos: { x: 0, y: 0 },
      copyClicked: false,
      copyHovered: false,
      showTerminal: false,
      terminalText: '',
      popupHeader: 'button.submit-btn',
      popupPos: { x: 0, y: 0 },
      headerText: "Benji's Dashboard",
      textSelection: { visible: false, x: 0, y: 0, width: 0 },
      showOrangeMarker: false,
      orangeMarkerPos: { x: 0, y: 0 },
      isIBeam: false,
      isMobileView: false,
      selectedSidebarIcons: [],
      selectedMetrics: [],

      // Position refs
      timePosRef: { x: 0, y: 0, width: 0, height: 0 },
      btnPosRef: { x: 20, y: 82, width: 68, height: 33 },
      metricsPosRef: { x: 0, y: 26, width: 175, height: 58 },
      toolbarPosRef: { x: 280, y: 210 },
      sidebarIconsPosRef: { x: 10, y: 40, width: 24, height: 70 },

      // Animation control
      cancelled: false,
      interval: null,

      // Feedback texts
      feedbackText1: 'Change to primary style',
      feedbackText2: 'Add hover states',
      feedbackText3: 'Make this more prominent'
    }
  },

  computed: {
    popupButtonClass() {
      if (this.popupHeader === 'Sidebar icons' || this.popupHeader === 'Metrics cards') return 'green'
      if (this.popupHeader.startsWith('"')) return 'orange'
      return ''
    }
  },

  mounted() {
    setTimeout(() => this.measure(), 100)
    window.addEventListener('resize', this.measure)
    document.addEventListener('visibilitychange', this.handleVisibility)
    this.startAnimation()
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

    getTerminalOutput(mobile) {
      return mobile ? `## Page Feedback

### 1. button.export-btn
Change to primary style

### 2. Metrics cards
Add hover states

### 3. "${this.headerText}"
Make this more prominent` : `## Page Feedback

### 1. button.export-btn
Change to primary style

### 2. Sidebar icons
Add hover states

### 3. "${this.headerText}"
Make this more prominent`
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
      if (this.$refs.metricsRef && this.$refs.contentRef) {
        const metricsRect = this.$refs.metricsRef.getBoundingClientRect()
        const contentRect = this.$refs.contentRef.getBoundingClientRect()
        const twoCardsWidth = metricsRect.width * 0.72
        this.metricsPosRef = {
          x: metricsRect.left - contentRect.left,
          y: metricsRect.top - contentRect.top,
          width: twoCardsWidth,
          height: metricsRect.height
        }
      }
      if (this.$refs.toolbarRef && this.$refs.contentRef) {
        const toolbarRect = this.$refs.toolbarRef.getBoundingClientRect()
        const contentRect = this.$refs.contentRef.getBoundingClientRect()
        this.toolbarPosRef = {
          x: toolbarRect.left - contentRect.left + toolbarRect.width / 2,
          y: toolbarRect.top - contentRect.top + toolbarRect.height / 2
        }
      }
      if (this.$refs.sidebarIconsRef && this.$refs.contentRef) {
        const iconsRect = this.$refs.sidebarIconsRef.getBoundingClientRect()
        const contentRect = this.$refs.contentRef.getBoundingClientRect()
        this.sidebarIconsPosRef = {
          x: iconsRect.left - contentRect.left,
          y: iconsRect.top - contentRect.top,
          width: iconsRect.width,
          height: iconsRect.height
        }
      }
      if (this.$refs.timeRef && this.$refs.contentRef) {
        const timeRect = this.$refs.timeRef.getBoundingClientRect()
        const contentRect = this.$refs.contentRef.getBoundingClientRect()
        this.timePosRef = {
          x: timeRect.left - contentRect.left,
          y: timeRect.top - contentRect.top,
          width: timeRect.width,
          height: timeRect.height
        }
      }
    },

    resetState() {
      this.typedText = ''
      this.cursorPos = { x: 400, y: 180 }
      this.isToolbarExpanded = false
      this.isToolbarHovered = false
      this.isToolbarClicking = false
      this.showHighlight = false
      this.showPopup = false
      this.showNewMarker = false
      this.isCrosshair = false
      this.dragBox = { visible: false, x: 0, y: 0, width: 0, height: 0 }
      this.isDragging = false
      this.areaOutline = { visible: false, x: 0, y: 0, width: 0, height: 0 }
      this.showGreenMarker = false
      this.copyClicked = false
      this.copyHovered = false
      this.showTerminal = false
      this.terminalText = ''
      this.popupHeader = 'button.submit-btn'
      this.popupPos = { x: 0, y: 0 }
      this.textSelection = { visible: false, x: 0, y: 0, width: 0 }
      this.showOrangeMarker = false
      this.isIBeam = false
      this.isMobileView = typeof window !== 'undefined' && window.innerWidth <= 640
      this.selectedSidebarIcons = []
      this.selectedMetrics = []
    },

    async runAnimation() {
      this.resetState()

      const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640
      this.isMobileView = isMobile

      if (this.cancelled) return
      await this.delay(600)
      if (this.cancelled) return

      // Move cursor to toolbar center
      const toolbarPos = this.toolbarPosRef
      this.cursorPos = { x: toolbarPos.x, y: toolbarPos.y }
      await this.delay(400)
      if (this.cancelled) return

      // Hover toolbar
      this.isToolbarHovered = true
      await this.delay(300)
      if (this.cancelled) return

      // Click toolbar
      this.isToolbarClicking = true
      await this.delay(100)
      if (this.cancelled) return

      // Release and expand
      this.isToolbarClicking = false
      this.isToolbarHovered = false
      this.isToolbarExpanded = true
      await this.delay(400)
      if (this.cancelled) return

      // Switch to crosshair
      this.isCrosshair = true
      await this.delay(200)
      if (this.cancelled) return

      // Move to button
      const pos = this.btnPosRef
      this.cursorPos = { x: pos.x + pos.width / 2, y: pos.y + pos.height / 2 }
      await this.delay(500)
      if (this.cancelled) return

      // Show highlight
      this.showHighlight = true
      await this.delay(400)
      if (this.cancelled) return

      // Click - show popup
      this.showHighlight = false
      await this.delay(100)
      if (this.cancelled) return

      const containerWidth = this.$refs.contentRef?.offsetWidth || 300
      const cursorX = pos.x + pos.width / 2
      const popupX = Math.min(Math.max(100, cursorX - 80), containerWidth - 100)
      this.popupPos = { x: popupX, y: pos.y + pos.height + 7 }
      this.showPopup = true
      await this.delay(300)
      if (this.cancelled) return

      // Type feedback
      for (let i = 0; i <= this.feedbackText1.length; i++) {
        if (this.cancelled) return
        this.typedText = this.feedbackText1.slice(0, i)
        await this.delay(35)
      }
      if (this.cancelled) return
      await this.delay(300)
      if (this.cancelled) return

      // Submit
      this.showPopup = false
      await this.delay(200)
      if (this.cancelled) return
      this.showNewMarker = true
      await this.delay(600)
      if (this.cancelled) return

      // === DRAG SELECTION ===
      if (!isMobile) {
        // Desktop: Drag over sidebar icons
        const sidebarPos = this.sidebarIconsPosRef
        const dragStartX = sidebarPos.x + sidebarPos.width + 2
        const dragStartY = sidebarPos.y + sidebarPos.height + 2
        this.cursorPos = { x: dragStartX, y: dragStartY }
        await this.delay(500)
        if (this.cancelled) return

        this.isDragging = true
        const dragEndX = sidebarPos.x - 2
        const dragEndY = sidebarPos.y - 2
        this.dragBox = { visible: true, x: dragStartX, y: dragStartY, width: 0, height: 0 }

        const steps = 16
        for (let i = 1; i <= steps; i++) {
          if (this.cancelled) return
          const progress = i / steps
          const currentX = dragStartX + (dragEndX - dragStartX) * progress
          const currentY = dragStartY + (dragEndY - dragStartY) * progress
          this.cursorPos = { x: currentX, y: currentY }
          this.dragBox = {
            visible: true,
            x: Math.min(dragStartX, currentX),
            y: Math.min(dragStartY, currentY),
            width: Math.abs(currentX - dragStartX),
            height: Math.abs(currentY - dragStartY)
          }
          if (progress > 0.25 && !this.selectedSidebarIcons.includes(2)) this.selectedSidebarIcons.push(2)
          if (progress > 0.5 && !this.selectedSidebarIcons.includes(1)) this.selectedSidebarIcons.push(1)
          if (progress > 0.75 && !this.selectedSidebarIcons.includes(0)) this.selectedSidebarIcons.push(0)
          await this.delay(25)
        }
        if (this.cancelled) return
        await this.delay(200)
        if (this.cancelled) return

        // Release drag
        this.isDragging = false
        this.dragBox = { visible: false, x: 0, y: 0, width: 0, height: 0 }
        this.selectedSidebarIcons = []
        this.areaOutline = {
          visible: true,
          x: Math.min(dragStartX, dragEndX),
          y: Math.min(dragStartY, dragEndY),
          width: Math.abs(dragEndX - dragStartX),
          height: Math.abs(dragEndY - dragStartY)
        }
        this.popupHeader = 'Sidebar icons'
        this.typedText = ''
        this.popupPos = { x: dragEndX + 110, y: (dragStartY + dragEndY) / 2 - 40 }
        this.showPopup = true
        await this.delay(300)
        if (this.cancelled) return

        // Type second feedback
        for (let i = 0; i <= this.feedbackText2.length; i++) {
          if (this.cancelled) return
          this.typedText = this.feedbackText2.slice(0, i)
          await this.delay(35)
        }
        if (this.cancelled) return
        await this.delay(300)
        if (this.cancelled) return

        this.showPopup = false
        await this.delay(200)
        if (this.cancelled) return
        this.greenMarkerPos = { x: dragStartX, y: dragEndY }
        this.showGreenMarker = true
        await this.delay(400)
        if (this.cancelled) return
      } else {
        // Mobile: Drag over metrics cards
        const metricsPos = this.metricsPosRef
        const dragStartX = metricsPos.x - 2
        const dragStartY = metricsPos.y + metricsPos.height / 2
        this.cursorPos = { x: dragStartX, y: dragStartY }
        await this.delay(400)
        if (this.cancelled) return

        this.isDragging = true
        const dragEndX = metricsPos.x + metricsPos.width
        const dragEndY = metricsPos.y + metricsPos.height + 2
        this.dragBox = { visible: true, x: dragStartX, y: metricsPos.y - 2, width: 0, height: 0 }

        const steps = 12
        for (let i = 1; i <= steps; i++) {
          if (this.cancelled) return
          const progress = i / steps
          const currentX = dragStartX + (dragEndX - dragStartX) * progress
          this.cursorPos = { x: currentX, y: dragStartY }
          this.dragBox = {
            visible: true,
            x: metricsPos.x - 2,
            y: metricsPos.y - 2,
            width: currentX - dragStartX,
            height: metricsPos.height + 4
          }
          if (progress > 0.2 && !this.selectedMetrics.includes(0)) this.selectedMetrics.push(0)
          if (progress > 0.5 && !this.selectedMetrics.includes(1)) this.selectedMetrics.push(1)
          if (progress > 0.8 && !this.selectedMetrics.includes(2)) this.selectedMetrics.push(2)
          await this.delay(25)
        }
        if (this.cancelled) return
        await this.delay(150)
        if (this.cancelled) return

        this.isDragging = false
        this.dragBox = { visible: false, x: 0, y: 0, width: 0, height: 0 }
        this.selectedMetrics = []
        this.areaOutline = {
          visible: true,
          x: metricsPos.x - 2,
          y: metricsPos.y - 2,
          width: metricsPos.width + 2,
          height: metricsPos.height + 4
        }
        this.popupHeader = 'Metrics cards'
        this.typedText = ''
        const cWidth = this.$refs.contentRef?.offsetWidth || 300
        this.popupPos = { x: Math.min(metricsPos.x + metricsPos.width / 2, cWidth - 100), y: dragEndY + 7 }
        this.showPopup = true
        await this.delay(250)
        if (this.cancelled) return

        const mobileDragFeedback = 'Add hover states'
        for (let i = 0; i <= mobileDragFeedback.length; i++) {
          if (this.cancelled) return
          this.typedText = mobileDragFeedback.slice(0, i)
          await this.delay(30)
        }
        if (this.cancelled) return
        await this.delay(250)
        if (this.cancelled) return

        this.showPopup = false
        await this.delay(150)
        if (this.cancelled) return
        this.greenMarkerPos = { x: dragEndX, y: metricsPos.y + metricsPos.height / 2 }
        this.showGreenMarker = true
        await this.delay(300)
        if (this.cancelled) return
      }

      // === TEXT SELECTION ===
      const timePos = this.timePosRef
      const textStartX = timePos.x
      const textEndX = timePos.x + timePos.width
      const textY = timePos.y + timePos.height / 2

      this.isCrosshair = false
      this.isIBeam = true
      this.cursorPos = { x: textStartX, y: textY }
      await this.delay(500)
      if (this.cancelled) return

      this.isDragging = true
      this.textSelection = { visible: true, x: textStartX, y: timePos.y, width: 0 }

      const textSteps = 12
      for (let i = 1; i <= textSteps; i++) {
        if (this.cancelled) return
        const progress = i / textSteps
        const currentX = textStartX + (textEndX - textStartX) * progress
        this.cursorPos = { x: currentX, y: textY }
        this.textSelection = { visible: true, x: textStartX, y: timePos.y - 2, width: currentX - textStartX }
        await this.delay(30)
      }
      if (this.cancelled) return
      await this.delay(200)
      if (this.cancelled) return

      this.isDragging = false
      this.popupHeader = `"${this.headerText}"`
      this.typedText = ''
      const textPopupX = Math.min(Math.max(100, (textStartX + textEndX) / 2), (this.$refs.contentRef?.offsetWidth || 300) - 100)
      this.popupPos = { x: textPopupX, y: timePos.y + timePos.height + 7 }
      this.showPopup = true
      await this.delay(300)
      if (this.cancelled) return

      for (let i = 0; i <= this.feedbackText3.length; i++) {
        if (this.cancelled) return
        this.typedText = this.feedbackText3.slice(0, i)
        await this.delay(35)
      }
      if (this.cancelled) return
      await this.delay(300)
      if (this.cancelled) return

      this.showPopup = false
      await this.delay(200)
      if (this.cancelled) return
      this.orangeMarkerPos = { x: textEndX + 2, y: timePos.y + timePos.height / 2 }
      this.showOrangeMarker = true
      this.textSelection = { visible: false, x: 0, y: 0, width: 0 }
      this.isIBeam = false
      this.isCrosshair = true
      await this.delay(400)
      if (this.cancelled) return

      // === COPY OUTPUT ===
      let copyX = 400, copyY = 222
      if (this.$refs.copyBtnRef && this.$refs.contentRef) {
        const copyRect = this.$refs.copyBtnRef.getBoundingClientRect()
        const contentRect = this.$refs.contentRef.getBoundingClientRect()
        copyX = copyRect.left - contentRect.left + copyRect.width / 2
        copyY = copyRect.top - contentRect.top + copyRect.height / 2
      }

      this.cursorPos = { x: copyX, y: copyY }
      await this.delay(350)
      if (this.cancelled) return

      this.isCrosshair = false
      this.copyHovered = true
      await this.delay(400)
      if (this.cancelled) return

      this.copyHovered = false
      this.copyClicked = true
      await this.delay(400)
      if (this.cancelled) return

      this.showTerminal = true
      await this.delay(600)
      if (this.cancelled) return

      const terminalOutput = this.getTerminalOutput(this.isMobileView)
      const lines = terminalOutput.split('\n')
      let currentText = ''
      for (const line of lines) {
        if (this.cancelled) return
        currentText += line + '\n'
        this.terminalText = currentText.trim()
        await this.delay(80)
      }

      if (this.cancelled) return
      await this.delay(800)
      if (this.cancelled) return

      // Reset for next loop
      this.showNewMarker = false
      this.showGreenMarker = false
      this.showOrangeMarker = false
      this.areaOutline = { visible: false, x: 0, y: 0, width: 0, height: 0 }
      this.copyClicked = false
      this.copyHovered = false
      this.showTerminal = false
      this.isToolbarExpanded = false
      this.isCrosshair = false
      await this.delay(400)
    },

    startAnimation() {
      this.cancelled = false
      this.runAnimation()
      const loopInterval = typeof window !== 'undefined' && window.innerWidth <= 640 ? 14000 : 16000
      this.interval = setInterval(() => this.runAnimation(), loopInterval)
    },

    handleVisibility() {
      if (document.visibilityState === 'visible') {
        this.cancelled = true
        if (this.interval) clearInterval(this.interval)
        this.resetState()
        setTimeout(() => {
          this.startAnimation()
        }, 100)
      }
    }
  }
}
</script>

<style scoped>
.hero-demo-container {
  position: relative;
  width: 100%;
  margin: 1.5rem 0;
}

.hero-demo-browser {
  position: relative;
  width: 100%;
  height: 300px;
  background: #F6F5F4;
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.06),
    0 4px 16px rgba(0, 0, 0, 0.08);
  transition: opacity 0.3s ease;
}

.hero-demo-browser.faded {
  opacity: 0.4;
}

.hero-demo-browser-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 12px;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.hero-demo-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.hero-demo-dot.red { background: #ff5f57; }
.hero-demo-dot.yellow { background: #febc2e; }
.hero-demo-dot.green { background: #28c840; }

.hero-demo-url-bar {
  flex: 1;
  margin-left: 8px;
  padding: 4px 10px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.4);
  font-family: system-ui, -apple-system, sans-serif;
}

.hero-demo-content {
  position: relative;
  height: calc(100% - 38px);
  display: flex;
  overflow: hidden;
}

/* Sidebar */
.hero-demo-sidebar {
  width: 44px;
  background: #fff;
  border-right: 1px solid rgba(0, 0, 0, 0.06);
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.hero-demo-sidebar-logo {
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 8px;
}

.hero-demo-sidebar-icon {
  width: 16px;
  height: 16px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}

.hero-demo-sidebar-icon.active {
  background: rgba(0, 0, 0, 0.15);
}

.hero-demo-sidebar-icon.selected {
  box-shadow: 0 0 0 2px #22c55e;
  background: rgba(34, 197, 94, 0.15);
}

.hero-demo-sidebar-icon.circle {
  border-radius: 50%;
}

.hero-demo-sidebar-icons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hero-demo-sidebar-bottom {
  margin-top: auto;
}

/* Main content */
.hero-demo-main {
  flex: 1;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  overflow: hidden;
}

/* Header */
.hero-demo-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero-demo-header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero-demo-logo {
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.08) 100%);
  border-radius: 5px;
}

.hero-demo-title-text {
  font-size: 11px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  font-family: system-ui, -apple-system, sans-serif;
}

.hero-demo-button {
  width: 55px;
  height: 26px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 5px;
}

/* Metrics */
.hero-demo-metrics {
  display: flex;
  gap: 12px;
}

.hero-demo-metric {
  flex: 1;
  background: white;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.15s ease, background 0.15s ease;
}

.hero-demo-metric.selected {
  box-shadow: 0 0 0 2px #22c55e;
  background: rgba(34, 197, 94, 0.04);
}

.hero-demo-metric-label {
  width: 45px;
  height: 5px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  margin-bottom: 8px;
}

.hero-demo-metric-value {
  width: 50px;
  height: 18px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.hero-demo-metric-value.wide {
  width: 65px;
}

/* Table */
.hero-demo-table {
  flex: 1;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.hero-demo-table-header {
  display: flex;
  padding: 10px 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  gap: 20px;
}

.hero-demo-th {
  height: 6px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

.hero-demo-table-row {
  display: flex;
  padding: 12px 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  gap: 20px;
  align-items: center;
}

.hero-demo-td {
  height: 7px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 2px;
}

.hero-demo-td-pill {
  width: 48px;
  height: 18px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 9px;
}

/* Highlight */
.hero-demo-button-highlight {
  position: absolute;
  border: 2px solid rgba(59, 130, 246, 0.7);
  border-radius: 8px;
  background: transparent;
  opacity: 0;
  transform: scale(0.98);
  transition: opacity 0.12s ease-out, transform 0.12s ease-out;
  pointer-events: none;
  box-sizing: border-box;
}

.hero-demo-button-highlight.visible {
  opacity: 1;
  transform: scale(1);
}

/* Drag box */
.hero-demo-drag-box {
  position: absolute;
  border: 1.5px dashed #22c55e;
  border-radius: 8px;
  background: rgba(34, 197, 94, 0.08);
  pointer-events: none;
  z-index: 45;
}

/* Area outline */
.hero-demo-area-outline {
  position: absolute;
  border: 2px dashed #22c55e;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.15s ease;
  pointer-events: none;
  background: rgba(34, 197, 94, 0.05);
  z-index: 44;
}

.hero-demo-area-outline.visible {
  opacity: 1;
}

/* Cursor */
.hero-demo-cursor {
  position: absolute;
  pointer-events: none;
  z-index: 100;
  transition: left 0.35s cubic-bezier(0.4, 0, 0.2, 1), top 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  display: grid;
}

.hero-demo-cursor.dragging {
  transition: none;
}

.hero-demo-cursor.dragging * {
  transition: none !important;
}

.hero-demo-cursor-pointer,
.hero-demo-cursor-crosshair,
.hero-demo-cursor-ibeam {
  grid-area: 1 / 1;
  transform: scale(1);
  transform-origin: top left;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.hero-demo-cursor-pointer.hidden,
.hero-demo-cursor-crosshair.hidden,
.hero-demo-cursor-ibeam.hidden {
  transform: scale(0);
  opacity: 0;
}

.hero-demo-cursor-ibeam {
  transform-origin: center center;
}

.hero-demo-cursor svg {
  display: block;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}

/* Toolbar */
.hero-demo-toolbar {
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25), 0 4px 16px rgba(0, 0, 0, 0.15);
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), border-radius 0.4s cubic-bezier(0.19, 1, 0.22, 1), padding 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.15s ease, background 0.15s ease;
  width: 36px;
  height: 36px;
  border-radius: 18px;
}

.hero-demo-toolbar.hovered:not(.expanded) {
  background: #2a2a2a;
  transform: scale(1.05);
}

.hero-demo-toolbar.clicking:not(.expanded) {
  background: #333;
  transform: scale(0.95);
}

.hero-demo-toolbar.expanded {
  width: 200px;
  border-radius: 20px;
  padding: 0 6px;
  justify-content: flex-start;
}

.hero-demo-toolbar-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: rgba(255, 255, 255, 0.85);
}

.hero-demo-toolbar.expanded .hero-demo-toolbar-icon {
  display: none;
}

.hero-demo-toolbar-buttons {
  display: none;
  align-items: center;
  gap: 3px;
}

.hero-demo-toolbar.expanded .hero-demo-toolbar-buttons {
  display: flex;
}

.hero-demo-toolbar-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.85);
  transition: color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease;
}

.hero-demo-toolbar-btn.active {
  color: #3b82f6;
  background-color: rgba(59, 130, 246, 0.25);
}

.hero-demo-toolbar-btn.hovered {
  background-color: rgba(255, 255, 255, 0.1);
}

.hero-demo-toolbar-divider {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 2px;
}

/* Popup */
.hero-demo-popup {
  position: absolute;
  width: 200px;
  padding: 10px 12px 12px;
  background: #1a1a1a;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  opacity: 0;
  transform: translate(-50%, 0) scale(0.95) translateY(4px);
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 50;
}

.hero-demo-popup.visible {
  opacity: 1;
  transform: translate(-50%, 0) scale(1) translateY(0);
}

.hero-demo-popup-header {
  font-size: 10px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 6px;
  font-family: system-ui, -apple-system, sans-serif;
}

.hero-demo-popup-input {
  width: 100%;
  height: 40px;
  padding: 6px 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  font-size: 11px;
  color: #fff;
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.4;
  box-sizing: border-box;
}

.hero-demo-popup-actions {
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin-top: 6px;
}

.hero-demo-popup-btn {
  padding: 5px 12px;
  font-size: 10px;
  font-weight: 500;
  border-radius: 14px;
  font-family: system-ui, -apple-system, sans-serif;
}

.hero-demo-popup-btn.cancel {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}

.hero-demo-popup-btn.submit {
  background: #3b82f6;
  color: white;
}

.hero-demo-popup-btn.submit.green {
  background: #22c55e;
}

.hero-demo-popup-btn.submit.orange {
  background: #f59e0b;
}

/* Marker */
.hero-demo-marker {
  position: absolute;
  width: 22px;
  height: 22px;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  font-family: system-ui, -apple-system, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.3);
  transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 40;
}

.hero-demo-marker.visible {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.hero-demo-marker.green {
  background: #34c759;
  border-radius: 6px;
  width: 26px;
  height: 26px;
}

.hero-demo-marker.orange {
  background: #f59e0b;
}

/* Text selection */
.hero-demo-text-selection {
  position: absolute;
  background: rgba(59, 130, 246, 0.25);
  border-radius: 2px;
  pointer-events: none;
  z-index: 35;
  height: 16px;
}

/* Terminal */
.hero-demo-terminal {
  position: absolute;
  top: 20px;
  right: 25px;
  width: 340px;
  height: 280px;
  background: #faf9f7;
  border-radius: 10px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.08),
    0 4px 16px rgba(0, 0, 0, 0.12),
    0 12px 32px rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateY(8px) scale(0.98);
  transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 60;
}

.hero-demo-terminal.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.hero-demo-terminal-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 12px;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.hero-demo-terminal-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.hero-demo-terminal-dot.red { background: #ff5f57; }
.hero-demo-terminal-dot.yellow { background: #febc2e; }
.hero-demo-terminal-dot.green { background: #28c840; }

.hero-demo-terminal-title {
  flex: 1;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
  font-family: system-ui, -apple-system, sans-serif;
  margin-right: 36px;
}

.hero-demo-terminal-content {
  padding: 12px 14px;
  font-family: "SF Mono", "SFMono-Regular", ui-monospace, Consolas, monospace;
  font-size: 10px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  white-space: pre-wrap;
  overflow: hidden;
}

.hero-demo-terminal-welcome {
  margin-bottom: 8px;
}

/* Mobile responsive */
@media (max-width: 640px) {
  .hero-demo-browser {
    height: 260px;
    border-radius: 10px;
  }

  .hero-demo-browser-bar {
    padding: 8px 10px;
  }

  .hero-demo-dot {
    width: 6px;
    height: 6px;
  }

  .hero-demo-url-bar {
    font-size: 9px;
    padding: 3px 8px;
  }

  .hero-demo-sidebar {
    display: none;
  }

  .hero-demo-main {
    padding: 12px;
    gap: 10px;
  }

  .hero-demo-logo {
    width: 14px;
    height: 14px;
  }

  .hero-demo-title-text {
    font-size: 10px;
  }

  .hero-demo-button {
    width: 45px;
    height: 22px;
  }

  .hero-demo-metrics {
    gap: 8px;
  }

  .hero-demo-metric {
    padding: 10px;
  }

  .hero-demo-metric-label {
    width: 35px;
    height: 4px;
    margin-bottom: 6px;
  }

  .hero-demo-metric-value {
    width: 40px;
    height: 14px;
  }

  .hero-demo-table-header {
    padding: 8px 10px;
    gap: 14px;
  }

  .hero-demo-th {
    height: 5px;
  }

  .hero-demo-table-row {
    padding: 10px;
    gap: 14px;
  }

  .hero-demo-td {
    height: 6px;
  }

  .hero-demo-td-pill {
    width: 38px;
    height: 14px;
  }

  .hero-demo-toolbar {
    width: 28px;
    height: 28px;
    border-radius: 14px;
    bottom: 8px;
    right: 8px;
  }

  .hero-demo-toolbar.expanded {
    width: auto;
    border-radius: 16px;
    padding: 4px 8px;
  }

  .hero-demo-toolbar-btn {
    width: 22px;
    height: 22px;
  }

  .hero-demo-toolbar-btn svg {
    width: 13px;
    height: 13px;
  }

  .hero-demo-toolbar-divider {
    height: 16px;
    margin: 0 4px;
  }

  .hero-demo-popup {
    width: 190px;
    padding: 8px 10px 10px;
    border-radius: 12px;
  }

  .hero-demo-popup-header {
    font-size: 9px;
  }

  .hero-demo-popup-input {
    height: 32px;
    font-size: 9px;
  }

  .hero-demo-popup-btn {
    padding: 4px 10px;
    font-size: 9px;
  }

  .hero-demo-marker {
    width: 18px;
    height: 18px;
    font-size: 10px;
  }

  .hero-demo-marker.green {
    width: 22px;
    height: 22px;
  }

  .hero-demo-marker.orange {
    width: 18px;
    height: 18px;
  }

  .hero-demo-terminal {
    top: 10px;
    right: 10px;
    left: 10px;
    width: auto;
    height: 240px;
    border-radius: 8px;
  }

  .hero-demo-terminal-bar {
    padding: 10px 12px;
  }

  .hero-demo-terminal-dot {
    width: 10px;
    height: 10px;
  }

  .hero-demo-terminal-title {
    font-size: 11px;
    margin-right: 30px;
  }

  .hero-demo-terminal-content {
    padding: 10px 12px;
    font-size: 9px;
  }
}
</style>
