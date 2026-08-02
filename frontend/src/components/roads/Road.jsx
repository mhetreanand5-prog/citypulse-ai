function Road({ position, rotation = [0, 0, 0], length = 18, width = 3 }) {
  return (
    <mesh position={position} rotation={rotation} receiveShadow>
      <boxGeometry args={[length, 0.02, width]} />
      <meshStandardMaterial color="#333333" />
    </mesh>
  );
}

export default Road;
