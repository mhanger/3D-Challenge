import * as THREE from 'three';

export const updaters = {
  methods: {
    updateScene(id, color) {
      switch (id) {
          case 1:
              this.updatePrimitive(color);
          break;
          case 2:
          case 3:
              this.changeTexture(2, color);
          break;
          case 4:
              this.changeTexture(4);
          break;
          case 5:
              this.generateRandomColor();
          break;
      }
    },
    changeTexture(id, color) {
      color = color === undefined ? '#22f2ff' : color;
      var img = 'initial.png';
      if (id === 4) {
          img = 'borg.png'
      }
      var loader = new THREE.TextureLoader();
      loader.load('./models/'+ img, texture => {
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.flipY = false;
          texture.encoding = THREE.sRGBEncoding;
          texture.repeat.set(1, 1);

          var model = this.scene.getObjectByName('gltf-model');
          var material = new THREE.MeshStandardMaterial( { map: texture } );
          model.traverse((child) => {
              if(child instanceof THREE.Mesh){
                  child.material = material;
                  child.material.color.setStyle(color);
                  child.material.needsUpdate = true
              }
          });
      });
    },
    updatePrimitive(color) {
      var sphere = this.scene.getObjectByName('primitive-sphere');
      sphere.material.color.setStyle(color);
    },
    updateModel(color) {
      var model = this.scene.getObjectByName('gltf-model');
      model.traverse(function(child){
          if(child instanceof THREE.Mesh){
              child.material.color.setStyle(color);
          }
      });
      this.changeTexture();
    }
  }
}
