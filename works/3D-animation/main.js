import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';


const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xd3d3d3 );


const camera = new THREE.PerspectiveCamera( 
    45, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000 
);
camera.position.set( 0, 10, 30);


const hero = document.querySelector(".hero-section");
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);
hero.appendChild( renderer.domElement );


const colors = new Array(
    '#ff006f',
    '#ffbf1f',
    '#ffff00',
    '#00a096',
    '#00a5dd',
    '#1760a0',
    '#b50099',
    '#ffffff',
    '#000000',
);

const cubeGeometry = new THREE.BoxGeometry( 2, 2, 2 );
const boxGeometry = new THREE.BoxGeometry( 4, 1, 2 );
const torusGeometry = new THREE.TorusGeometry( 0.75, 0.25, 16, 100 );

const cubeMaterial1 = new THREE.MeshBasicMaterial( { color: colors[0] } ); 
const cubeMaterial2 = new THREE.MeshBasicMaterial( { color: colors[1] } ); 
const cubeMaterial3 = new THREE.MeshBasicMaterial( { color: colors[2] } ); 
const cubeMaterial4 = new THREE.MeshBasicMaterial( { color: colors[3] } ); 
const cubeMaterial5 = new THREE.MeshBasicMaterial( { color: colors[4] } ); 
const cubeMaterial6 = new THREE.MeshBasicMaterial( { color: colors[5] } ); 
const boxMaterial1 = new THREE.MeshBasicMaterial( { color: colors[6] } );
const boxMaterial2 = new THREE.MeshBasicMaterial( { color: colors[7] } );
const torusMaterial = new THREE.MeshBasicMaterial( { color: colors[8] } );

const cube1 = new THREE.Mesh( cubeGeometry, cubeMaterial1 ); scene.add( cube1 );
const cube2 = new THREE.Mesh( cubeGeometry, cubeMaterial2 ); scene.add( cube2 );
const cube3 = new THREE.Mesh( cubeGeometry, cubeMaterial3 ); scene.add( cube3 );
const cube4 = new THREE.Mesh( cubeGeometry, cubeMaterial4 ); scene.add( cube4 );
const cube5 = new THREE.Mesh( cubeGeometry, cubeMaterial5 ); scene.add( cube5 );
const cube6 = new THREE.Mesh( cubeGeometry, cubeMaterial6 ); scene.add( cube6 );
const box1 = new THREE.Mesh( boxGeometry, boxMaterial1 ); scene.add( box1 );
const box2 = new THREE.Mesh( boxGeometry, boxMaterial2 ); scene.add( box2 );
const tire1 = new THREE.Mesh( torusGeometry, torusMaterial ); scene.add( tire1 );
const tire2 = new THREE.Mesh( torusGeometry, torusMaterial ); scene.add( tire2 );
const tire3 = new THREE.Mesh( torusGeometry, torusMaterial ); scene.add( tire3 );
const tire4 = new THREE.Mesh( torusGeometry, torusMaterial ); scene.add( tire4 );

cube1.position.set( -15, 10, -10);
cube2.position.set( -10, 10, -10);
cube3.position.set( -5, 10, -10);
cube4.position.set( 0, 10, -10);
cube5.position.set( 5, 10, -10);
cube6.position.set( 10, 10, -10);
box1.position.set( 16, 7, -10);
box2.position.set( 16, 10, -10);
tire1.position.set( -10, 5, -10);
tire2.position.set( -5, 5, -10);
tire3.position.set( -0, 5, -10);
tire4.position.set( 5, 5, -10);


const car = new THREE.Group();
car.add( cube1 );
car.add( cube2 );
car.add( cube3 );
car.add( cube4 );
car.add( cube5 );
car.add( cube6 );
car.add( box1 );
car.add( box2 );
car.add( tire1 );
car.add( tire2 );
car.add( tire3 );
car.add( tire4 );
scene.add( car );


const vertices = [];
const colors2 = [];
for ( let i = 0; i < 3000; i ++ ) {
	const x = THREE.MathUtils.randFloatSpread( 100 );
	const y = THREE.MathUtils.randFloatSpread( 100 );
	const z = THREE.MathUtils.randFloatSpread( 100 );
    const colorX = Math.random();
    const colorY = Math.random();
    const colorZ = Math.random();

	vertices.push( x, y, z );
	colors2.push( colorX, colorY, colorZ );
}

const particleGeometry = new THREE.BufferGeometry();
particleGeometry.setAttribute(
    'position', new THREE.Float32BufferAttribute( vertices, 3 ) 
);
particleGeometry.setAttribute(
    'color', new THREE.Float32BufferAttribute( colors2, 3 ) 
);
const particleMaterial = new THREE.PointsMaterial( { 
    size: 0.5,
    vertexColors: true
} );


const loader = new FontLoader();

