// Rover Object Goes Here
// ======================
const width = 40;
const height = 20;
const dirN = 0;
const dirE = 1;
const dirS = 2;
const dirW = 3;
const whiteChar = " ";
const roverChar = ["^", ">", "v", "<"];

let kata = {
  direction: dirN,
  x: 0,
  y: 0,
  travelLog: []
};

const commandTable = {
  F: moveForward,
  B: moveBackward,
  R: turnRight,
  L: turnLeft
};

(() => {
  kata.travelLog = new Array(height);
  for (let y = 0; y < height; y++) {
    let row = new Array(width);
    for (let x = 0; x < width; x++) {
      row[x] = whiteChar;
    }
    kata.travelLog[y] = row;
  }
  pointer(kata);
})();

const commands = (string, rover) => {
  showRoute(rover);
  
  string = string.toUpperCase();
  for (let i = 0; i < string.length; i++) {
    let f = commandTable[string.charAt(i)];
    if (f) {
      f(rover);
      break
    } else {
      console.log(string.charAt(i) + " is NOT a known command");
    }
  }
};

function pointer(rover) {
  kata.travelLog[kata.y][kata.x] = roverChar[rover.direction];
}

function turnLeft(rover) {
  rover.direction = (rover.direction - 1) & 3;
  pointer(kata);
  console.log("\nturnLeft was called!");
  showRoute(rover);
}

function turnRight(rover) {
  rover.direction = (rover.direction + 1) & 3;
  pointer(kata);
  console.log("\nturnRight was called!");
  showRoute(rover);
}

function moveForward(rover) {
  console.log("\nmoveForward was called!");
  switch (rover.direction) {
    case dirN:
      rover.y < (height - 1) ? rover.y++ : console.log("You have hit the north boundary");
      break;
    case dirE:
      rover.x < (width - 1) ? rover.x++ : console.log("You have hit the east boundary");
      break;
    case dirS:
      rover.y > 1 ? rover.y-- : console.log("You have hit the south boundary");
      break;
    case dirW:
      rover.x > 1 ? rover.x-- : console.log("You have hit the west boundary");
      break;
  }
  pointer(kata);
  showRoute(rover);
}

function moveBackward(rover) {
  console.log("\nmoveBackward was called!");
  switch (rover.direction) {
    case dirS:
      rover.y < (height - 1) ? rover.y++ : console.log("You have hit the north boundary");
      break;
    case dirW:
      rover.x < (width - 1) ? rover.x++ : console.log("You have hit the east boundary");
      break;
    case dirN:
      rover.y > 1 ? rover.y-- : console.log("You have hit the south boundary");
      break;
    case dirE:
      rover.x > 1 ? rover.x-- : console.log("You have hit the west boundary");
      break;
  }
  pointer(kata);
  showRoute(rover);
}

function showRoute(rover) {
  for (let i = height - 1; i >= 0; i--) {
    console.log("|" + rover.travelLog[i].join("|") + "|");
  }
}

commands("", kata);


