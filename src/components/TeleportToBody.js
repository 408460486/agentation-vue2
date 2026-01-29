/**
 * TeleportToBody - A lightweight teleport component for Vue 2
 * Moves slot content to document.body, similar to Vue 3's Teleport
 * This replaces portal-vue dependency with zero runtime dependencies
 */
export default {
  name: 'TeleportToBody',
  data() {
    return {
      container: null
    }
  },
  mounted() {
    // Create container element
    this.container = document.createElement('div')
    this.container.className = 'agentation-teleport'
    document.body.appendChild(this.container)

    // Move the rendered element to body
    this.container.appendChild(this.$el)
  },
  beforeDestroy() {
    // Cleanup: remove container from body
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container)
    }
  },
  render(h) {
    // Wrap slot content in a div
    return h('div', this.$slots.default)
  }
}
