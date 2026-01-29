<template>
  <div>
    <article class="article">
      <header>
        <h1>{{ $t('install.title') }}</h1>
        <p class="tagline">{{ $t('install.tagline') }}</p>
      </header>

      <section>
        <h2>{{ $t('install.installPackage') }}</h2>
        <div class="code-block">npm install agentation-vue2</div>
        <p>{{ $t('install.orUse') }}</p>
      </section>

      <section>
        <h2>{{ $t('install.addToApp') }}</h2>
        <p>{{ $t('install.addToAppDesc') }} <code>process.env.NODE_ENV === 'development'</code> {{ $t('install.addToAppDesc2') }}</p>
        <div class="code-block">&lt;template&gt;
  &lt;div id="app"&gt;
    &lt;!-- Your app content --&gt;
    &lt;Agentation v-if="isDev" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { Agentation } from 'agentation-vue2'
import 'agentation-vue2/dist/agentation-vue2.css'

export default {
  components: { Agentation },
  computed: {
    isDev() {
      return process.env.NODE_ENV === 'development'
    }
  }
}
&lt;/script&gt;</div>
      </section>

      <section>
        <h2>{{ $t('install.nuxt2') }}</h2>
        <p>{{ $t('install.nuxt2Desc') }} <code>nuxt.config.js</code> {{ $t('install.nuxt2Desc2') }}</p>
        <div class="code-block">// nuxt.config.js
export default {
  css: [
    'agentation-vue2/dist/agentation-vue2.css'
  ]
}</div>
        <p>{{ $t('install.nuxt2Layout') }} <code>layouts/default.vue</code>:</p>
        <div class="code-block">&lt;template&gt;
  &lt;div&gt;
    &lt;nuxt /&gt;
    &lt;Agentation v-if="isDev" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { Agentation } from 'agentation-vue2'

export default {
  components: { Agentation },
  computed: {
    isDev() {
      return process.env.NODE_ENV === 'development'
    }
  }
}
&lt;/script&gt;</div>
      </section>

      <section>
        <h2>{{ $t('install.requirements') }}</h2>
        <ul>
          <li><strong>{{ $t('install.reqVue') }}</strong> {{ $t('install.reqVueDesc') }}</li>
          <li><strong>{{ $t('install.reqClient') }}</strong> {{ $t('install.reqClientDesc') }}</li>
          <li><strong>{{ $t('install.reqDesktop') }}</strong> {{ $t('install.reqDesktopDesc') }}</li>
          <li><strong>{{ $t('install.reqZero') }}</strong> {{ $t('install.reqZeroDesc') }}</li>
        </ul>
      </section>

      <section>
        <h2>{{ $t('install.props') }}</h2>
        <p>{{ $t('install.propsDesc') }} <code>Agentation</code> {{ $t('install.propsDesc2') }}</p>
        <ul>
          <li><code>@annotation-add</code> — {{ $t('install.propEvent') }}</li>
          <li><code>@annotation-delete</code> — {{ $t('api.annotationDeleteDesc') }}</li>
          <li><code>@copy</code> — {{ $t('api.copyDesc') }}</li>
          <li><code>:copy-to-clipboard</code> — {{ $t('install.propCopyDesc') }} <code>true</code>)</li>
        </ul>
      </section>

      <section>
        <h2>{{ $t('install.security') }}</h2>
        <p>{{ $t('install.securityDesc') }} <strong>{{ $t('install.securityNot') }}</strong> {{ $t('install.securityDesc2') }}</p>
        <ul>
          <li><strong>{{ $t('install.secNoNetwork') }}</strong> {{ $t('install.secNoNetworkDesc') }}</li>
          <li><strong>{{ $t('install.secNoData') }}</strong> {{ $t('install.secNoDataDesc') }}</li>
          <li><strong>{{ $t('install.secDevOnly') }}</strong> {{ $t('install.secDevOnlyDesc') }} <code>NODE_ENV</code> {{ $t('install.secDevOnlyDesc2') }}</li>
        </ul>
      </section>
    </article>

    <Footer />
  </div>
</template>

<script>
export default {
  name: 'InstallPage'
}
</script>
