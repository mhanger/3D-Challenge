import * as THREE from 'three';

import { EventBus } from '@eventBus';
import { camera } from './Camera';
import { lights } from './Lights';
import { helpers } from './Helpers';
import { sphere } from './Sphere';
import { plane } from './Plane';
import { primitives } from './Primitives';
import { updaters } from './Updaters';
import { gltfLoader } from './Loader';

export const sceneManager = {
  mixins: [camera, lights, helpers, plane, sphere, updaters, primitives, gltfLoader],
  methods: {

    sceneManager(container) {
      EventBus.$emit("loadingModel", true);

      this.container = container;
      const sceneDimensions = this.checkClientHeight(container.getBoundingClientRect());

      this.createScene(sceneDimensions);
      this.createRenderer(sceneDimensions)
      this.createCamera(sceneDimensions)
      this.createControls()
      this.createSceneSubjects();

      this.renderer.setAnimationLoop(() => {
          this.update()
          this.render()
      })

      window.addEventListener( 'resize', this.resizeWindowHandler, false);
      },

      createScene() {
        this.scene = new THREE.Scene()
        return this.scene;
      },
      createRenderer(sceneDimensions) {
        this.renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } )
        this.renderer.setSize(sceneDimensions.width, sceneDimensions.width)
        this.renderer.setPixelRatio( window.devicePixelRatio )
        this.renderer.autoClear = false;
        this.renderer.setClearColor(0x000000, 0.0)
        this.renderer.shadowMap.enabled = true;
        this.container.appendChild( this.renderer.domElement )

        return this.renderer;
      },
      createSceneSubjects() {
        this.createLights()
        this.loadModel()
        this.createPrimitives()
        EventBus.$emit("loadingModel", false);
      }
  }
}
