import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import useResponsive from "../../hooks/useResponsive";

const Computers = ({ device }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  // Adjust values based on device
  /*   const config = {
    scale: {
      mobile: 0.55,
      tablet: 0.65,
      desktop: 0.75,
    },
    position: {
      mobile: [0, -2.5, 0],
      tablet: [-0.3, -3, -3.2],
      desktop: [-0.5, -3.8, -4.2],
    },
  }; */
  // Dynamic settings per device
  const config = {
    scale: {
      mobile: 0.5,
      tablet: 0.65,
      desktop: 0.75,
    },
    position: {
      mobile: [0, -2.3, -1],
      tablet: [-0.3, -3.2, -3],
      desktop: [-0.6, -3.6, -4],
    },
    rotation: {
      mobile: [-0.01, -0.4, -0.05],
      tablet: [-0.01, -0.4, -0.1],
      desktop: [-0.01, -0.4, -0.1],
    },
  };
  return (
    /*     <mesh>
      <ambientLight intensity={0.5} />
      <hemisphereLight
        skyColor="#ffffff"
        groundColor="#222222"
        intensity={0.6}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        scale={config.scale[device]}
        position={config.position[device]}
        rotation={[-0.01, -0.4, -0.1]}
      />
    </mesh> */

    <mesh>
      <ambientLight intensity={0.5} />
      <hemisphereLight
        skyColor="#ffffff"
        groundColor="#222222"
        intensity={0.6}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        scale={config.scale[device]}
        position={config.position[device]}
        rotation={config.rotation[device]}
      />
    </mesh>
  );
};

const ControlsLogger = () => {
  const controlsRef = useRef();

  useFrame(() => {
    if (controlsRef.current) {
      const camera = controlsRef.current.object;
      const target = controlsRef.current.target;

      console.log("Camera Position:", camera.position.toArray());
      console.log("Target Position:", target.toArray());
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
  );
};

const ComputersCanvas = () => {
  const device = useResponsive();

  const cameraConfig = {
    mobile: [0, 1.7, 10], // centered and pulled back
    tablet: [18, 3, 5],
    desktop: [20, 3, 5], //x,y,z
  };

  // Define styles with conditional top padding for mobile and tablet
  // Define styles with conditional top padding for mobile and tablet
  /*   const canvasStyle = {
    paddingTop: device === "mobile" || device === "tablet" ? "120px" : "0",
    height: "100vh",
    minHeight: "500px", // ← Add this
    width: "100%",
    display: "block", // Ensure it's not `inline`
  }; */
  const canvasStyle = {
    paddingTop:
      device === "mobile" ? "80px" : device === "tablet" ? "100px" : "0px",
    height: "100vh",
    minHeight: "550px",
    width: "100%",
    display: "block",
  };
  return (
    <Canvas
      frameloop="demand"
      style={canvasStyle} // Apply the style
      shadows
      dpr={[1, 2]}
      camera={{ position: cameraConfig[device], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ControlsLogger />
        <Computers device={device} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
