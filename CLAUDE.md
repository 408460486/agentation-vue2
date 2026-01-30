# Agentation Vue 2

Vue 2 version of Agentation - Visual feedback for AI coding agents.

## Project Structure

```
vue2/
├── src/
│   ├── index.js                      # Entry point, exports all public APIs
│   ├── types.js                      # Shared type definitions (JSDoc)
│   ├── components/
│   │   ├── Agentation.vue            # Main toolbar component
│   │   ├── AnnotationPopup.vue       # Annotation popup component
│   │   └── icons.js                  # SVG icon components
│   └── utils/
│       ├── index.js                  # Utils entry
│       ├── element-identification.js # DOM element identification
│       ├── storage.js                # LocalStorage utilities
│       └── source-location.js        # Vue component source location
├── example/                          # Demo site
├── package.json
├── babel.config.js
└── vue.config.js
```

## Key Conventions

### Component API
- Use Options API with `export default {}`
- Use `props` object for typed props with validation
- Use `$emit()` for events
- Use `methods` for component methods

### Vue 3 to Vue 2 Mapping
- `ref()` → `data() { return { value } }`
- `computed()` → `computed: {}`
- `watch()` → `watch: {}`
- `onMounted()` → `mounted()`
- `onUnmounted()` → `beforeDestroy()`
- `<Teleport>` → `<portal>` (portal-vue)
- `defineProps()` → `props: {}`
- `defineEmits()` → `$emit()`
- `defineExpose()` → methods/refs directly accessible

### Styling
- Use `<style module lang="scss">` for CSS Modules
- Access classes via `$style.className`
- All styles are scoped by default

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server with example
npm run build    # Production build
npm run lint     # Run linter
```

## Ported from React version 1.3.2
