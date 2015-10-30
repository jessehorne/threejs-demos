BasicCube = function(scene, direction, color, size) {
    this.geometry = new THREE.BoxGeometry(size, size, size);

    this.material = new THREE.MeshBasicMaterial({
        color: color
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.x = 0;
    this.mesh.position.y = 0;
    this.mesh.position.z = -50;

    this.angle = 0;
    this.radius = 2;
    this.direction = direction;
    this.zSpeed = .5
    this.cosSpeed = 10;
    this.sinSpeed = 10;

    scene.add(this.mesh);

    this.update = function() {

        if (this.direction == "right") {
            this.angle = (this.angle + .5) % 360;
            this.mesh.position.x = this.radius * Math.cos(-this.cosSpeed * Math.PI * this.angle / 360.0);
            this.mesh.position.y = this.radius * Math.sin(-this.sinSpeed * Math.PI * this.angle / 360.0);
        } else if (this.direction == "long-right") {
            this.angle = (this.angle + .3) % 360;
            this.mesh.position.x = this.radius * Math.cos(-this.cosSpeed / 2 * Math.PI * this.angle / 360.0);
            this.mesh.position.y = this.radius * Math.sin(-this.sinSpeed / 2 * Math.PI * this.angle / 360.0);
        } else if (this.direction == "left") {
            this.angle = (this.angle + .5) % 360;
            this.mesh.position.x = this.radius * Math.cos(this.cosSpeed * Math.PI * this.angle / 360.0);
            this.mesh.position.y = this.radius * Math.sin(this.sinSpeed * Math.PI * this.angle / 360.0);
        } else if (this.direction == "long-left") {
            this.angle = (this.angle + .3) % 360;
            this.mesh.position.x = this.radius * Math.cos(this.cosSpeed / 2 * Math.PI * this.angle / 360.0);
            this.mesh.position.y = this.radius * Math.sin(this.sinSpeed / 2 * Math.PI * this.angle / 360.0);
        }

        this.zSpeed -= .002

        this.mesh.position.z += this.zSpeed;

        //this.mesh.rotation.x += 0.1;
        //this.mesh.rotation.y += 0.1;
    }

    this.remove = function() {
        scene.remove(scene.getObjectByName(this.mesh.name));
    }
}
