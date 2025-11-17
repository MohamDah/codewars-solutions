// https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/
// Create a linked list with a loop for testing
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create nodes
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

// Link them together
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node3; // Creates a loop back to node3

function loop_size(node){
  const nodeMap = new Map()
  let distance = 0
  let currNode = node
  while (currNode.next) {
    if (nodeMap.has(currNode)) 
      return distance - nodeMap.get(currNode)
    nodeMap.set(currNode, distance)
    distance++
    if (currNode.next)
      currNode = currNode.next
    else
      return null
  }
}

console.log(
  loop_size(node1)
)