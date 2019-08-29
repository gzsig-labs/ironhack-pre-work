function dirReduc(dir) {
  let reduceDir = [];
  reduceDir = reduce(dir);

  while (reduceDir[1] == "again") {
    reduceDir = reduce(reduceDir[0]);
  }
  console.log(dir);
  console.log(reduceDir);
}

function reduce(dir) {
  let res = [];
  for (i = 0; i < dir.length; i += 1) {
    if (dir[i] == "NORTH" && dir[i + 1] != "SOUTH") {
      res.push(dir[i]);
    } else if (dir[i] == "NORTH" && dir[i + 1] == "SOUTH") {
      i += 1;
      continue;
    }
    if (dir[i] == "EAST" && dir[i + 1] != "WEST") {
      res.push(dir[i]);
    } else if (dir[i] == "EAST" && dir[i + 1] == "WEST") {
      i += 1;
      continue;
    }
    if (dir[i] == "SOUTH" && dir[i + 1] != "NORTH") {
      res.push(dir[i]);
    } else if (dir[i] == "SOUTH" && dir[i + 1] == "NORTH") {
      i += 1;
      continue;
    }
    if (dir[i] == "WEST" && dir[i + 1] != "EAST") {
      res.push(dir[i]);
    } else if (dir[i] == "WEST" && dir[i + 1] == "EAST") {
      i += 1;
      continue;
    }
  }
  if (res.length == dir.length) {
    return res;
  } else {
    return [res, "again"];
  }
}

const dirArray = ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"];

dirReduc(dirArray);
