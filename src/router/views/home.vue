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
  import { swatchesComputed } from '@state/helpers'
  import Scene from '@components/scene.vue'
  import SwatchesWrapper from '@components/swatches-wrapper.vue'
  import Loading from './_loading.vue'

  export default {
    page: {
      title: '3D Challenge',
      meta: [{ name: 'description', content: appConfig.description }],
    },
    data() {
      return {
        visible: false
      }
    },
    components: { Loading, Layout, SwatchesWrapper, Scene },
    computed: {
      ...swatchesComputed,
    },
    created() {
      EventBus.$on('colorSelected', (value) => {
        this.colorId = value
      });
      EventBus.$on('loadingModel', (boolean) => {
          this.visible = boolean;
      });
    },
    beforeDestroy() {
      EventBus.$off(
          "colorSelected, loadingModel"
      );
    },
  }
</script>

<style>
</style>
