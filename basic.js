        //DRAW on canvas element that is been created ===> OR ADD canvas to DOM by argument
        let renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
        //ADD canvas to DOM
        // document.body.appendChild(renderer.domElement);
        //COLOR RENDERER CANVAS 
        renderer.setClearColor(0x00ff00);
        //SET SIZE OF CANVAS
        renderer.setSize(window.innerWidth, window.innerHeight);
        //SET PIxels of divice
        // renderer.setPixelRatio(window.devicePixelRatio);
        //CAMERA default 0 position
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 1, 1000);
        //MOVE camera back by Z
        // camera.position.z = 14;
        //SCENE that can take objects
        let scene = new THREE.Scene();
        //LIGHT AMBIENT glowing             Color , density
        let lightA = new THREE.AmbientLight( 0x404040, 0.5 ); // soft white light
        scene.add( lightA );
        //LIGHT POINT direction             Color , density
        let lightP = new THREE.PointLight( 0x404040, 0.5 ); // add direction, and material to object that will reflect point light
        lightP.position.set( 50, 50, 50 );
        scene.add( lightP );
        //GEOMETRY
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        //MATERIAL for GEOMETRY (some can reflect light.. [Lambert] will [Basic] will not)
        var material = new THREE.MeshLambertMaterial( {color: 0xF3FFFE2} );
        //MESH GEOMETRY AND MATERIAL in One
        var cube = new THREE.Mesh( geometry, material );
        //MOVE cube back from 0 to - numb so it could be seen
        cube.position.set(0,0,-10)
        scene.add( cube );
        //RENDER SCENE AND CAMERA TO OUTPUT STATIC
        // renderer.render(scene, camera);
        requestAnimationFrame(render);
        
        //
        function render() {
            //ANIMATE MOTION
        cube.rotation.x += .05;
        cube.rotation.y += .06;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
        }
