import Ground from "../components/environment/Ground";
import Tree from "../components/environment/Tree";
import Road from "../components/roads/Road";
import Building from "../components/city/Building";

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

const buildings = [];

for (let x = -24; x <= 24; x += 4) {
  for (let z = -24; z <= 24; z += 4) {
    if (Math.abs(x % 12) < 2 || Math.abs(z % 12) < 2) continue;

    const height = Math.random() * 10 + 2;

    buildings.push({
      position: [x, height / 2, z],
      height,
    });
  }
}

const trees = [];

for (let x = -24; x <= 24; x += 6) {
  for (let z = -24; z <= 24; z += 6) {
    if (Math.random() > 0.45) continue;

    trees.push({
      position: [x + 1.5, 0.6, z + 1.5],
    });
  }
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
        <Tree key={`tree-${index}`} {...tree} />
      ))}
    </>
  );
}

export default CityScene;