import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function ProductModel() {

  const ring = useRef();
  const diamond = useRef();

  useFrame((state) => {

    const t = state.clock.elapsedTime;

    ring.current.rotation.x = t * 0.15;
    ring.current.rotation.y = t * 0.25;
    ring.current.rotation.z =
    Math.sin(t * 0.5) * 0.15;

   diamond.current.position.y =
   Math.sin(t*1.8)*0.08+0.42;

   diamond.current.position.x =
   Math.sin(t*0.7)*0.05;

  diamond.current.rotation.x += 0.003;
   diamond.current.rotation.y += 0.006;

  });

  return (

    <Float speed={2}>

      <group>

        {/* GOLD RING */}

       <mesh ref={ring}>

  <torusGeometry args={[1.25,0.08,64,200]} />

  <meshPhysicalMaterial
    color="#D4AF37"
    metalness={1}
    roughness={0.12}
    clearcoat={1}
    clearcoatRoughness={0}
    envMapIntensity={4}
  />

</mesh>

<mesh rotation={[Math.PI / 2, 0, 0]}>

  <torusGeometry args={[0.95,0.015,32,200]} />

  <meshBasicMaterial
    color="#FFD54F"
  />

</mesh>

        {/* DIAMOND */}

        <mesh ref={diamond} position={[0,0.55,0]}>

  <octahedronGeometry args={[0.28]} />

  <meshPhysicalMaterial
    color="#B80D1A"
    transmission={0.95}
    thickness={1}
    roughness={0.05}
    metalness={0}
    ior={2.5}
    clearcoat={1}
    clearcoatRoughness={0}
    reflectivity={1}
    envMapIntensity={3}
  />

</mesh>

      </group>

    </Float>

  );

}