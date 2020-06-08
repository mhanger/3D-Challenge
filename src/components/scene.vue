<template>
    <div>
        <section id="scene" ref="scene" class="scene"></section>
    </div>
</template>

<script>
    import { EventBus } from '@/eventBus/index'
    import { mapState } from 'vuex'
    import { sceneManager } from './Mixins/SceneManager';

    export default {
        name: 'Scene',
        mixins: [ sceneManager ],
        data() {
            return {
            }
        },
        computed: {
            ...mapState('scenes', ['userAction']),
         },

        created() {

        },

        mounted() {
            var canvas = this.$refs.scene;
            this.sceneManager(canvas)
        },

        beforeDestroy() {
            EventBus.$off(
                "modelLoaded"
            )
        },
        watch: {
            userAction: {
                handler: function(newVal) {
                    this.updateScene(newVal.id, newVal.color);
                },
                deep: true
            }
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
             updateScene(id, color) {
                switch (id) {
                    case 1:
                        this.updatePrimitive(color);
                    break;
                    case 2:
                    case 3:
                    case 5:
                        this.changeTexture(2, color);
                    break;
                    case 4:
                        this.changeTexture(4);
                    break;
                }
            },
            resizeWindowHandler() {
                const sceneDimensions = this.checkClientHeight(this.container.getBoundingClientRect());
                this.camera.aspect = sceneDimensions.width / sceneDimensions.height;
                this.camera.updateProjectionMatrix()
                this.renderer.setSize( sceneDimensions.width, sceneDimensions.height )
            }
        }
    }
</script>

<style lang="scss" scoped>

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
