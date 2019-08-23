function dirReduc(dir) {
  // console.log(dir);
  let groupObj = dirGroup(dir);
  // console.log(groupObj);
  let res = setUpFinalArray(groupObj);
  console.log(res);
}

function dirGroup(dir) {
  var counts = {};
  dir.forEach(x => {
    counts[x] = (counts[x] || 0) + 1;
  });
  return counts;
}

function setUpFinalArray(groupObj) {
  let n = 0;
  let e = 0;
  let s = 0;
  let w = 0;
  if (Object.values(groupObj).every((val, i, arr) => val === arr[0])) {
    return [];
  } else {
    if (groupObj["NORTH"] > groupObj["SOUTH"]) {
      n = groupObj["NORTH"] - groupObj["SOUTH"];
    } else if (groupObj["NORTH"] < groupObj["SOUTH"]) {
      s = groupObj["SOUTH"] - groupObj["NORTH"];
    }
    if (groupObj["WEST"] > groupObj["EAST"]) {
      w = groupObj["WEST"] - groupObj["EAST"];
    } else if (groupObj["WEST"] < groupObj["EAST"]) {
      e = groupObj["EAST"] - groupObj["WEST"];
    }
  }
  return createArray([n, e, s, w]);
}

function createArray(dirCount) {
  let res = [];
  dirCount.forEach((n, i) => {
    for (var j = 0; j < n; j++) {
      if (i == 0) {
        res.push("NORTH");
      } else if (i == 1) {
        res.push("EAST");
      } else if (i == 2) {
        res.push("SOUTH");
      } else if (i == 3) {
        res.push("WEST");
      }
    }
  });
  return res;
}

const dirArray = [
  "NORTH",
  "SOUTH",
  "SOUTH",
  "SOUTH",
  "EAST",
  "EAST",
  "WEST",
  "NORTH",
  "WEST",
  "WEST",
  "NORTH",
  "WEST",
  "NORTH",
  "WEST",
  "NORTH",
  "WEST",
  "NORTH",
  "WEST",
  "NORTH"
];

dirReduc(dirArray);
