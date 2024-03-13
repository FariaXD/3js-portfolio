import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

const Softskill = ({ name, lsKey, visible, x, y }) => {
  const ref = useRef();
  const mult = 1;
  const [posX, setX] = useState(x);
  const [posY, setY] = useState(y);
  const maxScale = 0.2;
  const minScale = 0;
  const timeout = Math.random() * 3000 + 1000;
  const [readyToAppear, setReadyToAppear] = useState(false);
  const [textState, setTextState] = useState(0);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setReadyToAppear(true);
        ref.current.visible = true;
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [visible, timeout]);

  useFrame((state, delta) => {
    console.log(textState, visible, readyToAppear);
    if (visible && readyToAppear && textState == 0) {
      if (ref.current.fontSize > maxScale) {
        setTextState(1);
      } else if (textState == 0) {
        ref.current.fontSize += mult * delta;
      }
    } else if (!visible && textState == 1) {
      if (ref.current.fontSize < minScale) {
        setTextState(0);
        setReadyToAppear(false);
        ref.current.visible = false;
      } else {
        ref.current.fontSize -= mult * delta;
      }
    }
  }, []);

  return (
    <>
      <Float>
        <Text
          ref={ref}
          color="white"
          fontSize={0}
          position={[posX, posY, 0]}
          rotation={[0, 0, 0]}
          scale={1}
          visible={false}
        >
          {name}
        </Text>
      </Float>
    </>
  );
};

export default Softskill;
