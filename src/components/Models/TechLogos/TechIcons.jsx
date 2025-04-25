import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import * as THREE from "three";
/* 
- Loads a `.glb ` model (GLTF format)
- Add basic lighting
- Applies environmnet refelections for realism
- Wraps the model in a floating animation
- Optionally tweaks the material (like settings a white color on a specific mesh)
- Disables zoom using OrbitControls

*/

const TechIcons = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  // TO CHANGE THE COLOER OF THE MODAL ICONS for "Interactive Developer" icons
  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [model.name, scene.scene]);
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <Environment preset="city" />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcons;
