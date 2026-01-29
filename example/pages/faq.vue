<template>
  <div>
    <article class="article">
      <header>
        <h1>{{ $t('faq.title') }}</h1>
        <p class="tagline">{{ $t('faq.tagline') }}</p>
      </header>

      <div v-for="(category, catIndex) in faqCategories" :key="catIndex" class="faq-category">
        <h2>{{ $t(category.titleKey) }}</h2>
        <div
          v-for="(faq, itemIndex) in category.items"
          :key="`${catIndex}-${itemIndex}`"
          class="faq-item"
        >
          <button
            class="faq-question"
            @click="handleToggle(`${catIndex}-${itemIndex}`)"
            :aria-expanded="openKey === `${catIndex}-${itemIndex}`"
          >
            <span>{{ $t(faq.questionKey) }}</span>
            <span :class="['faq-icon', { open: openKey === `${catIndex}-${itemIndex}` }]">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
          <div :class="['faq-answer', { open: openKey === `${catIndex}-${itemIndex}` }]">
            <div class="faq-answer-inner">
              <p v-html="$t(faq.answerKey)" />
            </div>
          </div>
        </div>
      </div>
    </article>

    <Footer />
  </div>
</template>

<script>
export default {
  name: 'FaqPage',

  data() {
    return {
      openKey: null,
      faqCategories: [
        {
          titleKey: 'faq.basics',
          items: [
            { questionKey: 'faq.q1', answerKey: 'faq.a1' },
            { questionKey: 'faq.q2', answerKey: 'faq.a2' },
            { questionKey: 'faq.q3', answerKey: 'faq.a3' },
          ],
        },
        {
          titleKey: 'faq.usage',
          items: [
            { questionKey: 'faq.q4', answerKey: 'faq.a4' },
            { questionKey: 'faq.q5', answerKey: 'faq.a5' },
            { questionKey: 'faq.q6', answerKey: 'faq.a6' },
            { questionKey: 'faq.q7', answerKey: 'faq.a7' },
            { questionKey: 'faq.q8', answerKey: 'faq.a8' },
            { questionKey: 'faq.q9', answerKey: 'faq.a9' },
          ],
        },
        {
          titleKey: 'faq.outputSection',
          items: [
            { questionKey: 'faq.q10', answerKey: 'faq.a10' },
            { questionKey: 'faq.q11', answerKey: 'faq.a11' },
            { questionKey: 'faq.q12', answerKey: 'faq.a12' },
          ],
        },
        {
          titleKey: 'faq.technical',
          items: [
            { questionKey: 'faq.q13', answerKey: 'faq.a13' },
            { questionKey: 'faq.q14', answerKey: 'faq.a14' },
            { questionKey: 'faq.q15', answerKey: 'faq.a15' },
            { questionKey: 'faq.q16', answerKey: 'faq.a16' },
            { questionKey: 'faq.q17', answerKey: 'faq.a17' },
            { questionKey: 'faq.q18', answerKey: 'faq.a18' },
          ],
        },
      ],
    }
  },

  methods: {
    handleToggle(key) {
      this.openKey = this.openKey === key ? null : key
    }
  }
}
</script>

<style scoped>
.faq-category {
  margin-top: 0.5rem;
}
.faq-category + .faq-category {
  margin-top: 1.5rem;
}
.faq-category h2 {
  margin-bottom: 0.25rem;
}
.faq-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.faq-item:last-child {
  border-bottom: none;
}
.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.625rem 0;
  font-size: 0.75rem;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.55);
  text-align: left;
  cursor: pointer;
  transition: color 0.15s ease;
  background: none;
  border: none;
}
.faq-question:hover {
  color: rgba(0, 0, 0, 0.8);
}
.faq-icon {
  flex-shrink: 0;
  color: rgba(0, 0, 0, 0.3);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), color 0.15s ease;
}
.faq-icon.open {
  transform: rotate(180deg);
  color: rgba(0, 0, 0, 0.5);
}
.faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.faq-answer.open {
  grid-template-rows: 1fr;
}
.faq-answer-inner {
  overflow: hidden;
}
.faq-answer-inner p {
  padding-bottom: 1rem;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.55);
}
.faq-answer-inner >>> code {
  font-family: "SF Mono", "SFMono-Regular", ui-monospace, Consolas, monospace;
  font-size: 0.75rem;
  background: rgba(0, 0, 0, 0.04);
  padding: 0.1rem 0.3rem;
  border-radius: 0.25rem;
  color: rgba(0, 0, 0, 0.65);
}
.faq-answer-inner >>> .faq-link {
  color: #2480ed;
  text-decoration: none;
  transition: color 0.15s ease;
}
.faq-answer-inner >>> .faq-link:hover {
  color: #74b1fd;
}
</style>
