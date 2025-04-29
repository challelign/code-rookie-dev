import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 300, color = "#00ffff", size = 0.05 }) => {
  const meshRef = useRef();

  // Particle data generation
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          Math.random() * 15 + 5,
          (Math.random() - 0.5) * 20
        ),
        speed: 0.01 + Math.random() * 0.005,
        phase: Math.random() * Math.PI * 2, // for wave-like float
      });
    }
    return temp;
  }, [count]);

  // Position array
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      arr.set([p.position.x, p.position.y, p.position.z], i * 3);
    });
    return arr;
  }, [particles, count]);

  // Animate particles
  useFrame(({ clock }) => {
    const pos = meshRef.current.geometry.attributes.position.array;
    const time = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const baseY = particles[i].position.y;
      const y = baseY - ((time * particles[i].speed) % 20);

      // slight sine wave for x/z
      const x =
        particles[i].position.x + Math.sin(time + particles[i].phase) * 0.1;
      const z =
        particles[i].position.z + Math.cos(time + particles[i].phase) * 0.1;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y < -2 ? 15 + Math.random() * 5 : y;
      pos[i * 3 + 2] = z;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={count}
          usage={THREE.DynamicDrawUsage}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        color={color}
        size={size}
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
