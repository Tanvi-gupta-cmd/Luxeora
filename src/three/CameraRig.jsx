import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

export default function CameraRig({ children }) {

  const group = useRef();

  useFrame((state) => {

    const x = state.mouse.x * 0.3;
    const y = state.mouse.y * 0.3;

    group.current.rotation.y = x;
    group.current.rotation.x = y;

  });


  return (
    <group ref={group}>
      {children}
    </group>
  );
}