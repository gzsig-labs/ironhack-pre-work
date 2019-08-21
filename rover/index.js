// Rover Object Goes Here
// ======================

let kata = {
  direction: "N",
  compass: ["N", "E", "S", "W"],
  x: 0,
  y: 0
};

turnRight(kata);
moveForward(kata);
moveForward(kata);
moveForward(kata);
turnRight(kata);
moveForward(kata);
turnLeft(kata);
moveForward(kata);

// ======================
function turnLeft(rover) {
  let newIndex = 0;
  console.log("turnLeft was called!");
  // console.log("current direction: " + rover.direction);
  if (rover.direction != "N") {
    newIndex = rover.compass.indexOf(rover.direction) - 1;
  } else {
    newIndex = 3;
  }
  rover.direction = rover.compass[newIndex];
  // console.log(newIndex);
  // console.log("new direction: " + rover.direction);
  // console.log("\n");
}

function turnRight(rover) {
  let newIndex = 0;
  console.log("turnRight was called!");
  // console.log("current direction: " + rover.direction);
  if (rover.direction != "W") {
    newIndex = rover.compass.indexOf(rover.direction) + 1;
  } else {
    newIndex = 0;
  }
  rover.direction = rover.compass[newIndex];
  // console.log(newIndex);
  // console.log("new direction: " + rover.direction);
  // console.log("\n");
}

function moveForward(rover) {
  console.log("moveForward was called");
  let direction = rover.direction;
  console.log(direction);
  if (direction == "N") {
    rover.y = rover.y + 1;
  } else if (direction == "E") {
    rover.x = rover.x + 1;
  } else if (direction == "S") {
    rover.y = rover.y + 1;
  } else if (direction == "W") {
    rover.x = rover.x + 1;
  }
  console.log(rover);
}
