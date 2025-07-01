import * as THREE from 'three';

export const scrollPath = [
      {
    // Punto de partida (más lejos, centrado)
    camPos: new THREE.Vector3(0, 8, 15), // Más lejos y alto
    lookAt: new THREE.Vector3(0, 2.8, -15), // Apunta al primer objeto
  },
  {
    // Sobre mí (esfera)
    camPos: new THREE.Vector3(14, 5, -5), // Más cerca y a la derecha
    lookAt: new THREE.Vector3(10, 2, -10),
  },
  {
    // Proyectos (cubo)
    camPos: new THREE.Vector3(-14, 5, -15), // Más cerca y a la izquierda
    lookAt: new THREE.Vector3(-10, 3.5, -20),
  },
  {
    // Estudios y habilidades (cono)
    camPos: new THREE.Vector3(0, 5, -35), // Directo al frente
    lookAt: new THREE.Vector3(0, 2, -40),
  },
  {
    // Arte (toro)
    camPos: new THREE.Vector3(19, 5, -55), // Más cerca y a la derecha
    lookAt: new THREE.Vector3(15, 2, -60),
  },
  {
    // Contacto (octaedro)
    camPos: new THREE.Vector3(-14, 5, -75), // Más cerca y a la izquierda
    lookAt: new THREE.Vector3(-10, 2, -80),
  },
];

// Usar Spline o Bezier curves para un camino aún más fluido.  preguntar a gpt
//Añadir sonidos ambientales en cada sección si te interesa lo inmersivo.