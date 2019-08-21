// Rover Object Goes Here
// ======================

let kata = {
  direction: "N",
  compass: ["N", "E", "S", "W"],
  x: 0,
  y: 0,
  travelLog: []
};

const commands = (string, rover) => {
  string = string.toUpperCase();
  commandArray = string.split("");
  // console.log(commandArray);

  for (let i = 0; i < commandArray.length; i++) {
    if (commandArray[i] == "F") {
      moveForward(rover);
    } else if (commandArray[i] == "B") {
      moveBackward(kata);
    } else if (commandArray[i] == "R") {
      turnRight(kata);
    } else if (commandArray[i] == "L") {
      turnLeft(kata);
    } else {
      console.log(commandArray[i] + " is NOT a known command");
    }
  }
  console.log(rover);
};

// ======================
function turnLeft(rover) {
  let newIndex = 0;
  console.log("turnLeft was called!");
  if (rover.direction != "N") {
    newIndex = rover.compass.indexOf(rover.direction) - 1;
  } else {
    newIndex = 3;
  }
  rover.direction = rover.compass[newIndex];
}

function turnRight(rover) {
  let newIndex = 0;
  console.log("turnRight was called!");
  if (rover.direction != "W") {
    newIndex = rover.compass.indexOf(rover.direction) + 1;
  } else {
    newIndex = 0;
  }
  rover.direction = rover.compass[newIndex];
}

function moveForward(rover) {
  console.log("moveForward was called");
  rover.travelLog.push({ X: rover.x, Y: rover.y });
  let direction = rover.direction;
  console.log(direction);
  if (direction == "N") {
    rover.y < 9 ? rover.y++ : console.log("You have hit the north boundary");
  } else if (direction == "E") {
    rover.x < 9 ? rover.x++ : console.log("You have hit the east boundary");
  } else if (direction == "S") {
    rover.y > 1 ? rover.y-- : console.log("You have hit the south boundary");
  } else if (direction == "W") {
    rover.x > 1 ? rover.x++ : console.log("You have hit the west boundary");
  }
}

function moveBackward(rover) {
  console.log("moveBackward was called");
  rover.travelLog.push({ X: rover.x, Y: rover.y });
  let direction = rover.direction;
  console.log(direction);
  if (direction == "N") {
    rover.y > 1 ? rover.y-- : console.log("You have hit the south boundary");
  } else if (direction == "E") {
    rover.x > 1 ? rover.x-- : console.log("You have hit the west boundary");
  } else if (direction == "S") {
    rover.y < 9 ? rover.y++ : console.log("You have hit the north boundary");
  } else if (direction == "W") {
    rover.x < 9 ? rover.x++ : console.log("You have hit the east boundary");
  }
}

commands("bb", kata);
