import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Mercury = ({planet}) =>  {
  const { nodes, materials } = useGLTF(planet);
  console.log(nodes);
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2}
      />
    </group>
  );
};
/* 
const Venus = (props) =>  {
  const { nodes, materials } = useGLTF(props.planet);
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.venus_Material001_0.geometry}
          material={materials["Material.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={791.399}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.atmosphere_Material_0.geometry}
          material={materials.Material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1337.027}
        />
      </group>
    </group>
  );
};

const Mars = (props) =>  {
  const { nodes, materials } = useGLTF(props.planet);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mercury_1.geometry}
          material={materials.mercurius}
        />
      </group>
    </group>
  );
};

const Jupiter = (props) =>  {
  const { nodes, materials } = useGLTF(props.planet);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mercury_1.geometry}
          material={materials.mercurius}
        />
      </group>
    </group>
  );
};

const Saturn = (props) =>  {
  const { nodes, materials } = useGLTF(props.planet);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mercury_1.geometry}
          material={materials.mercurius}
        />
      </group>
    </group>
  );
}; */

export {
  Mercury,
  /* Venus,
  Mars,
  Jupiter,
  Saturn */
}
