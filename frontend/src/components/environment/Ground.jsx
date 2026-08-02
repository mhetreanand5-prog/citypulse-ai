const DEFAULT_SIZE = 80;

function Ground({ size = DEFAULT_SIZE, color = "#4caf50" }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[size, size]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Ground;
