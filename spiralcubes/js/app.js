var require = function(path) {
    var script = document.createElement('script');
    script.async = false;
    script.src = path;
    document.getElementsByTagName('body')[0].appendChild(script);
}

require('/js/objects/BasicCube.js');

window.onload = function() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add Objects
    var cubes = [];

    var interval = setInterval(function() {
        if (cubes.length == 200) {
            clearInterval(interval);
        }

        var cube = new BasicCube(scene);
        cubes.push(cube);

    }, 200);

    camera.position.z = 5;

    function render() {
        requestAnimationFrame(render);

        for (var i = 0; i < cubes.length; i++) {
            cubes[i].update();
            if (cubes[i].mesh.position.z > 5) {
                cubes.splice(i, 1);
                cubes[i].remove();
                console.log("removed cube");
            }
        }

        // console.log(cubes.length)

        renderer.render(scene, camera);
    }

    render();
}
