// Import the 3D library
import * as THREE from 'https://cdn.jsdelivr.net/npm/three/build/three.module.js';

function createHeroScene() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  const hero = document.getElementById('hero');
  hero.appendChild(renderer.domElement);

  const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
  const material = new THREE.MeshStandardMaterial({ color: 0xd4a962 });
  const torusKnot = new THREE.Mesh(geometry, material);

  scene.add(torusKnot);

  const light = new THREE.PointLight(0xffffff, 1, 0);
  light.position.set(50, 50, 50);
  scene.add(light);

  camera.position.z = 50;

  function animate() {
    requestAnimationFrame(animate);

    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}

if (document.getElementById('hero')) {
  createHeroScene();
}