<template>
    <div>
    <section id="scene" ref="scene" class="scene"></section>
    </div>
</template>

<script>
    import { EventBus } from '@eventBus';
    import { sceneManager } from './Mixins/SceneManager';

    export default {
        name: 'Scene',
        mixins: [ sceneManager ],
        data() {
            return {
                container: null,
                camera: null,
                controls: null,
                scene: null,
                renderer: null,
                colorId: null,
                gltfLoader: null
            }
        },
        created() {
            EventBus.$on('colorSelected', (id, color) => {
                this.updateScene(id, color);
            })
        },
         beforeDestroy() {
            EventBus.$off(
                "colorSelected", "loadingModel"
            )
        },
        mounted() {
            var canvas = this.$refs.scene;
            this.sceneManager(canvas);
        },
        methods: {
            update() {
                this.controls.update()
            },
            render() {
                this.renderer.render( this.scene, this.camera )
                requestAnimationFrame(() => {
                    return this.update(this.scene, this.camera);
                });
            },
            resizeWindowHandler() {
                const sceneDimensions = this.container.getBoundingClientRect();
                this.camera.aspect = sceneDimensions.width / sceneDimensions.width;
                this.camera.updateProjectionMatrix()
                this.renderer.setSize( sceneDimensions.width, sceneDimensions.width )
            },
        }
    }
</script>

<style lang="scss" scoped>
  @import '@design';

  .scene {
        cursor: grab;

        &:active {
            cursor: grabbing;
        }

      &:focus {
          outline: none;
      }
  }
</style>
