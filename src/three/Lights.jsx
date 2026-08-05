export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />

      <spotLight
        position={[0, 5, 4]}
        angle={0.4}
        intensity={8}
        penumbra={1}
      />

      <directionalLight
        position={[4, 5, 4]}
        intensity={1.2}
        color="#ffffff"
      />

      <pointLight
        position={[-3, 2, 2]}
        intensity={0.8}
        color="#D4AF37"
      />

      <pointLight
        position={[2, 1, 2]}
        intensity={0.5}
        color="#F8EEE9"
      />
    </>
  );
}