<template>
    <div>
        <section id="scene" ref="scene" class="scene"></section>
    </div>
</template>

<script>
    import { EventBus } from '@eventBus';
    import { colorComputed, colorMethods } from '@state/helpers'
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
        computed: {
         ...colorComputed
        },

        created() {
            EventBus.$on('colorSelected', (getColor, color) => {
                this.updateScene(getColor, color);
            })
        },
        beforeDestroy() {
            EventBus.$off(
                "colorSelected, modelLoaded"
            )
        },
        mounted() {
            var canvas = this.$refs.scene;
            this.sceneManager(canvas);
        },

        methods: {
            ...colorMethods,
            changeScene(id) {

            },
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
                const sceneDimensions = this.checkClientHeight(this.container.getBoundingClientRect());
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
