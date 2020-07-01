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
// MATERIALS
// let material = new THREE.MeshNormalMaterial({
//     color: 0xFF,
//     transparent: true,
//     opacity: 1,
//     wireframe: true,
//     wireframeLinewidth: 5,
//     wireframeLinejoin: 'round',
//     wireframeLinecap: 'round'
// })
// let material = new THREE.MeshLambertMaterial({
//     // color: 0xF3FFE2,
//     // //glowing
//     // emissive: 0xff000,
//     // //intens of emissive color
//     // emissiveIntensity: 0.4,
//     // // Set What side of object you can see --> FrontSide, BackSide, DoubleSide
//     // side: THREE.BackSide,
//     // TextreLoader to load image as texture
//     // map: new THREE.TextureLoader().load('Images/test.jpg')
// })
// //Metal look a like
// let material = new THREE.MeshPhongMaterial({
//     color: 0xF3FFE2,
//     // Reflecting Color
//     specular: 0xff0000,
//     // Shininess
//     shininess: 30,
//     // maps image over object
//     map: new THREE.TextureLoader().load('Images/test.jpg'),
//     // normalMap use texture to simulate bumps on object
//     normalMap: new THREE.TextureLoader().load('Images/krlju.jpg'), 
// })
// Combine Phong and Lambert material
let material = new THREE.MeshStandardMaterial({
    color: 0xF3FFE2,
    roughness: 0.5,
    metalness: 0.6
})
// // Far object is, more it will glow 
// let material = new THREE.MeshDepthMaterial();
// // LINE BASIC MATERIAL IS USED FOR LINES OF OBJECTS !!! --> but it need to be passed to .Line and not to .Mesh
    // LINE DASHED 
// let material = new THREE.LineBasicMaterial()
    // POINTS MATERIAL is same as Line !!! --> need to add .Points insted of .Mesh
//    let material = new THREE.PointsMaterial()

let geometry = new THREE.BoxGeometry(10,10,10)
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

render()

function render() {
    mesh.rotation.z += 0.01;
    mesh.rotation.x += 0.01;

    renderer.render(scene,camera)
    requestAnimationFrame(render)
}