export default function Tree({ position }) {
  return (
    <group position={position}>
      {/* Trunk */}
      <mesh castShadow>
        <cylinderGeometry args={[0.15, 0.2, 1.2, 8]} />
        <meshStandardMaterial color="#6d4c41" />
      </mesh>

      {/* Leaves */}
      <mesh position={[0, 1, 0]} castShadow>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color="#2e7d32" />
      </mesh>
    </group>
  );
}