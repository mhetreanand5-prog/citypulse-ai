import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import CityScene from "./scenes/CityScene";

function App() {
  return (
    <Canvas
      shadows
      camera={{
        position: [35, 28, 35],
        fov: 55,
      }}
    >
      {/* Sky */}
      <Sky
        distance={450000}
        sunPosition={[100, 60, 100]}
        inclination={0.5}
        azimuth={0.25}
      />

      {/* Atmospheric Fog */}
      <fog attach="fog" args={["#d7ecff", 40, 130]} />

      {/* Lighting */}
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[30, 40, 20]}
        intensity={3}
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
      />

      <OrbitControls
        maxPolarAngle={Math.PI / 2.2}
        minDistance={15}
        maxDistance={80}
      />

      <CityScene />
    </Canvas>
  );
}

export default App;