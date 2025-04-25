import React, { useMemo, useLayoutEffect, useRef } from "react";
import * as THREE from "three";

const HeroLights = () => {
    const areaLightRef = useRef();

    // RectAreaLight setup
    const areaLight = useMemo(() => {
        const light = new THREE.RectAreaLight("#a259ff", 15, 3, 2);
        light.intensity = 15;
        return light;
    }, []);

    useLayoutEffect(() => {
        // Orient the area light to face the origin
        if (areaLightRef.current) {
            areaLightRef.current.lookAt(0, 0, 0);
        }
    }, []);

    return (
        <>
            {/* Soft ambient to lift shadows */}
            <ambientLight intensity={0.15} color="#1a1a40" />

            {/* Main directional spotlight */}
            <spotLight
                position={[2, 5, 6]}
                angle={0.15}
                penumbra={0.3}
                intensity={100}
                color="white"
                castShadow
                shadow-bias={-0.0001}
            />

            {/* Overhead cool fill */}
            <spotLight
                position={[4, 5, 4]}
                angle={0.35}
                penumbra={0.5}
                intensity={50}
                color="#4cc9f0"
                castShadow
                shadow-bias={-0.0001}
            />

            {/* Purple side fill */}
            <spotLight
                position={[-3, 5, 5]}
                angle={0.4}
                penumbra={1}
                intensity={65}
                color="#9d4edd"
                castShadow
                shadow-bias={-0.0001}
            />

            {/* Moody area light */}
            <primitive
                ref={areaLightRef}
                object={areaLight}
                position={[1, 3, 4]}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            />

            {/* Subtle tone lights */}
            <pointLight position={[0, 1, 0]} intensity={12} color="#7209b7" />
            <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
        </>
    );
};

export default HeroLights;
