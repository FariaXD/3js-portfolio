import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animate } from "framer-motion";

const Ship = ({ visible }) => {
  const ship = useRef();
  const [canAnim, setAnimate] = useState(false);
  const [startX, setStartX] = useState(-10);
  const [startY, setStartY] = useState(0);
  const [endX, setEndX] = useState(0);
  const [endY, setEndY] = useState(0);
  const timeout = 500;
  const speed = 1;
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setAnimate(true);
      }, timeout);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [visible, timeout]);

  useFrame((state, delta) => {
    
    if (canAnim && ship.current.position.x < endX) {
      ship.current.position.x += (endX - startX) * delta * speed;
    } else if (!visible) {
      ship.current.position.x = startX;
    }
  });

  const group = useRef();
  const { nodes, materials } = useGLTF("./ship/ship.glb");
  return (
    <Float>
      <group ref={group} dispose={null}>
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
                    rotation={[-Math.PI / 2, 0, Math.PI / 4]}
                    scale={1}
                    position={[-10, 0, 0]}
                    visible={visible}
                    ref={ship}
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
    </Float>
  );
};

export default Ship;
