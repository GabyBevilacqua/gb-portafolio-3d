import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

// Puedes instalar perlin-noise si quieres un resultado más natural
// import { perlin2 } from 'perlin-noise';

function perlin(x: number, y: number) {
  // Ruido simple, puedes reemplazar por una librería real
  return (
    Math.sin(x * 0.15) * Math.cos(y * 0.15) * 2 +
    Math.sin(x * 0.05 + y * 0.05) * 1.5
  );
}

export default function TerrainPlane() {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geometry = mesh.geometry as THREE.PlaneGeometry;
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      // Aplica "ruido" para simular montañas
      const elevation = perlin(x, y);
      position.setZ(i, elevation);
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
  }, []);

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[200, 200, 64, 64]} />
      <meshStandardMaterial color="#d9c5a0" wireframe={false} />
    </mesh>
  );
}
