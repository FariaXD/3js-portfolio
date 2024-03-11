import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, useTexture, OrbitControls, Preload, Text, useGLTF, Icosahedron } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'


const Ball = (props) => {
 const { nodes, materials } = useGLTF(props.planet);
 const [decal] = useTexture([props.icon]);

 const [showName, setShowName] = useState(false);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials["Material.002"]}
        rotation={[0, 0, 0]}
        
        scale={2}
      >
        <Decal map={decal} position={[0, 0, 1]} rotation={[0, 0, 6.25]} onClick={() => setShowName(!showName)}/>
        <Decal map={decal} position={[0, 0, -1]} rotation={[2 * Math.PI, 0, 6.25]} onClick={() => setShowName(!showName)}/>

        {showName && (
          <Text
            position={[0, 0.4, 1]} // Adjust position as needed
            fontSize={0.2}
            color='white'
            outlineColor={'black'}
            outlineWidth={0.01}
            fontWeight='3'
          >
            {props.name}
          </Text>
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
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
        />
        <ambientLight intensity={1} />
        <Ball icon={icon} name={name} planet={planet} />
      </Suspense>
      <Preload all />
    </Canvas>
 );
};

export default BallCanvas;
