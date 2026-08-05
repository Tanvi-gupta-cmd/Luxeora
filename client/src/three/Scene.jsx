import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import ProductModel from "./ProductModel";
import Lights from "./Lights";
import Particles from "./Particles";
import Effects from "./Effects";

export default function Scene() {
  return (
    <Canvas
  camera={{ position: [0, 0, 5], fov: 40 }}
  
  gl={{
    antialias: true,
    alpha: false
  }}
>

    <color attach="background" args={["#F8EEE9"]} />
  <Environment preset="sunset" />


      <Lights />

      <Particles />

      <ProductModel />

      <Effects />
    </Canvas>
  );
}