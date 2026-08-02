import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CityScene from "./scenes/CityScene";

function App() {
  return (
    <Canvas
      shadows
      camera={{
        position: [28, 24, 28],
        fov: 55,
      }}
    >
      <color attach="background" args={["#87CEEB"]} />

      <ambientLight intensity={1.5} />

      <directionalLight
        position={[15, 25, 15]}
        intensity={2}
        castShadow
      />

      <OrbitControls />

      <CityScene />
    </Canvas>
  );
}

export default App;