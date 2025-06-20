'use client';

import { useThree, useFrame } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import { useRef, useState } from 'react';
import * as THREE from 'three';

interface Props {
  position: [number, number, number];
  children: React.ReactNode;
  range?: number;
}

export default function AnimatedSection({ position, children, range = 20 }: Props) {
  const { camera } = useThree();
  const [visible, setVisible] = useState(false);

  const meshRef = useRef<THREE.Group>(null!);

  // Animation hook
  const { scale, opacity } = useSpring({
    scale: visible ? 1 : 0.3,
    opacity: visible ? 1 : 0,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  useFrame(() => {
    const dist = camera.position.distanceTo(new THREE.Vector3(...position));
    setVisible(dist < range);
  });

  return (
    <a.group
      ref={meshRef}
      position={position}
      scale={scale}
      // Optional: you can use opacity on materials if you pass `opacity` down
    >
      {children}
    </a.group>
  );
}
