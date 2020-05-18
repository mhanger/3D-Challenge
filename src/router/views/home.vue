<template>
  <Layout>
    <div class="center">
      <h1>3D Challenge</h1>
      <Loading v-if="visible"></Loading>
      <Scene v-else></Scene>
      <SwatchesWrapper :swatches="swatches"></SwatchesWrapper>
    </div>
  </Layout>
</template>

<script>
  import appConfig from '@src/app.config'
  import Layout from '@layouts/main.vue'

  import { EventBus } from '@eventBus';
  import { swatchesComputed, colorComputed } from '@state/helpers'
  import Scene from '@components/scene.vue'
  import SwatchesWrapper from '@components/swatches-wrapper.vue'
  import Loading from './_loading.vue'

  export default {
    page: {
      title: '3D Challenge',
      meta: [{ name: 'description', content: appConfig.description }],
    },
    components: { Loading, Layout, SwatchesWrapper, Scene },
    data() {
      return {
        visible: false
      }
    },

    computed: {
      ...swatchesComputed,
      ...colorComputed
    },
    created() {
      EventBus.$on('loadingModel', (boolean) => {
          this.visible = boolean;
      });
    },
    beforeDestroy() {
      EventBus.$off(
        "loadingModel"
      );
    },
  }
</script>

<style>
</style>
