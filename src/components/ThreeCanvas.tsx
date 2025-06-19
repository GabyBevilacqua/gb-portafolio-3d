'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import * as THREE from 'three';
import Tree from './Tree';
import ScrollCamera from './ScrollCamera';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

function CameraLookAt({ target = [0, 5, -30] }) {
  const { camera } = useThree();
  useEffect(() => {
    camera.lookAt(
      (target as number[])[0],
      (target as number[])[1],
      (target as number[])[2]
    );
  }, [camera, target]);
  return null;
}

export default function ThreeCanvas() {
    return (
  <Canvas
        camera={{ position: [15, 15, 10], fov: 50 }} // Cámara inicial x, y, z
        onCreated={({ scene }) => {
          scene.fog = new THREE.Fog('#8ba1b7', 10, 60);
          scene.background = new THREE.Color('#8ba1b7');
        }}
      >
    <CameraLookAt target={[0, 5, -30]} />
    {/* <ScrollControls pages={5} damping={0.1}> */}
    
        {/* Luz ambiental tenue */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />

        {/* Cámara que se mueve con el scroll */}
        {/* <ScrollCamera /> */}

        {/* Suelo tipo montañoso */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[200, 200, 64, 64]} />
          <meshStandardMaterial color="#d9c5a0" wireframe={false} />
        </mesh>

        {/* Árboles distribuidos aleatoriamente */}
        <Tree position={[-2, 0, -4]} />
        <Tree position={[3, 0, -6]} />
        <Tree position={[0, 0, 0]} />

        {/* Elementos geométricos como secciones */}
        <mesh position={[10, 1.5, -10]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial color="skyblue" />
        </mesh>

        <mesh position={[-10, 1, -20]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="salmon" />
        </mesh>

        <mesh position={[0, 1, -40]}>
          <coneGeometry args={[1.5, 3, 8]} />
          <meshStandardMaterial color="gold" />
        </mesh>

        <mesh position={[0, 1.5, -60]}>
          <torusGeometry args={[1, 0.5, 16, 100]} />
          <meshStandardMaterial color="lightgreen" />
        </mesh>

        <mesh position={[0, 1, -80]}>
          <octahedronGeometry args={[1.8]} />
          <meshStandardMaterial color="plum" />
        </mesh>
      
    {/* </ScrollControls> */}

     <OrbitControls enableZoom={false} target={[0, 5, -30]} />
     
    </Canvas>
    );
}

// Este componente es el lienzo 3D donde se renderizará la escena
/*
            // Controles de cámara por ahora 
           

      //Objeto de prueba: una caja

      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#4f83cc" />
      </mesh>
*/