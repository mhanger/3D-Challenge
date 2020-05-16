
export const primitives = {
  methods: {
    createPrimitives() {
      var planeMaterial = this.createMaterial('standard', 'rgb(120, 120, 120)');
      var plane = this.createPlane(planeMaterial, 30);
      plane.rotation.x = Math.PI/2;

      var sphereMaterial = this.createMaterial('standard', 'rgb(51, 102, 204)');
      var sphere = this.createSphere(sphereMaterial, 1, 64, 64)
      sphere.position.y = sphere.geometry.parameters.radius;
      sphere.position.x = sphere.geometry.parameters.radius + 1;
      sphere.name = 'primitive-sphere';
      sphere.roughness = 1;

      this.scene.add(
          plane,
          sphere
      )
    }
  }
}
