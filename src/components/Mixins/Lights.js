import * as THREE from 'three'

export const lights = {
  methods: {
    createLights() {
      var hemisphereLight = this.createHemiSphereLight(0xffffff,0x666666, 0.4 )
      hemisphereLight.position.set( 0, 50, 0 );

      var spotLight1 = this.createSpotLight(2, 'rgb(255, 255, 255)');
      var spotLight2 = this.createSpotLight(1, 'rgb(255, 220, 180)');

      spotLight1.position.x = -5;
      spotLight1.position.y = 2;
      spotLight1.position.z = -4;
      spotLight2.position.x = 5;
      spotLight2.position.y = 2;
      spotLight2.position.z = -4;

      var pointLight1 = this.createPointLight('rgb(255, 255, 255)', 1, 10)
      var pointLight2 = this.createPointLight('rgb(0, 0, 255)', 1, 7)

      pointLight1.position.set(0, 3, 0)
      pointLight2.position.set(-2, 2.5, 1)

      this.scene.add(
          hemisphereLight,
          pointLight1,
          pointLight2,
          spotLight1,
          spotLight2
      )
    },
    createSpotLight(intensity, color) {
      color = color === undefined ? 'rgb(255, 255, 255)' : color;
      var light = new THREE.SpotLight(color, intensity);
      light.castShadow = true;
      light.penumbra = 0.5;

      // Set up shadow properties for the light
      light.shadow.mapSize.width = 2048;  // default: 512
      light.shadow.mapSize.height = 2048; // default: 512
      light.shadow.bias = 0.001;

      return light;
    },
    createPointLight(color, intensity, distance) {
        color = color === undefined ? 'rgb(255, 255, 255)' : color;
        intensity = intensity === undefined ? 1 : intensity;
        distance = distance === undefined ? 0 : distance;
        var light = new THREE.SpotLight(color, intensity, distance);
        var sphere = new THREE.SphereBufferGeometry( 0.02, 24, 24 );
        light.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: color } ) ) );
        light.decay = 2;
        return light;
    },
   createHemiSphereLight(skyColor, groundColor, intensity) {
        skyColor = skyColor === undefined ? 'rgb(255, 255, 255)' : skyColor;
        groundColor = groundColor === undefined ? 'rgb(0, 0, 0)' : groundColor;
        intensity = intensity === undefined ? 1 : intensity;
        var light = new THREE.HemisphereLight( skyColor, groundColor, intensity );
        return light;
    }
  }
}
