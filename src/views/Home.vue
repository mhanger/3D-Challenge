<template>

    <div class="center">
      <h1>3D Challenge</h1>
      <Loading v-if="visible"></Loading>
      <Scene v-else></Scene>
      <SwatchesWrapper :swatches="swatches"></SwatchesWrapper>
    </div>

</template>

<script>

  import { EventBus } from '@/eventBus/index';
  import { mapState } from 'vuex'
  import Scene from '@/components/scene.vue'
  import SwatchesWrapper from '@/components/swatches-wrapper.vue'
  import Loading from './_loading.vue'

  export default {
    page: {
      title: '3D Challenge',
    },
    components: { Loading, SwatchesWrapper, Scene },
    data() {
      return {
        visible: false
      }
    },

    computed: {
      ...mapState('swatches', {
        swatches: (state) => state.swatches
      })
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