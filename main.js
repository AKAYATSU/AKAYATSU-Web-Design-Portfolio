import * as THREE from "https://akayatsu.github.io/three.js/build/three.module.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x00a5dd );


const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 50);
scene.add(camera);


const hero = document.querySelector(".hero-section");
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);
hero.appendChild( renderer.domElement );


const spaceGeometry = new THREE.SphereGeometry( 30, 64, 32 ); 
const texture = new THREE.TextureLoader().load('/three.js/textures/texture.jpg' ); 
const spaceMaterial = new THREE.MeshBasicMaterial( { map:texture } ); 
const space = new THREE.Mesh( spaceGeometry, spaceMaterial );
space.position.set( -35, 5, 0)
scene.add( space );


const sphereGeometry = new THREE.SphereGeometry( 3, 32, 16 ); 
const sphereMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xffffff,
    transparent: true,
    opacity: 0.5
});

for (let i = 0; i < 100; i++){
    const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    sphere.position.x = (Math.random() - 0.5) * 100;
    sphere.position.y = (Math.random() - 0.5) * 100;
    sphere.position.z = (Math.random() - 0.5) * 100;
    const scale = Math.random();
    sphere.scale.x = scale; 
    sphere.scale.y = scale; 
    sphere.scale.z = scale; 
    scene.add( sphere );
}


const boxGeometry = new THREE.BoxGeometry( 3, 3, 3 ); 
const boxMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xffbf1f,
    transparent: true,
    opacity: 0.5
});

for (let i = 0; i < 100; i++){
    const cube = new THREE.Mesh( boxGeometry, boxMaterial );
    cube.position.x = (Math.random() - 0.5) * 100;
    cube.position.y = (Math.random() - 0.5) * 100;
    cube.position.z = (Math.random() - 0.5) * 100;
    const scale = Math.random();
    cube.scale.x = scale; 
    cube.scale.y = scale; 
    cube.scale.z = scale; 
    scene.add( cube );
}


let rot = 0;
function animate() {
	requestAnimationFrame( animate );

    rot += 0.3;
    const radian = rot * Math.PI / 180;
    camera.position.x = 50 * Math.sin(radian);
    camera.position.y = 50 * Math.sin(radian);
    camera.position.z = 50 * Math.cos(radian);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    space.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();


var typed = new Typed('#typewriter', {
    strings: ['HTML', 'CSS', 'Javascript', 'WordPress'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
  });


const scene2 = new THREE.Scene();


const camera2 = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera2.position.set( 0, 0, 50);
scene2.add(camera2);


const about = document.querySelector(".about-section");
const renderer2 = new THREE.WebGLRenderer({
    antialias: true
});
renderer2.setSize( window.innerWidth, window.innerHeight );
renderer2.setPixelRatio(window.devicePixelRatio);
about.appendChild( renderer2.domElement );


const vertices = [];
const colors = [];
for ( let i = 0; i < 3000; i ++ ) {
	const x = THREE.MathUtils.randFloatSpread( 100 );
	const y = THREE.MathUtils.randFloatSpread( 100 );
	const z = THREE.MathUtils.randFloatSpread( 100 );
    const colorX = Math.random();
    const colorY = Math.random();
    const colorZ = Math.random();

	vertices.push( x, y, z );
	colors.push( colorX, colorY, colorZ );
}

const particleGeometry = new THREE.BufferGeometry();
particleGeometry.setAttribute(
    'position', new THREE.Float32BufferAttribute( vertices, 3 ) 
);
particleGeometry.setAttribute(
    'color', new THREE.Float32BufferAttribute( colors, 3 ) 
);
const particleMaterial = new THREE.PointsMaterial( { 
    size: 0.5,
    vertexColors: true
} );
const points = new THREE.Points( particleGeometry, particleMaterial );
scene2.add( points );


let rot2 = 0;
function animate2() {
	requestAnimationFrame( animate2 );

    rot2 += 0.5;
    const radian2 = rot2 * Math.PI / 180;
    camera2.position.x = 20 * Math.sin(radian2);
    camera2.position.z = 20 * Math.cos(radian2);
    camera2.lookAt(new THREE.Vector3(0, 0, 0));

	renderer2.render( scene2, camera2 );
}
animate2();


const texts = document.querySelectorAll(".about-section p");
window.addEventListener('scroll',function(){
    const aboutDistance = about.getBoundingClientRect().bottom;
    if(window.innerHeight > aboutDistance){
        for(let i = 0; i < texts.length; i++){
            texts[i].classList.add("active");
        }
    }
})


var tl = gsap.timeline({repeat: -1});
tl.to(".bg1", {opacity: 1, duration: 0.5});
tl.to(".bg1", {opacity: 0, duration: 1},">3");
tl.to(".bg2", {opacity: 1, duration: 1},">-0.5");
tl.to(".bg2", {opacity: 0, duration: 1},">3");
tl.to(".bg3", {opacity: 1, duration: 1},">-0.5");
tl.to(".bg3", {opacity: 0, duration: 1},">3");
tl.to(".bg4", {opacity: 1, duration: 1},">-0.5");
tl.to(".bg4", {opacity: 0, duration: 1},">3");
tl.to(".bg1", {opacity: 1, duration: 1},">-1");


const works = document.querySelector(".works-section");
for(let i = 0; i < 1000; i++){
    const box = document.createElement('div');
    box.classList.add("box");
    works.appendChild(box);
}
