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
  for (let i = 0; i < commandArray.length; i++) {
    switch (commandArray[i]) {
      case "F":
        moveForward(rover);
        break;
      case "B":
        moveBackward(rover);
        break;
      case "R":
        turnRight(rover);
        break;
      case "L":
        turnLeft(rover);
        break;
      default:
        console.log(commandArray[i] + " is NOT a known command");
    }
  }
  rover.travelLog.push({ X: rover.x, Y: rover.y });
  console.log(rover);
  showRoute(rover);
};

function turnLeft(rover) {
  let newIndex = 0;
  showPoint(rover);
  console.log("turnLeft was called!");
  console.log("\n");
  if (rover.direction != "N") {
    newIndex = rover.compass.indexOf(rover.direction) - 1;
  } else {
    newIndex = 3;
  }
  rover.direction = rover.compass[newIndex];
}

function turnRight(rover) {
  let newIndex = 0;
  showPoint(rover);
  console.log("turnRight was called!");
  console.log("\n");
  if (rover.direction != "W") {
    newIndex = rover.compass.indexOf(rover.direction) + 1;
  } else {
    newIndex = 0;
  }
  rover.direction = rover.compass[newIndex];
}

function moveForward(rover) {
  rover.travelLog.push({ X: rover.x, Y: rover.y });
  showPoint(rover);
  console.log("moveForward was called");
  console.log("\n");
  let direction = rover.direction;
  if (direction == "N") {
    rover.y < 10 ? rover.y++ : console.log("You have hit the north boundary");
  } else if (direction == "E") {
    rover.x < 10 ? rover.x++ : console.log("You have hit the east boundary");
  } else if (direction == "S") {
    rover.y > 1 ? rover.y-- : console.log("You have hit the south boundary");
  } else if (direction == "W") {
    rover.x > 1 ? rover.x++ : console.log("You have hit the west boundary");
  }
}

function moveBackward(rover) {
  rover.travelLog.push({ X: rover.x, Y: rover.y });
  showPoint(rover);
  console.log("moveBackward was called");
  console.log("\n");
  let direction = rover.direction;
  if (direction == "N") {
    rover.y > 1 ? rover.y-- : console.log("You have hit the south boundary");
  } else if (direction == "E") {
    rover.x > 1 ? rover.x-- : console.log("You have hit the west boundary");
  } else if (direction == "S") {
    rover.y < 10 ? rover.y++ : console.log("You have hit the north boundary");
  } else if (direction == "W") {
    rover.x < 10 ? rover.x++ : console.log("You have hit the east boundary");
  }
}

function showPoint(rover) {
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
      if (rover.y == i && rover.x == j) {
        row.push("|X");
      } else {
        row.push("| ");
      }
    }
    console.log(row.join(""));
  }
}

function showRoute(rover) {
  let coordinates = rover.travelLog;
  let orderedLogs = []
  let cont = 0
  while(cont < 10){
  coordinates.forEach(log => {
    if (log.Y == cont) {
      orderedLogs.push(log);
    }
  });
  cont++
  }

console.log(orderedLogs);


  let map = [];
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let i = 0; i < 10; i++) {
      row.push("| ");
    }
    map.push(row);
  }
  console.log(map);
}

commands("ffrfffrbblffrfffff", kata);
