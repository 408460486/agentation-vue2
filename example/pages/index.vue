<template>
  <div>
    <article class="article">
      <header>
        <h1>{{ $t('index.title') }}</h1>
        <p class="tagline">{{ $t('index.tagline') }}</p>
      </header>

      <!-- Hero Demo Animation -->
      <HeroDemo class="hide-on-mobile" />

      <!-- Author Credits -->
      <div class="author-credits">
        <p>
          <strong>{{ $t('index.madeBy') }} <a href="https://github.com/408460486" target="_blank" rel="noopener noreferrer">binyy</a></strong>{{ $t('index.forkedFrom') }}
          <a href="https://x.com/benjitaylor" target="_blank" rel="noopener noreferrer">Benji Taylor</a>,
          <a href="https://x.com/seldom" target="_blank" rel="noopener noreferrer">Dennis Jin</a>, {{ $t('index.and') }}
          <a href="https://x.com/alexvanderzon" target="_blank" rel="noopener noreferrer">Alex Vanderzon</a> {{ $t('index.reactVersion') }}
        </p>
        <p class="author-credits-links">
          {{ $t('index.originalReactVersion') }}
          <a href="https://github.com/benjitaylor/agentation" target="_blank" rel="noopener noreferrer">GitHub</a> ·
          <a href="https://www.npmjs.com/package/agentation" target="_blank" rel="noopener noreferrer">NPM</a>
        </p>
      </div>

      <section>
        <p>{{ $t('index.description1') }}</p>
        <p>{{ $t('index.description2') }}</p>
        <p>{{ $t('index.description3') }}</p>
        <p>
          {{ $t('index.description4') }}<a href="https://benji.org/annotating" class="styled-link" target="_blank" rel="noopener noreferrer">{{ $t('index.aPostBy') }}</a>{{ $t('index.exploring') }}
        </p>
      </section>

      <section>
        <h2>{{ $t('quickStart.title') }}</h2>
        <ol>
          <li>{{ $t('quickStart.step1') }}</li>
          <li><strong>{{ $t('quickStart.step2Hover') }}</strong> {{ $t('quickStart.step2Text') }}</li>
          <li><strong>{{ $t('quickStart.step3Click') }}</strong> {{ $t('quickStart.step3Text') }}</li>
          <li>{{ $t('quickStart.step4') }} <strong>{{ $t('quickStart.step4Add') }}</strong></li>
          <li>{{ $t('quickStart.step5') }} {{ $t('quickStart.step5Text') }}</li>
          <li>{{ $t('quickStart.step6') }}</li>
        </ol>
      </section>

      <section>
        <h2>{{ $t('howItWorks.title') }}</h2>
        <p>{{ $t('howItWorks.intro') }}</p>
        <ol>
          <li>{{ $t('howItWorks.step1') }}</li>
          <li>{{ $t('howItWorks.step2') }}</li>
          <li>{{ $t('howItWorks.step3') }}</li>
          <li>{{ $t('howItWorks.step4') }} <strong>{{ $t('howItWorks.step4Bold') }}</strong></li>
          <li>{{ $t('howItWorks.step5') }}</li>
        </ol>
        <p>
          {{ $t('howItWorks.without') }}
          <code>.sidebar > .nav-actions > button.primary</code> {{ $t('howItWorks.andItCan') }}
        </p>
      </section>

      <!-- Interactive Demo Section -->
      <section class="demo-section hide-on-mobile">
        <h2>{{ $t('tryIt.title') }}</h2>
        <p>{{ $t('tryIt.intro') }}</p>

        <div class="demo-elements">
          <div class="button-group">
            <button class="demo-button" @click="handlePrimaryClick">
              {{ $t('tryIt.primaryButton') }}
            </button>
            <button class="demo-button secondary" @click="handleSecondaryClick">
              {{ $t('tryIt.secondaryButton') }}
            </button>
          </div>

          <input
            type="text"
            class="demo-input"
            :placeholder="$t('tryIt.inputPlaceholder')"
            v-model="inputValue"
          />

          <div class="demo-card">
            <h3>{{ $t('tryIt.cardTitle') }}</h3>
            <p>{{ $t('tryIt.cardText') }}</p>
          </div>
        </div>
      </section>

      <!-- Animation Demo -->
      <section class="demo-section hide-on-mobile">
        <h2>{{ $t('animationDemo.title') }}</h2>
        <p>{{ $t('animationDemo.intro') }} {{ $t('animationDemo.introEnd') }}</p>
        <div class="animation-demo">
          <div class="progress-bar-demo">
            <div class="progress-bar" />
          </div>
        </div>
      </section>

      <section>
        <h2>{{ $t('bestPractices.title') }}</h2>
        <ul>
          <li><strong>{{ $t('bestPractices.specific') }}</strong> {{ $t('bestPractices.specificDesc') }}</li>
          <li><strong>{{ $t('bestPractices.oneIssue') }}</strong> {{ $t('bestPractices.oneIssueDesc') }}</li>
          <li><strong>{{ $t('bestPractices.includeContext') }}</strong> {{ $t('bestPractices.includeContextDesc') }}</li>
          <li><strong>{{ $t('bestPractices.useTextSelection') }}</strong> {{ $t('bestPractices.useTextSelectionDesc') }}</li>
          <li><strong>{{ $t('bestPractices.pauseAnimations') }}</strong> {{ $t('bestPractices.pauseAnimationsDesc') }}</li>
        </ul>
      </section>
    </article>

    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      inputValue: ''
    }
  },

  methods: {
    handlePrimaryClick() {
      alert('Primary clicked!')
    },

    handleSecondaryClick() {
      alert('Secondary clicked!')
    }
  }
}
</script>
