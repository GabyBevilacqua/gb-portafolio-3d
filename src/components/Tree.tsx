import { ThreeElements } from '@react-three/fiber';

export default function Tree(props: ThreeElements['group']) {
  return (
    <group {...props}>
      {/* Tronco */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 2]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>
      {/* Copa */}
      <mesh position={[0, 2.5, 0]}>
        <coneGeometry args={[1, 2, 6]} />
        <meshStandardMaterial color="#2c5f2d" />
      </mesh>
    </group>
  );
}