loader.load( './three.js/examples/fonts/helvetiker_bold.typeface.json', function ( font ) {

	const textGeometry = new TextGeometry( 'Hello three.js!', {
		font: font,
		size: 4,
		height: 2,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 0.04,
		bevelSize: 0.02,
		bevelOffset: 0,
		bevelSegments: 5
	} );
    textGeometry.center();
    const textMaterial = new THREE.MeshNormalMaterial();
    const text = new THREE.Mesh( textGeometry, textMaterial );
    text.position.set( 0, 5, -1100 )
    scene.add( text );


var tl = gsap.timeline({onComplete : myFunction});

tl.to(cube1.position, {z: 0, duration: 0.5, delay: 1});
tl.to(cube2.position, {z: 0, duration: 0.5},"<");
tl.to(cube3.position, {z: 0, duration: 0.5},"<");
tl.to(cube1.position, {x: -2, duration: 0.5});
tl.to(cube2.position, {x: 0, duration: 0.5},"<");
tl.to(cube3.position, {x: 2, duration: 0.5},"<");
tl.to(cube1.position, {y: 0, duration: 0.5});
tl.to(cube2.position, {y: 0, duration: 0.5},"<");
tl.to(cube3.position, {y: 0, duration: 0.5},"<");
tl.to(cube4.position, {z: -2, duration: 0.5});
tl.to(cube5.position, {z: -2, duration: 0.5},"<");
tl.to(cube6.position, {z: -2, duration: 0.5},"<");
tl.to(cube4.position, {x: -2, duration: 0.5});
tl.to(cube5.position, {x: 0, duration: 0.5},"<");
tl.to(cube6.position, {x: 2, duration: 0.5},"<");
tl.to(cube4.position, {y: 0, duration: 0.5});
tl.to(cube5.position, {y: 0, duration: 0.5},"<");
tl.to(cube6.position, {y: 0, duration: 0.5},"<");
tl.to(box1.position, {z: -1, duration: 0.5});
tl.to(box2.position, {z: -1, duration: 0.5},"<");
tl.to(box1.position, {x: 0, duration: 0.5});
tl.to(box2.position, {x: 0, duration: 0.5},"<");
tl.to(box1.position, {y: 1, duration: 0.5});
tl.to(box2.position, {y: 2, duration: 0.5},"<");
tl.to(tire1.position, {z: 1.25, duration: 0.5});
tl.to(tire2.position, {z: 1.25, duration: 0.5},"<");
tl.to(tire1.position, {x: -1.5, duration: 0.5});
tl.to(tire2.position, {x: 1.5, duration: 0.5},"<");
tl.to(tire1.position, {y: -1, duration: 0.5});
tl.to(tire2.position, {y: -1, duration: 0.5},"<");
tl.to(tire3.position, {z: -3.25, duration: 0.5});
tl.to(tire4.position, {z: -3.25, duration: 0.5},"<");
tl.to(tire3.position, {x: -1.5, duration: 0.5});
tl.to(tire4.position, {x: 1.5, duration: 0.5},"<");
tl.to(tire3.position, {y: -1, duration: 0.5});
tl.to(tire4.position, {y: -1, duration: 0.5},"<");

tl.to(camera.position, {z: 40, duration: 1});
tl.to(car.position, {x: 20,duration: 0.5});


function myFunction(){
    var tl2 = gsap.timeline({onComplete : myFunction2});
    flag = true;
    const points = new THREE.Points( particleGeometry, particleMaterial );
    scene.add( points );
    tl2.to(text.position, {z: 0, duration: 1});
    tl2.to(".hero-section h1", {opacity: 1, duration: 0.5},"<");
    tl2.to(".hero-section p", {opacity: 1, duration: 0.5},"<");
    tl2.to(car.rotation, {y: Math.PI / 2, duration: 0.5},"<");
    tl2.to(car.position, {z: -15, duration: 1},">");
}

function myFunction2(){
    var tl3 = gsap.timeline({repeat: -1, repeatDelay: 0});
    tl3.to(car.rotation, {y:  Math.PI / 1, duration: 0.5});
    tl3.to(car.position, {x: -20, duration: 1});
    tl3.to(car.rotation, {y:  Math.PI * 1.5, duration: 0.5});
    tl3.to(car.position, {z: 15, duration: 1});
    tl3.to(car.rotation, {y:  Math.PI * 2, duration: 0.5});
    tl3.to(car.position, {x: 20, duration: 1});
    tl3.to(car.rotation, {y: Math.PI * 2.5, duration: 0.5});
    tl3.to(car.position, {z: -15, duration: 1});
}

} );


let rot = 0;
let flag = false;
function animate() {
	requestAnimationFrame( animate );
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    if(flag == true){
        rot += 0.3;
        const radian = rot * Math.PI / 180;
        camera.position.x = 40 * Math.sin(radian);
        camera.position.z = 40 * Math.cos(radian);
    }

	renderer.render( scene, camera );
}
animate();