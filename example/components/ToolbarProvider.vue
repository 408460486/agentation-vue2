<template>
  <Agentation
    v-if="!isMobile"
    :demo-annotations="demoAnnotations"
    :demo-delay="1500"
    :enable-demo-mode="true"
  />
</template>

<script>
export default {
  name: 'ToolbarProvider',

  data() {
    return {
      isMobile: false,
      demoAnnotations: [
        {
          selector: '.demo-button',
          comment: 'Try clicking this button - you can annotate any element on the page!'
        },
        {
          selector: '.demo-card h3',
          comment: 'Annotations work on text elements too'
        },
        {
          selector: '.progress-bar',
          comment: 'Use the pause button to freeze animations before annotating'
        }
      ]
    }
  },

  mounted() {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile)
  },

  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768
    }
  }
}
</script>
