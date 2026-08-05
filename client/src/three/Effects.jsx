import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Effects() {
  return (
    <EffectComposer>
      <Bloom
        intensity={0.25}
        luminanceThreshold={0.9}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
    </EffectComposer>
  );
}