<template>
    <Transition appear>
      <BaseIcon :class="$style.loadingIcon" name="sync" spin />
    </Transition>
</template>

<script>
import BaseIcon from '@/components/base-icon.vue'

  export default {
    page: {
      title: 'Loading page...',
      meta: [{ name: 'description', content: 'Loading page...' }],
    },
    components: { BaseIcon },
  }
</script>

<style lang="scss" module>


.loadingIcon {

  display: block;
  font-size: 10rem;

 position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -5rem;
  margin-top: -10rem;
  transform: translate(-50%, -50%);

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
