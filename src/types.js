// =============================================================================
// Types | 类型定义
// =============================================================================

/**
 * @typedef {Object} Annotation
 * @property {string} id - Unique identifier
 * @property {number} x - X position (percentage)
 * @property {number} y - Y position (pixels from top)
 * @property {string} comment - User's feedback comment
 * @property {string} element - Element name/description
 * @property {string} elementPath - CSS selector path
 * @property {number} timestamp - Creation timestamp
 * @property {string} [selectedText] - Selected text if any
 * @property {Object} [boundingBox] - Element bounding box
 * @property {number} [boundingBox.x]
 * @property {number} [boundingBox.y]
 * @property {number} [boundingBox.width]
 * @property {number} [boundingBox.height]
 * @property {string} [nearbyText] - Nearby text content
 * @property {string} [cssClasses] - CSS classes on the element
 * @property {boolean} [isFixed] - Whether element is fixed/sticky positioned
 * @property {string} [fullPath] - Full DOM path
 * @property {string} [accessibility] - Accessibility info
 * @property {string} [computedStyles] - Computed styles string
 * @property {string} [nearbyElements] - Description of nearby elements
 * @property {boolean} [isMultiSelect] - Whether this is a multi-select annotation
 */

export default {}
