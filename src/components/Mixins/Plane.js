import * as THREE from 'three'

export const plane = {
  methods: {
    createPlane(material, size) {
      const geometry = new THREE.PlaneGeometry(size, size);
      material.side = THREE.DoubleSide;
      var obj = new THREE.Mesh(geometry, material);
      obj.receiveShadow = true;
      return obj;
    }
  }
}
