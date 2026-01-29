<template>
  <div class="language-selector">
    <button
      v-for="locale in availableLocales"
      :key="locale"
      :class="['lang-btn', { active: currentLocale === locale }]"
      @click="setLocale(locale)"
    >
      {{ locale === 'en' ? 'EN' : '中' }}
    </button>
  </div>
</template>

<script>
import { getLocale, setLocale } from '~/plugins/i18n'

export default {
  name: 'LanguageSelector',

  data() {
    return {
      currentLocale: 'en',
      availableLocales: ['en', 'zh']
    }
  },

  mounted() {
    this.currentLocale = getLocale()
    // Watch for locale changes
    this.localeWatcher = setInterval(() => {
      const newLocale = getLocale()
      if (newLocale !== this.currentLocale) {
        this.currentLocale = newLocale
        this.$forceUpdate()
      }
    }, 100)
  },

  beforeDestroy() {
    if (this.localeWatcher) {
      clearInterval(this.localeWatcher)
    }
  },

  methods: {
    setLocale(locale) {
      setLocale(locale)
      this.currentLocale = locale
      // Force re-render of parent components
      this.$root.$emit('locale-changed', locale)
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>
.language-selector {
  display: flex;
  gap: 0.25rem;
}

.lang-btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  font-weight: 500;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.15s ease;
}

.lang-btn:hover {
  color: rgba(0, 0, 0, 0.6);
  border-color: rgba(0, 0, 0, 0.2);
}

.lang-btn.active {
  color: rgba(0, 0, 0, 0.8);
  border-color: rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.05);
}
</style>
