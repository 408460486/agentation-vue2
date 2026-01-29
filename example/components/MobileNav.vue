<template>
  <div class="mobile-nav">
    <div class="mobile-nav-header">
      <div class="mobile-typed-logo">
        <nuxt-link to="/">
          <span style="color: #4C74FF">/</span>agentation vue2
        </nuxt-link>
      </div>
      <button class="mobile-nav-toggle" :class="{ open: isOpen }" @click="isOpen = !isOpen">
        <div class="mobile-nav-icon">
          <span></span>
          <span></span>
        </div>
      </button>
    </div>

    <div class="mobile-nav-links" :class="{ open: isOpen }">
      <div class="mobile-nav-links-inner">
        <nuxt-link
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          :class="['mobile-nav-link', { active: $route.path === link.href }]"
          @click.native="isOpen = false"
        >
          {{ link.label }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileNav',

  data() {
    return {
      isOpen: false
    }
  },

  computed: {
    links() {
      return [
        { href: '/', label: this.$t('nav.overview') },
        { href: '/install', label: this.$t('nav.install') },
        { href: '/features', label: this.$t('nav.features') },
        { href: '/output', label: this.$t('nav.output') },
        { href: '/api', label: this.$t('nav.api') },
        { href: '/changelog', label: this.$t('nav.changelog') },
        { href: '/faq', label: this.$t('nav.faq') }
      ]
    }
  },

  watch: {
    '$route'() {
      this.isOpen = false
    }
  }
}
</script>
