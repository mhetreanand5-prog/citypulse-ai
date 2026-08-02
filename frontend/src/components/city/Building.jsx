function Building({ position, height, width = 2, depth = 2 }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color="#8d8d8d" />
    </mesh>
  );
}

export default Building;
