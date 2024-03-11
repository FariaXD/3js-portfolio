/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Text } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./mcf1/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.4} groundColor='black' />
      <spotLight
        position={[10, 40, 20]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <directionalLight position={[1, 4, 3]} intensity={0.75}/>
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 2}
        position={isMobile ? [0, -3, 0] : [0, -3.25, 0]}
        rotation={[-0.00, 0.0, -0.0]}
      />
      
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />

      <Text
            position={[0.0, -1.05, 1.2]} // Adjust position as needed
            fontSize={0.2}
            color='#FF7F11'
            fillOpacity={0.5}
            fontWeight='3'
            rotation={[-1, 0.0, 0.0]}
          >
        
        Model by Ajay Gawde
      </Text>
    </Canvas>
  );
};

export default ComputersCanvas;