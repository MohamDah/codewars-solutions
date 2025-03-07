// https://www.codewars.com/kata/550f22f4d758534c1100025a/javascript

const dir = {
  "NORTH": "SOUTH",
  "SOUTH": "NORTH",
  "WEST": "EAST",
  "EAST": "WEST"
};

function dirReduc(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (dir[arr[i - 1]] === arr[i]) {
      arr.splice(i-1, 2);
      return dirReduc(arr);
    }
  }

  return arr;
}


console.log(
  dirReduc(["NORTH", "SOUTH", "EAST", "WEST"])
)