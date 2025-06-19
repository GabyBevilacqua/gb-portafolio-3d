'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export default function ScrollCamera() {
  const { camera } = useThree();
  const scroll = useScroll();
  const targetPosition = useRef(new THREE.Vector3());

  useFrame(() => {
    // Scroll va de 0 a 1, lo transformamos en movimiento sobre el eje Z
    const z = -scroll.offset * 100; // Ajusta el 100 para más o menos recorrido

    // Movemos suavemente la cámara
    targetPosition.current.set(0, 5, z);
    camera.position.lerp(targetPosition.current, 0.05);
    camera.lookAt(0, 0, z - 5);
  });

  return null;
}
// Este componente maneja el desplazamiento de la cámara basado en el scroll del usuario