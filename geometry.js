   
       //INIT VARIABLES

        let renderer, scene, camera, myCanvas = document.getElementById('myCanvas');
        

/////   RENDERER -> DRAW on canvas element that is been created ===> OR ADD canvas to DOM by argument
        renderer = new THREE.WebGLRenderer({canvas: myCanvas, antialias: true});
        //ADD canvas to DOM
        // document.body.appendChild(renderer.domElement);
        //COLOR RENDERER CANVAS BACKGROUND
        renderer.setClearColor(0x000000);
        //SET SIZE OF CANVAS
        renderer.setSize(window.innerWidth, window.innerHeight);
        //SET PIxels of divice
        // renderer.setPixelRatio(window.devicePixelRatio);
/////   CAMERA default 0 position
        camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
        //MOVE camera back by Z
        // camera.position.z = 14;
        //SCENE that can take objects
        scene = new THREE.Scene();
/////   LIGHT AMBIENT glowing             Color , density
        let lightA = new THREE.AmbientLight( 0x404040, 0.5 ); // soft white light
        scene.add( lightA );
        //LIGHT POINT direction             Color , density
        let lightP = new THREE.PointLight( 0x404040, 0.5 ); // add direction, and material to object that will reflect point light
        lightP.position.set( 50, 50, 50 );
        scene.add( lightP );
        //GEOMETRY BOX                           x , y, z
        // let geometry = new THREE.BoxGeometry( 10, 10, 10);
        ////////////////////////////////////////////////////////////////////////
