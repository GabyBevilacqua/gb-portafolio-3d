import * as THREE from 'three';

// Puntos clave del recorrido de la cámara
export const cameraKeyframes = [
  new THREE.Vector3(-6, 8, 15), // Punto de partida x y z
  new THREE.Vector3(14, 5, -5),
  new THREE.Vector3(-14, 5, -15),
  new THREE.Vector3(0, 5, -35),
  new THREE.Vector3(19, 5, -55),
  new THREE.Vector3(-14, 5, -75),
];

// Curva Catmull-Rom para el recorrido suave
export const cameraCurve = new THREE.CatmullRomCurve3(cameraKeyframes, false, 'catmullrom', 0.5);

// Para el lookAt, puedes usar los mismos puntos o definir otros si quieres que mire a lugares distintos
export const lookAtKeyframes = [
  new THREE.Vector3(0, 2.8, -1),
  new THREE.Vector3(10, 2, -10),
  new THREE.Vector3(-10, 3.5, -20),
  new THREE.Vector3(0, 2, -40),
  new THREE.Vector3(15, 2, -60),
  new THREE.Vector3(-10, 2, -80),
];
export const lookAtCurve = new THREE.CatmullRomCurve3(lookAtKeyframes, false, 'catmullrom', 0.5);

// Si quieres más suavidad, puedes aumentar la cantidad de puntos muestreados en la curva
// Ejemplo: cameraCurve.getPoints(200)