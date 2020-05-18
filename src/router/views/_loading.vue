<template>
  <Layout>
    <Transition appear>
      <BaseIcon :class="$style.loadingIcon" name="sync" spin />
    </Transition>
  </Layout>
</template>

<script>
  import Layout from '@layouts/main.vue'

  export default {
    page: {
      title: 'Loading page...',
      meta: [{ name: 'description', content: 'Loading page...' }],
    },
    components: { Layout },
  }
</script>

<style lang="scss" module>
@import '@design';

.loadingIcon {
  @extend %typography-xxlarge;

  display: block;
  margin: 5% auto;

  // stylelint-disable-next-line selector-class-pattern
  &:global(.v-enter-active) {
    transition: opacity 1s;
  }
  // stylelint-disable-next-line selector-class-pattern
  &:global(.v-enter) {
    opacity: 0;
  }
}
</style>
