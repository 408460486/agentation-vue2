<template>
  <ul class="mkd-list">
    <li>
      <span class="mkd-marker-wrap"><span class="mkd-marker blue">1</span></span>
      {{ $t('markerKeyDemo.single') }}
    </li>
    <li>
      <span class="mkd-marker-wrap"><span class="mkd-marker green">1</span></span>
      {{ $t('markerKeyDemo.multi') }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MarkerKeyDemo'
}
</script>
