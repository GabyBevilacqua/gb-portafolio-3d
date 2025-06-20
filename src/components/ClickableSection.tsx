'use client';

import React from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { useSpring, a } from '@react-spring/three';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';
import SectionLabel from './SectionLabel';
import { useCursor } from '@react-three/drei';
import { useTransition } from '@/context/TransitionContext';


interface Props {
    position: [number, number, number];
    label: string;
    route: string;
    geometry: React.ReactNode;
    color?: string;
    range?: number;
}

export default function ClickableSection({
    position,
    label,
    route,
    geometry,
    color = 'white',
    range = 20,
}: Props) {
    const { camera } = useThree();
    const [visible, setVisible] = useState(false);
    const router = useRouter();
    const ref = useRef<THREE.Mesh>(null!);
    const { fadeTo } = useTransition();

    const { scale } = useSpring({
        scale: visible ? 1 : 0.3,
        config: { mass: 1, tension: 120, friction: 14 },
    });

    useFrame(() => {
        const dist = camera.position.distanceTo(new THREE.Vector3(...position));
        setVisible(dist < range);
    });

    const handleClick = () => {     
        fadeTo(route);
    };

    useCursor(visible);
    // useCursor hook to change cursor style when hovering over the section

    return (
        <a.group position={position} scale={scale}>
            <mesh
                ref={ref}
                onClick={handleClick}
            // cursor="pointer"
            >
                {geometry}
                <meshStandardMaterial color={color} />
            </mesh>
            <SectionLabel position={[position[0], position[1] + 2, position[2]]} label={label} />
        </a.group>
    );
}
