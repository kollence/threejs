let renderer,
scene,
camera,
myCanvas = document.getElementById('myCanvas');


renderer = new THREE.WebGLRenderer({canvas: myCanvas, antialias: true});
//ADD canvas to DOM
// document.body.appendChild(renderer.domElement);
//COLOR RENDERER CANVAS 
renderer.setClearColor(0x333333);
//SET SIZE OF CANVAS
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
scene = new THREE.Scene();
/////////////////////////////////////////////////////////////////////////////
// CAMERA
/////////////////////////////////////////////////////////////////////////////
// PERSPECTIVE CAMERA           vertical view, aspect ratio w / h, nearest point of view, farest
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
// ORTHOGRAPHIC CAMERA   (ther are no depth to it)
// camera = new THREE.OrthographicCamera()
// let lightA = new THREE.AmbientLight(0xFFFFFF, 0.5);
// scene.add(lightA);
let lightP = new THREE.PointLight(0xFFFFFF, 0.5);
lightP.position.set(4, 4, 40);
scene.add(lightP);
 /// HELPER FOR SOURCE OF LIGHT THAT NOW CAN BE SEEN
 // FIND MORE HELPERS IN THREE.js
let lightHelper = new THREE.PointLightHelper(lightP)
scene.add(lightHelper)
// MATERIALS

let material = new THREE.MeshLambertMaterial()
// //Metal look a like
let material2 = new THREE.MeshPhongMaterial()
// Combine Phong and Lambert material
let material3 = new THREE.MeshStandardMaterial()

let geometry = new THREE.BoxGeometry(20,20,20)
let mesh = new THREE.Mesh(geometry, material);
mesh.position.z = -100
mesh.position.x = 20
mesh.position.y = -40

scene.add(mesh)

let geometry2 = new THREE.SphereGeometry(10,100,100)
let mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.position.z = -100
mesh2.position.x = -20
mesh2.position.y = -40

scene.add(mesh2)

let geometry3 = new THREE.PlaneGeometry(1000,1000,100,100);
let mesh3 = new THREE.Mesh(geometry3, material3);
mesh3.rotation.x = -90 * Math.PI / 180;
mesh3.position.y = -50;

scene.add(mesh3)

//////////////////////////////////////////////////////////
//LIGHTS
//////////////////////////////////////////////////////////
// // AMBIET LIGHT glow over scene
// let lightA = new THREE.AmbientLight(0xffffff, 0.5)
// scene.add(lightA)
// // POSITION LIGHT come from direction == move it with position
// let lightP = new THREE.PointLight(0xffffff, 2.0, 600)
// // lightP.position.set(0,10,0)
// scene.add(lightP)
// //DIRECTIONAL LIGHT glow like sun == direction == set target to what will be shine on
// let lightD = new THREE.DirectionalLight(0xffffff, 2.0, 1000);
// lightD.target = mesh2
// scene.add(lightD)
// //SPOT LIGHT simular like Point less agressive
// let lightS = new THREE.SpotLight(0xffffff, 2.0, 600)
// lightS.target = mesh
// scene.add(lightS)
// // HEMISPHERE LIGHT        Glow arguments Top or Bottom color
// let lightH = new THREE.HemisphereLight(0xffffff, 0x0808dd, 1)
// scene.add(lightH)
/////////////////////////////////////////////////////////////////
//SHADOW
/////////////////////////////////////////////////////////////////
// // ENABLE SHADOW TO RENDERER
// renderer.shadowMap.enabled = true;
// // SHADOW TYPE MAP
// renderer.shadowMap.type = THREE.PCFShadowMap;
// // set light source                color , intens, distance
// let light = new THREE.SpotLight(0xFFFFFF, 3.0, 1000);
// // position
// light.position.y = 110;
// light.position.z = 210;
// // target object
// light.target = mesh;
// // set light to cast shadow to true
// light.castShadow = true;
// // create shadow
// light.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(1000, 1, 280, 400));
// // texture of shadow
// light.shadow.bias = 0.0001;
// light.shadow.mapSize.width = 2048 * 2;
// light.shadow.mapSize.height = 2048 * 2;
// scene.add(light);

// mesh.castShadow = true;
// mesh2.castShadow = true;
// mesh3.receiveShadow = true;



let delta = 0;
function render() {
    delta+= 0.01;
    camera.lookAt(lightP.position);
    camera.position.x = Math.sin(delta) * 1200;
    camera.position.z = Math.cos(delta) * 1200;
    // mesh.rotation.z += 0.01;
    // mesh.rotation.x += 0.01;

    renderer.render(scene,camera)
    requestAnimationFrame(render)
}
render()
