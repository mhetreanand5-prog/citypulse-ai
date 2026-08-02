export default function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial
        color="#6fbf5d"
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
} 