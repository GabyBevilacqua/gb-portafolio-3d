'use client';

import { useMemo } from 'react';
import { cameraCurve, lookAtCurve } from '../data/scrollPath';
import * as THREE from 'three';

export function CameraPathDebug() {
  // Genera puntos de la curva
  const points = useMemo(() => cameraCurve.getPoints(200), []);
  const lookAts = useMemo(() => lookAtCurve.getPoints(200), []);

  return (
    <>
      {/* Línea del recorrido de la cámara */}
      <line>
        <bufferGeometry attach="geometry" setFromPoints={points} />
        <lineBasicMaterial attach="material" color="red" linewidth={2} />
      </line>
      {/* Líneas de la cámara al lookAt */}
      {points.map((p, i) => (
        <line key={i + 'look'}>
          <bufferGeometry
            attach="geometry"
            setFromPoints={[p, lookAts[i]]}
          />
          <lineBasicMaterial attach="material" color="blue" linewidth={1} />
        </line>
      ))}
      {/* Esferas en los puntos clave */}
      {cameraCurve.points.map((p, i) => (
        <mesh key={i + 'cam'} position={p}>
          <sphereGeometry args={[0.5, 8, 8]} />
          <meshBasicMaterial color="red" />
        </mesh>
      ))}
      {lookAtCurve.points.map((p, i) => (
        <mesh key={i + 'lookat'} position={p}>
          <sphereGeometry args={[0.3, 8, 8]} />
          <meshBasicMaterial color="blue" />
        </mesh>
      ))}
    </>
  );
}