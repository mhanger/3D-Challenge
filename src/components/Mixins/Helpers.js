import * as THREE from 'three'

export const helpers = {
  methods: {
    createMaterial(type, color) {
      var selectedMaterial;
      var materialOptions = {
          color: color === undefined ? 'rgb(255, 255, 255)' : color,
      };

      switch (type) {
          case 'basic':
              selectedMaterial = new THREE.MeshBasicMaterial(materialOptions);
              break;
          case 'lambert':
              selectedMaterial = new THREE.MeshLambertMaterial(materialOptions);
              break;
          case 'phong':
              selectedMaterial = new THREE.MeshPhongMaterial(materialOptions);
              break;
          case 'standard':
              selectedMaterial = new THREE.MeshStandardMaterial(materialOptions);
              break;
          default:
              selectedMaterial = new THREE.MeshBasicMaterial(materialOptions);
              break;
      }
      return selectedMaterial;
    },
    generateRandomColor() {
      const color = '#' + Math.floor(Math.random()*16777215).toString(16);
      this.changeTexture(5, color);
    },
    checkClientHeight(sceneDimensions) {
      var newmaxHeight = window.innerHeight-229;
      if (window.innerHeight < window.innerWidth) {
        sceneDimensions.width = window.innerWidth-150;
        sceneDimensions.height = newmaxHeight;
      } else {
        sceneDimensions.height = window.innerHeight-229;
        sceneDimensions.width = window.innerWidth;
      }
     return sceneDimensions;
    },
    scaleToFit(container, node) {
      var rect = container.getBoundingClientRect();
      node.width = rect.width;
      node.height = rect.height;
    },
    throttle (callback, limit) {
      var wait = false;
      return function () {
          if (!wait) {
              callback.call();
              wait = true;
              setTimeout(function () {
                  wait = false;
              }, limit);
          }
      }
    }
  }
}
