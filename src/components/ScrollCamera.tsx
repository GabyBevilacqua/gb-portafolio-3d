'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useRef } from 'react';
import { scrollPath } from '../data/scrollPath';
import * as THREE from 'three';

export default function ScrollCamera() {
  const { camera } = useThree();
  const scroll = useScroll();
  const targetPosition = useRef(new THREE.Vector3());

  const currentCamPos = useRef(new THREE.Vector3());
  const currentLookAt = useRef(new THREE.Vector3());



  useFrame(() => {

    const t = scroll.offset * (scrollPath.length - 1);
    const index = Math.floor(t);
    const nextIndex = Math.min(index + 1, scrollPath.length - 1);
    const progress = t - index;

    const from = scrollPath[index];
    const to = scrollPath[nextIndex];

    // Interpolamos entre puntos del camino
    currentCamPos.current.lerpVectors(from.camPos, to.camPos, progress);
    currentLookAt.current.lerpVectors(from.lookAt, to.lookAt, progress);

    camera.position.lerp(currentCamPos.current, 0.1);
    camera.lookAt(currentLookAt.current);
  });


return null;
}
// Este componente maneja el desplazamiento de la cámara basado en el scroll del usuario

/* 

    // Scroll va de 0 a 1, lo transformamos en movimiento sobre el eje Z
    // Sube la cámara (y=15), aléjala (z)
    const z = -scroll.offset * 100 + 20; // +20 para empezar más lejos
    targetPosition.current.set(0, 8, z); // y=15 para estar más arriba
    camera.position.lerp(targetPosition.current, 0.05);
    camera.lookAt(0, 3, z - 30); // Mira más hacia el horizonte

*/