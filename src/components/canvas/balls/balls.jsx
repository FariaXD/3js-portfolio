import React, { useRef, useState } from "react";
import { useGLTF, Text, Center } from "@react-three/drei";
import { Decal, useTexture } from "@react-three/drei";
import {MeshStandardMaterial} from "three/src/materials/MeshStandardMaterial";

const DecalText = ({icon, name, radius}) => {
  const [decal1] = useTexture([icon.icon1]);
  const [decal2] = useTexture([icon.icon2]);
  const [decal3] = useTexture([icon.icon3]);
  const [showName, setShowName] = useState(false);
  return (
    <>
      <Decal map={decal1} position={[0, 0, 1 * radius]} rotation={[0, 0, 0]} onClick={() => setShowName(!showName)}/>
        <Decal map={decal2}position={[Math.sin(120 * Math.PI / 180) * radius, 0, Math.cos(120 * Math.PI / 180) * radius]} rotation={[0, 120 * Math.PI / 180, 0]} onClick={() => setShowName(!showName)}/>
      <Decal map={decal3}position={[Math.sin(240 * Math.PI / 180) * radius, 0, Math.cos(240 * Math.PI / 180) * radius]} rotation={[0, 240 * Math.PI / 180, 0]} onClick={() => setShowName(!showName)}/>
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
            {name.tech1}
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
            {name.tech2}
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
            {name.tech3}
          </Text>
        </>
      )}
    </>
  )
}

const Mercury = (props) =>  {
  const { nodes, materials } = useGLTF("./planets/mercury/mercury.glb");
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials["Material.002"]}
        scale={2}
      >
        <DecalText radius={1} icon={props.icon} name={props.name} />
      </mesh>
    </group>
  );
};
 
const Venus = (props) =>  {
  const { nodes, materials } = useGLTF("./planets/venus/venus.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.0015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.venus_Material001_0.geometry}
          material={materials["Material.001"]}
          scale={791.399}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.atmosphere_Material_0.geometry}
          material={materials.Material}
          scale={1337.027}
        >
          <DecalText radius={1} icon={props.icon} name={props.name} />
        </mesh>
      </group>
    </group>
  );
};
const Earth = (props) =>  {
  const { nodes, materials } = useGLTF("./planets/earth/earth.glb");
  return (
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pSphere1_lambert3_0.geometry}
          material={materials.lambert3}
          scale={2.1}
        >
          <DecalText radius={1} icon={props.icon} name={props.name} />
        </mesh>
      </group>
    );
};

const Mars = (props) =>  {
  const { nodes, materials } = useGLTF('./planets/mercury/mercury.glb');
   return (
   <group dispose={null}>
      <ambientLight intensity={5} color={'#db907c'}/>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials["Material.002"]}
        scale={2}
      >
        <DecalText radius={1} icon={props.icon} name={props.name} />
      </mesh>
    </group>
  );
};


const Jupiter = (props) => {
  const { nodes, materials } = useGLTF(
    "./planets/jupiter/jupiter.glb"
  );
  return (
    <group {...props} dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.1}
      />
      <mesh
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials["Material.002"]}
        scale= {2.09}
      >
        <DecalText radius={1} icon={props.icon} name={props.name} />
      </mesh>
    </group>
  );
}

const Saturn = (props) =>  {
  const { nodes, materials } = useGLTF("./planets/saturn/saturn.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials["Material.002"]}
        scale={1.79}
      >
        <DecalText radius={1} icon={props.icon} name={props.name} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_ring_0.geometry}
        material={materials.ring}
        rotation={[-Math.PI / 2, 0.236, 0]}
        scale={2.2}
      />
    </group>
  );
};

const Uranus = (props) =>  {
  const { nodes, materials } = useGLTF("./planets/uranus/uranus.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.003, 0]}>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_Material002_0.geometry}
            material={materials["Material.002"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.9}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_Material002_0.geometry}
            material={materials["Material.002"]}
            scale={1.89}
          >
            <DecalText radius={1} icon={props.icon} name={props.name} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_ring_0.geometry}
            material={materials.ring}
            rotation={[-Math.PI / 2, 1.367, 0]}
            scale={2.5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_ring_0.geometry}
            material={materials.ring}
            rotation={[-Math.PI / 2, 1.367, 0]}
            scale={2.55}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_ring_0.geometry}
            material={materials.ring}
            rotation={[-Math.PI / 2, 1.367, 0]}
            scale={2.6}
          />
        </group>
      </group>
    </group>
  );
};

export {
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter, 
  Saturn,
  Uranus
}
