import React, { useRef, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();

  const matcapTexture = useTexture("/images/textures/mat1.png");
  matcapTexture.wrapS = matcapTexture.wrapT = THREE.RepeatWrapping;

  // Reuse custom materials via useMemo
  const customMaterials = useMemo(
    () => ({
      curtain: new THREE.MeshPhongMaterial({ color: "#d90429" }),
      body: new THREE.MeshPhongMaterial({ map: matcapTexture }),
      table: new THREE.MeshPhongMaterial({ color: "#582f0e" }),
      radiator: new THREE.MeshPhongMaterial({ color: "#fff" }),
      comp: new THREE.MeshStandardMaterial({ color: "#fff" }),
      pillow: new THREE.MeshPhongMaterial({ color: "#8338ec" }),
      chair: new THREE.MeshPhongMaterial({ color: "#000" }),
    }),
    [matcapTexture]
  );

  return (
    <group {...props} dispose={null}>
      {/* Light setup (can be moved to Canvas parent if preferred) */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
      <pointLight position={[0, 5, 5]} intensity={1} />

      {/* Bloom only on selected emissive screen mesh */}
      <EffectComposer disableNormalPass>
        <SelectiveBloom
          selection={screensRef}
          intensity={1.5}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.7}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>

      {/* Scene Meshes */}
      <mesh
        geometry={nodes._________6_blinn1_0.geometry}
        material={customMaterials.curtain}
      />
      <mesh
        geometry={nodes.body1_blinn1_0.geometry}
        material={customMaterials.body}
      />
      <mesh
        geometry={nodes.cabin_blinn1_0.geometry}
        material={customMaterials.table}
      />
      <mesh
        geometry={nodes.chair_body_blinn1_0.geometry}
        material={customMaterials.chair}
      />
      <mesh
        geometry={nodes.comp_blinn1_0.geometry}
        material={customMaterials.comp}
      />
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        geometry={nodes.pillows_blinn1_0.geometry}
        material={customMaterials.pillow}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0.geometry}
        material={customMaterials.radiator}
      />
      <mesh
        geometry={nodes.table_blinn1_0.geometry}
        material={customMaterials.table}
      />

      {/* Other static parts */}
      {[
        nodes.handls_blinn1_0,
        nodes.keyboard_blinn1_0,
        nodes.kovrik_blinn1_0,
        nodes.lamp_bl_blinn1_0,
        nodes.lamp_white_blinn1_0,
        nodes.miuse_blinn1_0,
        nodes.monitor2_blinn1_0,
        nodes.monitor3_blinn1_0,
        nodes.pCylinder5_blinn1_0,
        nodes.polySurface53_blinn1_0,
        nodes.radiator_blinn1_0001,
        nodes.railing_blinn1_0,
        nodes.red_bttns_blinn1_0,
        nodes.red_vac_blinn1_0,
        nodes.stylus_blinn1_0,
        nodes.tablet_blinn1_0,
        nodes.triangle_blinn1_0,
        nodes.vac_black_blinn1_0,
        nodes.vacuum1_blinn1_0,
        nodes.vacuumgrey_blinn1_0,
        nodes.vires_blinn1_0,
        nodes.window_blinn1_0,
      ].map((node, i) => (
        <mesh key={i} geometry={node.geometry} material={materials.blinn1} />
      ))}
      <mesh
        geometry={nodes.window4_phong1_0.geometry}
        material={materials.phong1}
      />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");
