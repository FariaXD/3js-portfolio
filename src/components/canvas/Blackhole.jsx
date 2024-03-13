/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Sphere } from "@react-three/drei";
import Ship from "./Ship"
import CanvasLoader from "../Loader";
import Softskill from "./Softskill";
import { color } from "framer-motion";
import * as THREE from "three";

const Blackhole = ({ isMobile, active, setActive }) => {
  const blackhole = useGLTF("./planets/blackhole/scene.gltf");
  const ref = useRef()
  const [mult, setMult] = useState(5)
  const minScale = 1
  const maxScale = 14
  
  useFrame((state, delta) => {
    ref.current.rotation.y += delta
    console.log(ref.current.scale.x);
    if(active){
      if(mult == 5 && ref.current.scale.x > maxScale){
        setActive(false)
        setMult(-5)
      }
      if (mult == -5 && ref.current.scale.x <= minScale) {
        setActive(false)
        setMult(5)
      }
      ref.current.scale.x += mult*delta
      ref.current.scale.y += mult*delta
      ref.current.scale.z += mult*delta
    }
  })

  return (
    <mesh ref={ref}>
      <primitive
        object={blackhole.scene}
        scale={[2, 2, 2]}
        position={isMobile ? [0, 0, 0] : [0, -0.5, 0]}
        rotation={[0.0, 0.0, 0.0]}
      />
      <Sphere 
        position={[0, -.5, 0]}
        scale={1}
      >
        <meshBasicMaterial
          side={THREE.DoubleSide}
          color="#000"
        />
      </Sphere>
    </mesh>
  );
};

const BlackholeCanvas = ({ref, active, setActive}) => {
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
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 10, 0], fov: 25}}
      gl={{ preserveDrawingBuffer: true, alpha: true}}
    >
      <axesHelper args={[10]}/>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
        <Blackhole isMobile={isMobile} active={active} setActive={setActive}/>
        {/* <Ship/> */}
        <Softskill/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};



export default BlackholeCanvas;