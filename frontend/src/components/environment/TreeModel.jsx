import { useGLTF } from "@react-three/drei";

export default function TreeModel({
  position = [0, 0, 0],
  scale = 1,
}) {
  const { scene } = useGLTF("/assets/models/trees/tree.glb");

  return (
    <primitive
      object={scene.clone()}
      position={position}
      scale={scale}
    />
  );
}

// Preload the model
useGLTF.preload("/assets/models/trees/tree.glb");