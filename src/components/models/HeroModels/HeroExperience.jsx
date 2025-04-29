import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";
import { Room } from "../../Room.jsx";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const controlsConfig = useMemo(
    () => ({
      enableZoom: !isTablet,
      enablePan: false,
      maxDistance: 20,
      minDistance: 5,
      minPolarAngle: Math.PI / 5,
      maxPolarAngle: Math.PI / 2,
    }),
    [isTablet]
  );

  return (
    <Canvas
      shadows
      // camera={{ position: [0, 3, 10], fov: 60 }}
      camera={{ position: [0, 0, 15], fov: 60 }}
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        {/* Scene controls */}
        <OrbitControls {...controlsConfig} />

        {/* Lighting setup */}
        <HeroLights />

        {/* Floating particles */}
        <Particles count={200} color="#ffffff" size={0.07} />

        {/* Main room group */}
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
          {/*<Room position={[0, -1.5, 0]} scale={1.2} />*/}
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
