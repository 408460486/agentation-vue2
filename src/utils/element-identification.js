// =============================================================================
// Element Identification Utilities
// 元素识别工具函数
// =============================================================================

/**
 * Gets a readable path for an element (e.g., "article > section > p")
 * 获取元素的可读路径
 * @param {HTMLElement} target
 * @param {number} maxDepth
 * @returns {string}
 */
export function getElementPath(target, maxDepth = 4) {
  const parts = [];
  let current = target;
  let depth = 0;

  while (current && depth < maxDepth) {
    const tag = current.tagName.toLowerCase();

    // Skip generic wrappers
    if (tag === "html" || tag === "body") break;

    // Get identifier
    let identifier = tag;
    if (current.id) {
      identifier = `#${current.id}`;
    } else if (current.className && typeof current.className === "string") {
      const meaningfulClass = current.className
        .split(/\s+/)
        .find(c => c.length > 2 && !c.match(/^[a-z]{1,2}$/) && !c.match(/[A-Z0-9]{5,}/));
      if (meaningfulClass) {
        identifier = `.${meaningfulClass.split("_")[0]}`;
      }
    }

    parts.unshift(identifier);
    current = current.parentElement;
    depth++;
  }

  return parts.join(" > ");
}

/**
 * Identifies an element and returns a human-readable name + path
 * 识别元素并返回可读名称和路径
 * @param {HTMLElement} target
 * @returns {{ name: string, path: string }}
 */
export function identifyElement(target) {
  const path = getElementPath(target);

  if (target.dataset.element) {
    return { name: target.dataset.element, path };
  }

  const tag = target.tagName.toLowerCase();

  // SVG elements
  if (["path", "circle", "rect", "line", "g"].includes(tag)) {
    const svg = target.closest("svg");
    if (svg) {
      const parent = svg.parentElement;
      if (parent) {
        const parentName = identifyElement(parent).name;
        return { name: `graphic in ${parentName}`, path };
      }
    }
    return { name: "graphic element", path };
  }
  if (tag === "svg") {
    const parent = target.parentElement;
    if (parent && parent.tagName.toLowerCase() === "button") {
      const btnText = parent.textContent ? parent.textContent.trim() : "";
      return { name: btnText ? `icon in "${btnText}" button` : "button icon", path };
    }
    return { name: "icon", path };
  }

  // Interactive elements
  if (tag === "button") {
    const text = target.textContent ? target.textContent.trim() : "";
    const ariaLabel = target.getAttribute("aria-label");
    if (ariaLabel) return { name: `button [${ariaLabel}]`, path };
    return { name: text ? `button "${text.slice(0, 25)}"` : "button", path };
  }
  if (tag === "a") {
    const text = target.textContent ? target.textContent.trim() : "";
    const href = target.getAttribute("href");
    if (text) return { name: `link "${text.slice(0, 25)}"`, path };
    if (href) return { name: `link to ${href.slice(0, 30)}`, path };
    return { name: "link", path };
  }
  if (tag === "input") {
    const type = target.getAttribute("type") || "text";
    const placeholder = target.getAttribute("placeholder");
    const name = target.getAttribute("name");
    if (placeholder) return { name: `input "${placeholder}"`, path };
    if (name) return { name: `input [${name}]`, path };
    return { name: `${type} input`, path };
  }

  // Headings
  if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)) {
    const text = target.textContent ? target.textContent.trim() : "";
    return { name: text ? `${tag} "${text.slice(0, 35)}"` : tag, path };
  }

  // Text elements
  if (tag === "p") {
    const text = target.textContent ? target.textContent.trim() : "";
    if (text) return { name: `paragraph: "${text.slice(0, 40)}${text.length > 40 ? '...' : ''}"`, path };
    return { name: "paragraph", path };
  }
  if (tag === "span" || tag === "label") {
    const text = target.textContent ? target.textContent.trim() : "";
    if (text && text.length < 40) return { name: `"${text}"`, path };
    return { name: tag, path };
  }
  if (tag === "li") {
    const text = target.textContent ? target.textContent.trim() : "";
    if (text && text.length < 40) return { name: `list item: "${text.slice(0, 35)}"`, path };
    return { name: "list item", path };
  }
  if (tag === "blockquote") return { name: "blockquote", path };
  if (tag === "code") {
    const text = target.textContent ? target.textContent.trim() : "";
    if (text && text.length < 30) return { name: `code: \`${text}\``, path };
    return { name: "code", path };
  }
  if (tag === "pre") return { name: "code block", path };

  // Media
  if (tag === "img") {
    const alt = target.getAttribute("alt");
    return { name: alt ? `image "${alt.slice(0, 30)}"` : "image", path };
  }
  if (tag === "video") return { name: "video", path };

  // Containers - try to infer meaningful name
  if (["div", "section", "article", "nav", "header", "footer", "aside", "main"].includes(tag)) {
    const className = target.className;
    const role = target.getAttribute("role");
    const ariaLabel = target.getAttribute("aria-label");

    if (ariaLabel) return { name: `${tag} [${ariaLabel}]`, path };
    if (role) return { name: `${role}`, path };

    if (typeof className === "string" && className) {
      const words = className
        .split(/[\s_-]+/)
        .map((c) => c.replace(/[A-Z0-9]{5,}.*$/, ""))
        .filter((c) => c.length > 2 && !/^[a-z]{1,2}$/.test(c))
        .slice(0, 2);
      if (words.length > 0) return { name: words.join(" "), path };
    }

    return { name: tag === "div" ? "container" : tag, path };
  }

  return { name: tag, path };
}

