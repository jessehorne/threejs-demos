BasicCube = function(scene) {
    this.geometry = new THREE.BoxGeometry(.3, .3, .3);
    this.material = new THREE.MeshBasicMaterial({
        color: 0x447788
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.x = 1;
    this.mesh.position.y = 1;

    this.angle = 0;
    this.radius = 2;

    scene.add(this.mesh);

    this.update = function() {
        this.angle = (this.angle + .5) % 360;

        this.mesh.position.x = this.radius * Math.cos(10 * Math.PI * this.angle / 360.0);
        this.mesh.position.y = this.radius * Math.sin(10 * Math.PI * this.angle / 360.0);

        this.mesh.position.z += .01;

        this.mesh.rotation.x += 0.1;
        this.mesh.rotation.y += 0.1;
    }

    this.remove = function() {
        scene.remove(scene.getObjectByName(this.mesh.name));
    }
}
