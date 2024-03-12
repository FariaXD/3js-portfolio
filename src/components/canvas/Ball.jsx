import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, useTexture, OrbitControls, Preload, Text, useGLTF, Icosahedron } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus } from './balls/balls';

const Ball = (props) => {
  return (
    <>
      {props.planet == "Mercury" && <Mercury {...props}/>}
      {props.planet == "Venus" && <Venus {...props}/>}
      {props.planet == "Earth" && <Earth {...props}/>}
      {props.planet == "Mars" && <Mars {...props}/>}
      {props.planet == "Jupiter" && <Jupiter {...props}/>}
      {props.planet == "Saturn" && <Saturn {...props}/>}
      {props.planet == "Uranus" && <Uranus {...props}/>}

    </>
  );
};

const BallCanvas = ({ icon, name, planet }) => {
 return (
    <Canvas
      frameloop='demand'
      camera={{ position: [0, 0, 3.5] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
      />
      <ambientLight intensity={1} />
      <Ball icon={icon} name={name} planet={planet} />
      <Preload all />
    </Canvas>
 );
};

export default BallCanvas;
