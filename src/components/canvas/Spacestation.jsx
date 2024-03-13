import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'
import React, { useRef } from "react";
const Station = (props) => {
   const { nodes, materials } = useGLTF(
    "./spacestation/station.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[0, 75, 0]}
          rotation={[-Math.PI / 2, -0.3, 1]}
          scale={70}
        >
          <ambientLight intensity={2} color="#100d25" />
          <directionalLight intensity={10} color="#aaa6c3" position={[5, 0, 0]} />
          <spotLight intensity={2} color="#100d25" position={[5, 0, 0]} />
          <hemisphereLight intensity={2} color="#100d25" />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_Station_Base_0.geometry}
            material={materials.Station_Base}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_White_0.geometry}
            material={materials.White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_Station_Secondary_0.geometry}
            material={materials.Station_Secondary}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_BlueLight_0.geometry}
            material={materials.BlueLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_RedLight_0.geometry}
            material={materials.RedLight}
          />
        </group>
      </group>
    </group>
  );
}

const StationCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true, alpha: true}}
      camera = {{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Station />
      </Suspense>
    </Canvas>
  )
}

export default StationCanvas