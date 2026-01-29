<template>
  <div>
    <article class="article">
      <header>
        <h1>{{ $t('changelog.title') }}</h1>
        <p class="tagline">{{ $t('changelog.tagline') }}</p>
      </header>

      <section v-for="release in releases" :key="release.version">
        <h2>
          <a
            :href="`https://www.npmjs.com/package/agentation-vue2/v/${release.version}`"
            target="_blank"
            rel="noopener noreferrer"
            style="color: inherit; text-decoration: none"
          >
            {{ release.version }}
          </a>
          <span style="font-weight: 400; color: rgba(0, 0, 0, 0.35); margin-left: 0">
            {{ $t(release.dateKey) }}
          </span>
        </h2>

        <p v-if="release.summaryKey">{{ $t(release.summaryKey) }}</p>

        <div v-if="release.features && release.features.length > 0" style="margin-top: 1rem">
          <div style="font-size: 0.6875rem; font-weight: 500; color: rgba(0, 0, 0, 0.4); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.5rem">
            {{ $t('changelog.features') }}
          </div>
          <ul>
            <li v-for="(feature, j) in release.features" :key="j">
              {{ $t(feature) }}
            </li>
          </ul>
        </div>
      </section>
    </article>

    <Footer />
  </div>
</template>

<script>
export default {
  name: 'ChangelogPage',

  data() {
    return {
      releases: [
        {
          version: '1.0.0',
          dateKey: 'changelog.date.v100',
          summaryKey: 'changelog.v100.summary',
          features: [
            'changelog.v100.f1',
            'changelog.v100.f2',
            'changelog.v100.f3',
            'changelog.v100.f4',
            'changelog.v100.f5',
            'changelog.v100.f6',
            'changelog.v100.f7',
            'changelog.v100.f8',
            'changelog.v100.f9',
            'changelog.v100.f10',
          ],
        },
      ]
    }
  }
}
</script>
