// =============================================================================
// Utils Entry Point | 工具函数入口
// =============================================================================

export {
  getElementPath,
  identifyElement,
  identifyAnimationElement,
  getNearbyText,
  getNearbyElements,
  getElementClasses,
  getComputedStylesSnapshot,
  getDetailedComputedStyles,
  getForensicComputedStyles,
  parseComputedStylesString,
  getAccessibilityInfo,
  getFullElementPath,
} from './element-identification.js';

export {
  getStorageKey,
  loadAnnotations,
  saveAnnotations,
  clearAnnotations,
} from './storage.js';
