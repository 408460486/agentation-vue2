<template>
  <div>
    <article class="article">
      <header>
        <h1>{{ $t('output.title') }}</h1>
        <p class="tagline">{{ $t('output.tagline') }}</p>
      </header>

      <section>
        <p>{{ $t('output.intro') }}</p>
        <ul>
          <li><strong>{{ $t('output.compact') }}</strong> — {{ $t('output.compactDesc') }}</li>
          <li><strong>{{ $t('output.standard') }}</strong> — {{ $t('output.standardDesc') }}</li>
          <li><strong>{{ $t('output.detailed') }}</strong> — {{ $t('output.detailedDesc') }}</li>
          <li><strong>{{ $t('output.forensic') }}</strong> — {{ $t('output.forensicDesc') }}</li>
        </ul>
      </section>

      <section>
        <h2>{{ $t('output.whyStructured') }}</h2>
        <p>{{ $t('output.whyStructuredDesc') }} <code>grep</code> {{ $t('output.whyStructuredDesc2') }}</p>
        <p>{{ $t('output.whyStructuredDesc3') }} <code>.sidebar > button.primary</code> {{ $t('output.whyStructuredDesc4') }}</p>
      </section>

      <section>
        <h2>{{ $t('output.customizing') }}</h2>
        <p>{{ $t('output.customizingDesc') }}</p>
        <ul>
          <li><strong>{{ $t('output.addContext') }}</strong> {{ $t('output.addContextDesc') }}</li>
          <li><strong>{{ $t('output.prioritize') }}</strong> {{ $t('output.prioritizeDesc') }}</li>
          <li><strong>{{ $t('output.removeNoise') }}</strong> {{ $t('output.removeNoiseDesc') }}</li>
          <li><strong>{{ $t('output.addInstructions') }}</strong> {{ $t('output.addInstructionsDesc') }}</li>
        </ul>
      </section>
    </article>

    <Footer />
  </div>
</template>

<script>
export default {
  name: 'OutputPage'
}
</script>
