let renderer,
scene,
camera,
myCanvas = document.getElementById('myCanvas');


renderer = new THREE.WebGLRenderer({canvas: myCanvas, antialias: true});
//ADD canvas to DOM
// document.body.appendChild(renderer.domElement);
//COLOR RENDERER CANVAS 
// renderer.setClearColor(0x00ff00);
//SET SIZE OF CANVAS
renderer.setSize(window.innerWidth, window.innerHeight);
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 1000);
let lightA = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(lightA);
let lightP = new THREE.PointLight(0xFFFFFF, 0.5);
lightP.position.set(4, 4, 40);
scene.add(lightP);
//////////////////////////////////////////////////////////
// SHADER MATERIAL from INDEX.HTML script added
let uniform = {
    delta: {value: 0},
}

let material = new THREE.ShaderMaterial({
    uniforms: uniform, 
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById("fragmentShader").textContent
})

let geometry = new THREE.BoxBufferGeometry(10,10,10)
let mesh = new THREE.Mesh(geometry, material);
mesh.position.z = -100
mesh.position.x = 10
scene.add(mesh)

let geometry2 = new THREE.SphereGeometry(10,10,10)
let mesh2 = new THREE.Mesh(geometry2, material);
mesh2.position.z = -100
mesh2.position.x = -10
scene.add(mesh2)

let geometry3 = new THREE.PlaneGeometry(1000,1000,100,100);
let mesh3 = new THREE.Mesh(geometry3, material);
mesh3.rotation.x = -90 * Math.PI / 180;
mesh3.position.y = -50;
scene.add(mesh3)

let vertexDisplacement = new Float32Array(geometry.attributes.position.count);

for (let i = 0; i < vertexDisplacement.length; i++) {
    vertexDisplacement[i] = Math.sin(i);
}

geometry.addAttribute('vertexDisplacement', new THREE.BufferAttribute(vertexDisplacement, 1))

let delta = 0;
function render() {
    delta += 0.1;
    mesh.material.uniforms.delta.value = 0.5 + Math.sin(delta) * 0.5;

    for (let i = 0; i < vertexDisplacement.length; i++) {
        vertexDisplacement[i] = 0.5 + Math.sin(i * delta) * 0.25;
    }
    mesh.geometry.attributes.vertexDisplacement.needUpdate = true;
    // mesh.rotation.z += 0.01;
    // mesh.rotation.x += 0.01;

    renderer.render(scene,camera)
    requestAnimationFrame(render)
}
render()
