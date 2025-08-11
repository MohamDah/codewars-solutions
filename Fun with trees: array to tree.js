// https://www.codewars.com/kata/57e5a6a67fbcc9ba900021cd/javascript

var TreeNode = function (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

function arrayToTree(array) {
  if (!array || array.length === 0) return undefined;

  const baseNode = new TreeNode(array.shift());
  const queue = [baseNode];

  while (queue.length > 0 && array.length > 0) {
    const currNode = queue.shift();
    currNode.left = new TreeNode(array.shift());
    if (array.length > 0)
      currNode.right = new TreeNode(array.shift());
    queue.push(currNode.left);
    queue.push(currNode.right);
  }
  return baseNode;
};

const myNode = arrayToTree(
  [
    -2135, 8022, 7535,
    -1517, 1727, -8342,
    -1852, -3149, -6082,
    -1770, 5634, -192,
    1255
  ]
);
console.log(
  JSON.stringify(myNode)
);