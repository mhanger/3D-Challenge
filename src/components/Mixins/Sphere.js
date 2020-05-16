import * as THREE from 'three'

export const sphere = {
  methods: {
    createSphere(material, size, segments) {
    var geometry = new THREE.SphereGeometry(size, segments, segments);
    var obj = new THREE.Mesh(geometry, material);
    obj.castShadow = true;
    return obj;
    }
  }
}
