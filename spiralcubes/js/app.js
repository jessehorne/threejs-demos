var require = function(path) {
    var script = document.createElement('script');
    script.async = true;
    script.src = path;
    document.getElementsByTagName('body')[0].appendChild(script);
}

require('./js/objects/BasicCube.js');

window.onload = function() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add Objects
    var cubes = [];

    var interval = setInterval(function() {
        if (cubes.length == 500) {
            clearInterval(interval);
        }

        var cube = new BasicCube(scene, "right", 0x550055, .3);
        cubes.push(cube);

        var cube = new BasicCube(scene, "left", 0x663322, .3);
        cubes.push(cube);


    }, 100);

    camera.position.z = 5;

    function onMouseMove(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function render() {
        requestAnimationFrame(render);

        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children);
        console.log(intersects);
        for (var i = 0; i < intersects.length; i++) {
            intersects[i].object.material.color.set(0xffffff);
        }

        for (var i = 0; i < cubes.length; i++) {
            cubes[i].update();
            if (cubes[i].mesh.position.z > 20 || cubes[i].mesh.position.z < -100) {
                cubes.splice(i, 1);
                cubes[i].remove();
                console.log("removed cube");
            }
        }

        window.addEventListener("mousemove", onMouseMove, false);

        renderer.render(scene, camera);
    }

    render();
}
