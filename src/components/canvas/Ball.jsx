import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, useTexture, OrbitControls, Preload, Text, useGLTF, Icosahedron } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'


const Ball = (props) => {
  const { nodes, materials } = useGLTF(props.planet);
  const [decal1] = useTexture([props.icon.icon1]);
  const [decal2] = useTexture([props.icon.icon2]);
  const [decal3] = useTexture([props.icon.icon3]);
  const [showName, setShowName] = useState(false);
  return (
    <group {...props} dispose={null} onClick={() => setShowName(!showName)}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials["Material.002"]}
        rotation={[0, 0, 0]}
        scale={2}
      >
        <Decal  map={decal1} position={[0, 0, 1]} rotation={[0, 0, 0]} onClick={() => setShowName(!showName)}/>
         <Decal  map={decal2}position={[Math.sin(120 * Math.PI / 180), 0, Math.cos(120 * Math.PI / 180)]} rotation={[0, 120 * Math.PI / 180, 0]} onClick={() => setShowName(!showName)}/>
        <Decal  map={decal3}position={[Math.sin(240 * Math.PI / 180), 0, Math.cos(240 * Math.PI / 180)]} rotation={[0, 240 * Math.PI / 180, 0]} onClick={() => setShowName(!showName)}/>

        {showName && (
          <>
            <Text
              position={[0, 0.4, 1]} // Adjust position as needed
              fontSize={0.2}
              color='white'
              outlineColor={'black'}
              outlineWidth={0.01}
              fontWeight='3'
            >
              {props.name.tech1}
            </Text>
            <Text
              position={[Math.sin(120 * Math.PI / 180), 0.4, Math.cos(120 * Math.PI / 180)]}
              rotation={[0, 120 * Math.PI / 180, 0]}
              fontSize={0.2}
              color='white'
              outlineColor={'black'}
              outlineWidth={0.01}
              fontWeight='3'
            >
              {props.name.tech2}
            </Text>
            <Text
              position={[Math.sin(240 * Math.PI / 180), 0.4, Math.cos(120 * Math.PI / 180)]}
              rotation={[0, 240 * Math.PI / 180, 0]}
              fontSize={0.2}
              color='white'
              outlineColor={'black'}
              outlineWidth={0.01}
              fontWeight='3'
            >
              {props.name.tech3}
            </Text>
          </>
        )}
      </mesh>
    </group>
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
          enableRotate={false}
          autoRotate
        />
       {/*  <axesHelper args={[5]}/> */}
        <ambientLight intensity={1} />
        <Ball icon={icon} name={name} planet={planet} />
      
      <Preload all />
    </Canvas>
 );
};

export default BallCanvas;
