'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

interface Props {
  position: [number, number, number];
  label: string;
  range?: number;
}

export default function SectionLabel({ position, label, range = 20 }: Props) {
  const { camera } = useThree();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useFrame(() => {
    const distance = camera.position.distanceTo(new THREE.Vector3(...position));
    setVisible(distance < range);
  });

  return (
    <Html position={position} center>
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          // transform: visible ? 'translateY(0px)' : 'translateY(10px)',
          transition: 'opacity 0.8s ease', // transform 0.8s ease',
          color: 'white',
          fontSize: '1rem',
          fontWeight: 'bold',
          textShadow: '0 0 8px rgba(0,0,0,0.5)',
          pointerEvents: 'none',
        }}
      >
        {label}
      </div>
    </Html>
  );
}