/**
 * Gets text content from element and siblings for context
 * 获取元素及其相邻元素的文本内容
 * @param {HTMLElement} element
 * @returns {string}
 */
export function getNearbyText(element) {
  const texts = [];

  // Own text
  const ownText = element.textContent ? element.textContent.trim() : "";
  if (ownText && ownText.length < 100) {
    texts.push(ownText);
  }

  // Previous sibling text
  const prev = element.previousElementSibling;
  if (prev) {
    const prevText = prev.textContent ? prev.textContent.trim() : "";
    if (prevText && prevText.length < 50) {
      texts.unshift(`[before: "${prevText.slice(0, 40)}"]`);
    }
  }

  // Next sibling text
  const next = element.nextElementSibling;
  if (next) {
    const nextText = next.textContent ? next.textContent.trim() : "";
    if (nextText && nextText.length < 50) {
      texts.push(`[after: "${nextText.slice(0, 40)}"]`);
    }
  }

  return texts.join(" ");
}

/**
 * Simplified element identifier for animation feedback (less verbose)
 * 简化的元素标识符，用于动画反馈
 * @param {HTMLElement} target
 * @returns {string}
 */
export function identifyAnimationElement(target) {
  if (target.dataset.element) return target.dataset.element;

  const tag = target.tagName.toLowerCase();

  // SVG elements
  if (tag === "path") return "path";
  if (tag === "circle") return "circle";
  if (tag === "rect") return "rectangle";
  if (tag === "line") return "line";
  if (tag === "ellipse") return "ellipse";
  if (tag === "polygon") return "polygon";
  if (tag === "g") return "group";
  if (tag === "svg") return "svg";

  // Interactive elements
  if (tag === "button") {
    const text = target.textContent ? target.textContent.trim() : "";
    return text ? `button "${text}"` : "button";
  }
  if (tag === "input") {
    const type = target.getAttribute("type") || "text";
    return `input (${type})`;
  }

  // Text elements
  if (tag === "span" || tag === "p" || tag === "label") {
    const text = target.textContent ? target.textContent.trim() : "";
    if (text && text.length < 30) return `"${text}"`;
    return "text";
  }

  // Containers
  if (tag === "div") {
    const className = target.className;
    if (typeof className === "string" && className) {
      const words = className
        .split(/[\s_-]+/)
        .map(c => c.replace(/[A-Z0-9]{5,}.*$/, ""))
        .filter(c => c.length > 2 && !/^[a-z]{1,2}$/.test(c))
        .slice(0, 2);
      if (words.length > 0) {
        return words.join(" ");
      }
    }
    return "container";
  }

  return tag;
}

/**
 * Gets nearby sibling elements for structural context
 * 获取相邻元素的结构上下文
 * @param {HTMLElement} element
 * @returns {string}
 */
export function getNearbyElements(element) {
  const parent = element.parentElement;
  if (!parent) return "";

  const siblings = Array.from(parent.children).filter(
    (child) => child !== element && child instanceof HTMLElement
  );

  if (siblings.length === 0) return "";

  const siblingIds = siblings.slice(0, 4).map((sib) => {
    const tag = sib.tagName.toLowerCase();
    const className = sib.className;

    let cls = "";
    if (typeof className === "string" && className) {
      const meaningful = className
        .split(/\s+/)
        .map((c) => c.replace(/[_][a-zA-Z0-9]{5,}.*$/, ""))
        .find((c) => c.length > 2 && !/^[a-z]{1,2}$/.test(c));
      if (meaningful) cls = `.${meaningful}`;
    }

    if (tag === "button" || tag === "a") {
      const text = sib.textContent ? sib.textContent.trim().slice(0, 15) : "";
      if (text) return `${tag}${cls} "${text}"`;
    }

    return `${tag}${cls}`;
  });

  const parentTag = parent.tagName.toLowerCase();
  let parentId = parentTag;
  if (typeof parent.className === "string" && parent.className) {
    const parentCls = parent.className
      .split(/\s+/)
      .map((c) => c.replace(/[_][a-zA-Z0-9]{5,}.*$/, ""))
      .find((c) => c.length > 2 && !/^[a-z]{1,2}$/.test(c));
    if (parentCls) parentId = `.${parentCls}`;
  }

  const total = parent.children.length;
  const suffix = total > siblingIds.length + 1 ? ` (${total} total in ${parentId})` : "";

  return siblingIds.join(", ") + suffix;
}

