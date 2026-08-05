import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Particles() {
  const points = useMemo(() => {
    const p = [];

    for (let i = 0; i < 1200; i++) {
      p.push(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12
      );
    }

    return new Float32Array(p);
  }, []);

  return (
    <Points positions={points}>
      <PointMaterial
        transparent
        color="#D4AF37"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}