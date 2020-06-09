import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EventBus } from '@/eventBus/index';

export const gltfLoader = {
  methods: {
    loadModel() {
      const loader = new GLTFLoader();
      EventBus.$emit("loadingModel", true);
      loader.load(
          './models/BoxTextured.gltf',
          ( gltf ) => {
              EventBus.$emit("loadingModel", false);
              gltf.scene.position.set( 0, 0.51, 0)
              gltf.scene.name = 'gltf-model';
              this.scene.add(gltf.scene)
          },
          ( xhr ) => {
             console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
          },
          ( error ) => {
              console.error( 'An error happened', error );
              EventBus.$emit("loadingModel", false);
          },
      )
    }
  }
}