/**
 * Gets CSS class names from an element (cleaned of module hashes)
 * 获取元素的 CSS 类名（清理掉模块哈希）
 * @param {HTMLElement} target
 * @returns {string}
 */
export function getElementClasses(target) {
  const className = target.className;
  if (typeof className !== "string" || !className) return "";

  const classes = className
    .split(/\s+/)
    .filter(c => c.length > 0)
    .map(c => {
      const match = c.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);
      return match ? match[1] : c;
    })
    .filter((c, i, arr) => arr.indexOf(c) === i);

  return classes.join(", ");
}

/**
 * Gets key computed styles for an element (useful for styling issues)
 * 获取元素的关键计算样式
 * @param {HTMLElement} target
 * @returns {string}
 */
export function getComputedStylesSnapshot(target) {
  if (typeof window === "undefined") return "";

  const styles = window.getComputedStyle(target);
  const parts = [];

  const color = styles.color;
  const bg = styles.backgroundColor;
  if (color && color !== "rgb(0, 0, 0)") parts.push(`color: ${color}`);
  if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") parts.push(`bg: ${bg}`);

  const fontSize = styles.fontSize;
  const fontWeight = styles.fontWeight;
  if (fontSize) parts.push(`font: ${fontSize}`);
  if (fontWeight && fontWeight !== "400" && fontWeight !== "normal") parts.push(`weight: ${fontWeight}`);

  const padding = styles.padding;
  const margin = styles.margin;
  if (padding && padding !== "0px") parts.push(`padding: ${padding}`);
  if (margin && margin !== "0px") parts.push(`margin: ${margin}`);

  const display = styles.display;
  const position = styles.position;
  if (display && display !== "block" && display !== "inline") parts.push(`display: ${display}`);
  if (position && position !== "static") parts.push(`position: ${position}`);

  const borderRadius = styles.borderRadius;
  if (borderRadius && borderRadius !== "0px") parts.push(`radius: ${borderRadius}`);

  return parts.join(", ");
}

// Values to filter out when collecting computed styles
const DEFAULT_STYLE_VALUES = new Set([
  "none", "normal", "auto", "0px", "rgba(0, 0, 0, 0)", "transparent", "static", "visible"
]);

// Element type categories for style property selection
const TEXT_ELEMENTS = new Set([
  "p", "span", "h1", "h2", "h3", "h4", "h5", "h6", "label", "li", "td", "th",
  "blockquote", "figcaption", "caption", "legend", "dt", "dd", "pre", "code",
  "em", "strong", "b", "i", "a", "time", "cite", "q"
]);
const FORM_INPUT_ELEMENTS = new Set(["input", "textarea", "select"]);
const MEDIA_ELEMENTS = new Set(["img", "video", "canvas", "svg"]);
const CONTAINER_ELEMENTS = new Set([
  "div", "section", "article", "nav", "header", "footer", "aside", "main",
  "ul", "ol", "form", "fieldset"
]);

/**
 * Gets key computed styles for the annotation popup display.
 * 获取用于标注弹窗显示的关键计算样式
 * @param {HTMLElement} target
 * @returns {Object}
 */
