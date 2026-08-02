export default function Road({
  position = [0, 0.01, 0],
  rotation = [0, 0, 0],
}) {
  return (
    <group position={position} rotation={rotation}>
      {/* Road */}
      <mesh receiveShadow>
        <boxGeometry args={[18, 0.02, 3]} />
        <meshStandardMaterial color="#2f2f2f" />
      </mesh>

      {/* Left Sidewalk */}
      <mesh position={[0, 0.03, -1.65]}>
        <boxGeometry args={[18, 0.08, 0.3]} />
        <meshStandardMaterial color="#bdbdbd" />
      </mesh>

      {/* Right Sidewalk */}
      <mesh position={[0, 0.03, 1.65]}>
        <boxGeometry args={[18, 0.08, 0.3]} />
        <meshStandardMaterial color="#bdbdbd" />
      </mesh>

      {/* Center Lane Marking */}
      <mesh position={[0, 0.021, 0]}>
        <boxGeometry args={[18, 0.005, 0.08]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}