import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

let camera, scene, renderer;

const container = document.createElement( 'div' );
document.body.appendChild( container );

camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
camera.position.set( - 1.8, 0.6, 2.7 );

scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const mesh = new THREE.Mesh( geometry, material );
mesh.position.y = -1;
scene.add( mesh );

console.log('what is mesh?', mesh);

new RGBELoader()
    .setPath( 'textures/' )
    .load( 'royal_esplanade_1k.hdr', function ( texture ) {

        texture.mapping = THREE.EquirectangularReflectionMapping;

        scene.background = texture;
        scene.environment = texture;

        // model

        const loader = new GLTFLoader().setPath( 'models/' );
        loader.load('spikemine.glb', async function ( gltf ) {

            const model = gltf.scene;

            // wait until the model can be added to the scene without blocking due to shader compilation

            await renderer.compileAsync( model, camera, scene );

            scene.add( model );
            console.log('spikemine loaded', model);
            window.handle3DContentLoaded({
                spikemine: model,
            });

        } );

    } );

renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
container.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
controls.addEventListener( 'change', render ); // use if there is no animation loop
controls.minDistance = 2;
controls.maxDistance = 10;
controls.target.set( 0, 0, - 0.2 );
controls.update();

window.addEventListener( 'resize', onWindowResize );

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

//

function render() {
    requestAnimationFrame(render);
    renderer.render( scene, camera );
}

requestAnimationFrame(render);