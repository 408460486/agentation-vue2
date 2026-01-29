<template>
  <div>
    <article class="article">
      <header>
        <h1>{{ $t('api.title') }}</h1>
        <p class="tagline">{{ $t('api.tagline') }}</p>
      </header>

      <section>
        <h2>{{ $t('api.overview') }}</h2>
        <p>{{ $t('api.overviewDesc') }}</p>
        <ul>
          <li>{{ $t('api.overviewItem1') }}</li>
          <li>{{ $t('api.overviewItem2') }}</li>
          <li>{{ $t('api.overviewItem3') }}</li>
          <li>{{ $t('api.overviewItem4') }}</li>
        </ul>
      </section>

      <section>
        <h2>{{ $t('api.propsEvents') }}</h2>
        <ul>
          <li><code>@annotation-add</code> — {{ $t('api.annotationAddDesc') }}</li>
          <li><code>@annotation-delete</code> — {{ $t('api.annotationDeleteDesc') }}</li>
          <li><code>@annotation-update</code> — {{ $t('api.annotationUpdateDesc') }}</li>
          <li><code>@annotations-clear</code> — {{ $t('api.annotationsClearDesc') }}</li>
          <li><code>@copy</code> — {{ $t('api.copyDesc') }}</li>
          <li><code>:copy-to-clipboard</code> — {{ $t('api.copyToClipboardDesc') }}</li>
        </ul>
      </section>

      <section>
        <h2>{{ $t('api.basicUsage') }}</h2>
        <p>{{ $t('api.basicUsageDesc') }}</p>
        <div class="code-block">&lt;template&gt;
  &lt;Agentation
    @annotation-add="onAnnotationAdd"
    @annotation-delete="onAnnotationDelete"
    @copy="onCopy"
  /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    onAnnotationAdd(annotation) {
      console.log('Added:', annotation)
    },
    onAnnotationDelete(annotation) {
      console.log('Deleted:', annotation)
    },
    onCopy(markdown) {
      console.log('Copied:', markdown)
    }
  }
}
&lt;/script&gt;</div>
      </section>

      <section>
        <h2>{{ $t('api.annotationType') }}</h2>
        <p>{{ $t('api.annotationTypeDesc') }} <code>annotation</code> {{ $t('api.annotationTypeDesc2') }}</p>
        <div class="code-block">{
  id: string,
  x: number,           // X position (percentage)
  y: number,           // Y position (pixels)
  comment: string,     // User's feedback
  element: string,     // Element name/description
  elementPath: string, // CSS selector path
  timestamp: number,   // Creation timestamp
  selectedText?: string,
  boundingBox?: { x, y, width, height },
  nearbyText?: string,
  cssClasses?: string
}</div>
      </section>
    </article>

    <Footer />
  </div>
</template>

<script>
export default {
  name: 'ApiPage'
}
</script>
