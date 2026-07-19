import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingPanel({ position, rotation, speed }: { position: [number, number, number]; rotation: [number, number, number]; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * speed;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.5;
    meshRef.current.rotation.x = rotation[0] + Math.sin(t * 0.5) * 0.1;
    meshRef.current.rotation.y = rotation[1] + Math.cos(t * 0.3) * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <planeGeometry args={[1.5, 2, 1]} />
      <meshBasicMaterial
        color="#ff003c"
        opacity={0.04}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Particles() {
  const count = 50;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#4d9eff" size={0.05} transparent opacity={0.4} />
    </points>
  );
}

function Scene() {
  const panels = useMemo(() => [
    { position: [-4, 2, -5] as [number, number, number], rotation: [0.2, 0.3, 0] as [number, number, number], speed: 0.4 },
    { position: [3, -1, -4] as [number, number, number], rotation: [-0.1, -0.2, 0.1] as [number, number, number], speed: 0.5 },
    { position: [-2, -3, -6] as [number, number, number], rotation: [0.1, 0.4, -0.1] as [number, number, number], speed: 0.3 },
    { position: [5, 1, -7] as [number, number, number], rotation: [-0.2, 0.1, 0.2] as [number, number, number], speed: 0.6 },
    { position: [-5, -2, -3] as [number, number, number], rotation: [0.3, -0.1, 0] as [number, number, number], speed: 0.35 },
    { position: [2, 3, -8] as [number, number, number], rotation: [0, 0.2, -0.1] as [number, number, number], speed: 0.45 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      {panels.map((panel, i) => (
        <FloatingPanel key={i} {...panel} />
      ))}
      <Particles />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
