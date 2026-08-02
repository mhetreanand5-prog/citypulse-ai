import Ground from "../components/environment/Ground";
import Road from "../components/roads/Road";
import Building from "../components/city/Building";

const roads = [
  { position: [0, 0.01, 0] },
  { position: [0, 0.01, 8] },
  { position: [0, 0.01, -8] },
  { position: [0, 0.01, 0], rotation: [0, Math.PI / 2, 0] },
  { position: [8, 0.01, 0], rotation: [0, Math.PI / 2, 0] },
  { position: [-8, 0.01, 0], rotation: [0, Math.PI / 2, 0] },
];

const buildings = [
  { position: [-5, 2, -5], height: 4 },
  { position: [-3, 3, -5], height: 6 },
  { position: [5, 2.5, -5], height: 5 },
  { position: [3, 1.5, -3], height: 3 },
  { position: [-5, 4, 5], height: 8 },
  { position: [5, 3, 5], height: 6 },
  { position: [3, 2, 3], height: 4 },
  { position: [-3, 2.5, 3], height: 5 },
];

function CityScene() {
  return (
    <>
      <Ground />

      {roads.map((road, index) => (
        <Road key={`road-${index}`} {...road} />
      ))}

      {buildings.map((building, index) => (
        <Building key={`building-${index}`} {...building} />
      ))}
    </>
  );
}

export default CityScene;