export function getDetailedComputedStyles(target) {
  if (typeof window === "undefined") return {};

  const styles = window.getComputedStyle(target);
  const result = {};
  const tag = target.tagName.toLowerCase();

  let properties;

  if (TEXT_ELEMENTS.has(tag)) {
    properties = ["color", "fontSize", "fontWeight", "fontFamily", "lineHeight"];
  } else if (tag === "button" || (tag === "a" && target.getAttribute("role") === "button")) {
    properties = ["backgroundColor", "color", "padding", "borderRadius", "fontSize"];
  } else if (FORM_INPUT_ELEMENTS.has(tag)) {
    properties = ["backgroundColor", "color", "padding", "borderRadius", "fontSize"];
  } else if (MEDIA_ELEMENTS.has(tag)) {
    properties = ["width", "height", "objectFit", "borderRadius"];
  } else if (CONTAINER_ELEMENTS.has(tag)) {
    properties = ["display", "padding", "margin", "gap", "backgroundColor"];
  } else {
    properties = ["color", "fontSize", "margin", "padding", "backgroundColor"];
  }

  for (const prop of properties) {
    const cssPropertyName = prop.replace(/([A-Z])/g, "-$1").toLowerCase();
    const value = styles.getPropertyValue(cssPropertyName);
    if (value && !DEFAULT_STYLE_VALUES.has(value)) {
      result[prop] = value;
    }
  }

  return result;
}

// Comprehensive list of CSS properties for forensic output
const FORENSIC_PROPERTIES = [
  "color", "backgroundColor", "borderColor",
  "fontSize", "fontWeight", "fontFamily", "lineHeight", "letterSpacing", "textAlign",
  "width", "height", "padding", "margin", "border", "borderRadius",
  "display", "position", "top", "right", "bottom", "left", "zIndex",
  "flexDirection", "justifyContent", "alignItems", "gap",
  "opacity", "visibility", "overflow", "boxShadow",
  "transform",
];

/**
 * Gets full computed styles for forensic output.
 * 获取用于取证输出的完整计算样式
 * @param {HTMLElement} target
 * @returns {string}
 */
export function getForensicComputedStyles(target) {
  if (typeof window === "undefined") return "";

  const styles = window.getComputedStyle(target);
  const parts = [];

  for (const prop of FORENSIC_PROPERTIES) {
    const cssPropertyName = prop.replace(/([A-Z])/g, "-$1").toLowerCase();
    const value = styles.getPropertyValue(cssPropertyName);
    if (value && !DEFAULT_STYLE_VALUES.has(value)) {
      parts.push(`${cssPropertyName}: ${value}`);
    }
  }

  return parts.join("; ");
}

/**
 * Parses a forensic computed styles string back into a Record.
 * 将取证计算样式字符串解析回对象
 * @param {string|undefined} stylesStr
 * @returns {Object|undefined}
 */
export function parseComputedStylesString(stylesStr) {
  if (!stylesStr) return undefined;

  const result = {};
  const parts = stylesStr.split(";").map((p) => p.trim()).filter(Boolean);

  for (const part of parts) {
    const colonIndex = part.indexOf(":");
    if (colonIndex > 0) {
      const key = part.slice(0, colonIndex).trim();
      const value = part.slice(colonIndex + 1).trim();
      if (key && value) {
        result[key] = value;
      }
    }
  }

  return Object.keys(result).length > 0 ? result : undefined;
}

/**
 * Gets accessibility information for an element
 * 获取元素的无障碍信息
 * @param {HTMLElement} target
 * @returns {string}
 */
export function getAccessibilityInfo(target) {
  const parts = [];

  const role = target.getAttribute("role");
  const ariaLabel = target.getAttribute("aria-label");
  const ariaDescribedBy = target.getAttribute("aria-describedby");
  const tabIndex = target.getAttribute("tabindex");
  const ariaHidden = target.getAttribute("aria-hidden");

  if (role) parts.push(`role="${role}"`);
  if (ariaLabel) parts.push(`aria-label="${ariaLabel}"`);
  if (ariaDescribedBy) parts.push(`aria-describedby="${ariaDescribedBy}"`);
  if (tabIndex) parts.push(`tabindex=${tabIndex}`);
  if (ariaHidden === "true") parts.push("aria-hidden");

  const focusable = target.matches("a, button, input, select, textarea, [tabindex]");
  if (focusable) parts.push("focusable");

  return parts.join(", ");
}

/**
 * Gets full DOM ancestry path (for forensic mode)
 * 获取完整的 DOM 祖先路径（用于取证模式）
 * @param {HTMLElement} target
 * @returns {string}
 */
export function getFullElementPath(target) {
  const parts = [];
  let current = target;

  while (current && current.tagName.toLowerCase() !== "html") {
    const tag = current.tagName.toLowerCase();
    let identifier = tag;

    if (current.id) {
      identifier = `${tag}#${current.id}`;
    } else if (current.className && typeof current.className === "string") {
      const cls = current.className
        .split(/\s+/)
        .map(c => c.replace(/[_][a-zA-Z0-9]{5,}.*$/, ""))
        .find(c => c.length > 2);
      if (cls) identifier = `${tag}.${cls}`;
    }

    parts.unshift(identifier);
    current = current.parentElement;
  }

  return parts.join(" > ");
}
