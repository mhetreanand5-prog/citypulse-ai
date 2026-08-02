export default function StreetLight({ position }) {
  return (
    <group position={position}>
      {/* Pole */}
      <mesh castShadow>
        <cylinderGeometry args={[0.06, 0.08, 3.5, 12]} />
        <meshStandardMaterial color="#555" />
      </mesh>

      {/* Lamp Arm */}
      <mesh position={[0.35, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.7, 8]} />
        <meshStandardMaterial color="#666" />
      </mesh>

      {/* Lamp Head */}
      <mesh position={[0.7, 1.5, 0]}>
        <boxGeometry args={[0.25, 0.15, 0.15]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </group>
  );
}