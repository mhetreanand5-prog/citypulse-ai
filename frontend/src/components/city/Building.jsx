import { useMemo } from "react";

function randomColor() {
  const colors = [
    "#bfc5ce", // Concrete
    "#d7dce2", // White Glass
    "#9099a1", // Gray
    "#7d8fa3", // Blue Glass
    "#c5b8a5", // Beige
    "#8f8f8f", // Dark Concrete
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}

export default function Building({ position, height }) {
  const width = useMemo(() => Math.random() * 2 + 1.5, []);
  const depth = useMemo(() => Math.random() * 2 + 1.5, []);
  const color = useMemo(() => randomColor(), []);

  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial
        color={color}
        roughness={0.45}
        metalness={0.35}
      />
    </mesh>
  );
}