// =============================================================================
// Agentation Vue 2 - Entry Point
// =============================================================================

import Agentation from './components/Agentation.vue'
import AnnotationPopup from './components/AnnotationPopup.vue'

// Export components
export { Agentation, AnnotationPopup }

// Export icons
export * from './components/icons'

// Export utils
export * from './utils'

// Vue plugin install function
export function install(Vue) {
  // Register components globally
  Vue.component('Agentation', Agentation)
  Vue.component('AnnotationPopup', AnnotationPopup)
}

// Auto-install when Vue is found (for CDN usage)
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// Default export
export default {
  install,
  Agentation,
  AnnotationPopup,
}
