import * as THREE from 'three'

const OrbitControls = require('three-orbitcontrols')

export const camera = {
  data() {
    return {
      camera: null,
      controls: null
    }
  },
  methods: {
    createCamera(sceneDimensions) {
      this.camera = new THREE.PerspectiveCamera( 70, sceneDimensions.width / sceneDimensions.height, 1, 1000 )
      this.camera.position.set( 0, 2, 5 )
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));

      return camera;
    },
    createControls() {
      this.controls = new OrbitControls( this.camera, this.container )
      this.controls.minDistance = 4
      this.controls.maxDistance = 25
      this.controls.maxPolarAngle = (Math.PI/2) -0.01;
      this.controls.enableDamping = true
      this.controls.autoRotate = true
      this.controls.autoRotateSpeed = 0.75
    }
  }
}