//////->//GEOMETRY CUSTOMIZED !!!!!!!!!!!!!!!!!!! geometry.js
        /////////////////////////////////////////////////////////////////////////
    //GEOMETRY just THREE.Geometry is better for Animations then THREE.BufferGeometry (performance better) if better for static
        // let geometry = new THREE.Geometry();
        // geometry.vertices.push(
        //     new THREE.Vector3(-10,10,0),
        //     new THREE.Vector3(-10,-10,0),
        //     new THREE.Vector3(10,-10,0),
        // );
        // geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
        ///////////////////////////////////////////////////////////////////////////////
        // let geometry = new THREE.BufferGeometry();
        // let vertices = new Float32Array([
        //     -10.0,-10.0, 0.0,
        //     10.0,-10.0, 0.0,
        //     10.0,10.0,0.0
        // ]); 
        // geometry.addAttribute('position', new THREE.BufferAttribute(vertices,3));
        // GEOMETRY PRIMITIVE from THREEJS
    //PLANE                                       w , h
        // let geometry = new THREE.PlaneGeometry(100,100);
    //SPHERE                                     radius,widthSegments,heightSegments
        // let geometry = new THREE.SphereGeometry(50, 100,100);
    //CIRCLE                                     radius, edges
        // let geometry = new THREE.CircleGeometry(40, 100);
    //CONE                                  radius, hight, edges
        // let geometry = new THREE.ConeGeometry(10,14,100);
    //CYLINDER                                topRadius,botRadius,hight, radiusSegmets,hightSegments, boolean for open or closed cylinder        
        // let geometry = new THREE.CylinderGeometry(5,8,11,6,2, true)
    //POLYHIDRON
        // let vertices = [
        //     -1,-1,-1,   1,-1,-1, 1,1,-1, -1,1,-1,
        //     -1,-1,1,    1,-1,1,   1,1,1,  -1,1,1
        // ]
        // let faces = [
        //     2,1,0,    0,3,2,
        //     0,4,7,    7,3,0,
        //     0,1,5,    5,4,0,
        //     1,2,6,    6,5,1,
        //     2,3,7,    7,6,2,
        //     4,5,6,    6,7,4
        // ];
        //                                                          //radius, edges    
        // let geometry = new THREE.PolyhedronGeometry(vertices, faces,15,5);
    //DODECAHEDRON                                  radius, edges   
        // let geometry = new THREE.DodecahedronGeometry(21, 0);
    //ICOSAHEDRON                                   radius, edges 
        // let geometry = new THREE.IcosahedronGeometry(21, 0);
    //OCTAHEDRON                                    radius, edges 
        // let geometry = new THREE.OctahedronGeometry(21, 0);
    //RING                                innerRadius, outerRadius, edges
        // let geometry = new THREE.RingGeometry(17,20,6);
    //TETRAHEDRON                           radius, edges
        // let geometry = new THREE.TetrahedronGeometry(17,0);
    //TORUS like donut                      radius, innerRadius, tubeRadius, edges
        // let geometry = new THREE.TorusGeometry(15,3, 22, 15);
    //TORUSKNOT                              radius, tube,tubularSegments, edges
        // let geometry = new THREE.TorusKnotGeometry(15,6, 26, 55);
    //FONTS
        //LOADER of fonts from typeface.js !!!!!!!! IMPORTED FILE IN INDEX.HTML
        // let loader = new THREE.FontLoader();
        // let font = loader.parse(fontJSON);
        //                                     //TEXT         , params
        // let geometry = new THREE.TextGeometry('hello world', {font: font, size: 50, height: 6, material: 0, bevelThickness: 1, extrudeMaterial: 1})
    //SHAPE === HART = CUSTOM GEOMETRY
        // let heartShape = new THREE.Shape();
        // heartShape.moveTo( 25,25 );
        // heartShape.bezierCurveTo( 25, 25, 20, 0, 0, 0 );
        // heartShape.bezierCurveTo( 30, 0, 30, 35,30,35 );
        // heartShape.bezierCurveTo( 30, 55, 10, 77, 25, 95 );
        // heartShape.bezierCurveTo( 60, 77, 80, 55, 80, 35 );
        // heartShape.bezierCurveTo( 80, 35, 80, 0, 50, 0 );
        // heartShape.bezierCurveTo( 35, 25, 25, 25, 25, 25 ); 
        // let extrudeSettings = { depth: 100, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };   
        // let geometry = new THREE.ExtrudeBufferGeometry( heartShape, extrudeSettings );
    //VECTORS 2 = CUSTOM GEOMETRY
        // let points = []
        // for (let i = 0; i < 10; i++) {
        //     points.push(new THREE.Vector2(5 + Math.sin(i * 0.3) * 30, i * 10));  
        // }
        // let geometry = new THREE.LatheGeometry(points)
    //PARAMETRIC = CUSTOM GEOMETRY
        // function paraFunc(u, v) {
        //     let x = -100 + 200 * u;
        //     let y = 0;
        //     let z = (Math.sin(u * Math.PI) + Math.sin(v * Math.PI)) * -60;

        //     return new THREE.Vector3(x, y, z);
        // }
        // let geometry = new THREE.ParametricGeometry(paraFunc,10,10);
    //TUBE
        //curve of tube
        // let curve = new THREE.CatmullRomCurve3([
        //     new THREE.Vector3( -10, 0, 10 ),
        //     new THREE.Vector3( -5, 5, 5 ),
        //     new THREE.Vector3( 0, 0, 0 ),
        //     new THREE.Vector3( 5, -5, 5 ),
        //     new THREE.Vector3( 10, 0, 10 )
        // ])
        // let geometry = new THREE.TubeGeometry(curve, 30,3,18,false);
    //PLANE WITH MOVING PARTS
        //ADD CODE TO RENDER
        let geometry = new THREE.PlaneGeometry(100,100);
        //MATERIAL for GEOMETRY (some can reflect light.. [Lambert] will [Basic] will not)
        let material = new THREE.MeshLambertMaterial( {color: 0xF3FFFE2} );
        //MESH GEOMETRY AND MATERIAL in One
        let cube = new THREE.Mesh( geometry, material );
        //MOVE cube back from 0 to - numb so it could be seen
        // cube.position.set(0,0,-10)
        cube.position.z = -100;
        scene.add( cube );
        //RENDER SCENE AND CAMERA TO OUTPUT STATIC
        // renderer.render(scene, camera);
        // requestAnimationFrame(render);
        
        //ANIMATE MOTION
          //let delta is for PLANE moving parts
        let delta = 0;
        function render() {
        /////PLANE updated moving parts
            delta += 0.1;
            geometry.vertices[0].x = -25 + Math.sin(delta) * 50;
            geometry.verticesNeedUpdate = true;
        /////PLANE updated moving parts
        // cube.rotation.x += .02;
        // cube.rotation.y += .03;
        // cube.rotation.z += .03;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
        }
        render();
// console.log(fontJSON)