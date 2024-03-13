import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Ship = (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("./ship/ship.glb");
    const { actions } = useAnimations(animations, group);
    return (
    <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group
            name="1fb6118c09204d73b7f9eeae5dceca4cfbx"
            rotation={[Math.PI / 2, 0, 0]}
            >
            <group name="Object_2">
                <group name="RootNode">
                <group
                    name="Cube"
                    position={[0, 28.554, -19.831]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                >
                    <mesh
                    name="Cube_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Material001_0.geometry}
                    material={materials["Material.001"]}
                    />
                </group>
                </group>
            </group>
            </group>
        </group>
        </group>
    </group>
    );
}

export default Ship