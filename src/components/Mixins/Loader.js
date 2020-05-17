import GLTFLoader from 'three-gltf-loader';

export const gltfLoader = {
  methods: {
    loadModel() {
      const loader = new GLTFLoader();

      loader.load(
          './models/BoxTextured.gltf',
          ( gltf ) => {
              gltf.scene.position.set( 0, 0.51, 0)
              gltf.scene.name = 'gltf-model';
              this.scene.add(gltf.scene)
          },
          ( xhr ) => {
              console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
          },
          ( error ) => {
              console.error( 'An error happened', error );
          },
      )
    }
  }
}
