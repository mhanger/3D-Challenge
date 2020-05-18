<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script>
</script>

<style lang="scss" module>
  @import '@design';

  .container {
    margin: 0 auto;
  }
</style>
