const width = 40;
const height = 20;
const initialX = 0;
const initialY = 0;
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

const commands = (string, rover) => {
  showRoute(rover);

  string = string.toUpperCase();
  for (let i = 0; i < string.length - 1; i++) {
    let f = commandTable[string.charAt(i)];
    if (f) {
      f(rover);
    } else {
      console.log(string.charAt(i) + " is NOT a known command");
    }
  }
};

function reset(rover) {
  console.log("vou resetei");
  rover.direction = dirN;
  rover.x = initialX;
  rover.y = initialY;
  rover.travelLog = new Array(height);
  for (let y = 0; y < height; y++) {
    let row = new Array(width);
    for (let x = 0; x < width; x++) {
      row[x] = whiteChar;
    }
    rover.travelLog[y] = row;
  }
  pointer(rover);
  showRoute(rover);
}

function pointer(rover) {
  rover.travelLog[rover.y][rover.x] = roverChar[rover.direction];
}

function turnLeft(rover) {
  rover.direction = (rover.direction - 1) & 3;
  pointer(rover);
  console.log("\nturnLeft was called!");
  showRoute(rover);
}

function turnRight(rover) {
  rover.direction = (rover.direction + 1) & 3;
  pointer(rover);
  console.log("\nturnRight was called!");
  showRoute(rover);
}

function moveForward(rover) {
  console.log("\nmoveForward was called!");
  switch (rover.direction) {
    case dirN:
      rover.y < height - 1
        ? rover.y++
        : console.log("You have hit the north boundary");
      break;
    case dirE:
      rover.x < width - 1
        ? rover.x++
        : console.log("You have hit the east boundary");
      break;
    case dirS:
      rover.y > 0 ? rover.y-- : console.log("You have hit the south boundary");
      break;
    case dirW:
      rover.x > 0 ? rover.x-- : console.log("You have hit the west boundary");
      break;
  }
  pointer(rover);
  showRoute(rover);
}

function moveBackward(rover) {
  console.log("\nmoveBackward was called!");
  switch (rover.direction) {
    case dirS:
      rover.y < height - 1
        ? rover.y++
        : console.log("You have hit the north boundary");
      break;
    case dirW:
      rover.x < width - 1
        ? rover.x++
        : console.log("You have hit the east boundary");
      break;
    case dirN:
      rover.y > 1 ? rover.y-- : console.log("You have hit the south boundary");
      break;
    case dirE:
      rover.x > 1 ? rover.x-- : console.log("You have hit the west boundary");
      break;
  }
  pointer(rover);
  showRoute(rover);
}

function showRoute(rover) {
  for (let i = height - 1; i >= 0; i--) {
    console.log("|" + rover.travelLog[i].join("|") + "|");
  }
}

// commands("ffffffffffrfffffffffffffflffffffffffffffffrfffffffffrfffff", kata);

// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding("utf-8");

// Prompt user to input data in console.
console.log("INSTRUCTIONS");
console.log("F: move forward");
console.log("B: move backward");
console.log("R: turn right");
console.log("L: turn left");
reset(kata);
// commands("", kata);
//pointer(kata);
console.log("Please input the first line of commands");
// When user input data and click enter key.
standard_input.on("data", function(data) {
  // User input exit.
  if (data === "quit\n") {
    // Program exit.
    console.log("User input complete, program exit.");
    process.exit();
  } else if (data === "reset\n") {
    reset(kata);
  } else {
    // Print user input in console.
    console.log("Givin command : " + data);
    commands(data, kata);
    console.log("\nPlease input the next line of commands or 'quit' to exit");
  }
});
