import Ground from "../components/environment/Ground";
import TreeModel from "../components/environment/TreeModel";
import Road from "../components/roads/Road";
import Building from "../components/city/Building";
import StreetLight from "../components/lights/StreetLight";

// -------------------- Roads --------------------

const roads = [];

// Horizontal Roads
for (let z = -24; z <= 24; z += 12) {
  roads.push({
    position: [0, 0.01, z],
  });
}

// Vertical Roads
for (let x = -24; x <= 24; x += 12) {
  roads.push({
    position: [x, 0.01, 0],
    rotation: [0, Math.PI / 2, 0],
  });
}

// -------------------- Buildings --------------------

const buildings = [];

for (let x = -24; x <= 24; x += 4) {
  for (let z = -24; z <= 24; z += 4) {
    // Leave roads empty
    if (Math.abs(x % 12) < 2 || Math.abs(z % 12) < 2) continue;

    const height = Math.random() * 10 + 2;

    buildings.push({
      position: [x, height / 2, z],
      height,
    });
  }
}

// -------------------- Trees --------------------

const trees = [];

for (let x = -24; x <= 24; x += 6) {
  for (let z = -24; z <= 24; z += 6) {
    if (Math.random() > 0.45) continue;

    trees.push({
      position: [x + 1.5, 0, z + 1.5],
    });
  }
}

// -------------------- Street Lights --------------------

const streetLights = [];

// Horizontal Roads
for (let x = -24; x <= 24; x += 6) {
  streetLights.push({
    position: [x, 1.75, -1.8],
  });

  streetLights.push({
    position: [x, 1.75, 1.8],
  });
}

// Vertical Roads
for (let z = -24; z <= 24; z += 6) {
  streetLights.push({
    position: [-1.8, 1.75, z],
  });

  streetLights.push({
    position: [1.8, 1.75, z],
  });
}

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

      {trees.map((tree, index) => (
        <TreeModel
          key={`tree-${index}`}
          position={tree.position}
          scale={0.8}
        />
      ))}

      {streetLights.map((light, index) => (
        <StreetLight key={`light-${index}`} {...light} />
      ))}
    </>
  );
}

export default CityScene;