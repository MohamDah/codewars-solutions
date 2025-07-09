const getCord = cell => `${cell[0]},${cell[1]}`;

function MaxHeap(dists) { // Max heap implementation for this kata
  this.dists = dists;
  this.heap = [];
}
MaxHeap.prototype.push = function (value) {
  this.heap.push(value);
  let index = this.heap.length - 1;

  while (index > 0) {
    const parent = Math.floor((index - 1) / 2);
    if (this.dists.get(getCord(this.heap[parent])) > this.dists.get(getCord(this.heap[index]))) break;

    [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
    index = parent;
  }
};
MaxHeap.prototype.pop = function () {
  if (this.heap.length < 2) return this.heap.pop();

  const toReturn = this.heap[0];
  this.heap[0] = this.heap.pop();

  let index = 0;
  while (true) {
    let leftChild = 2 * index + 1;
    let rightChild = 2 * index + 2;
    let biggest = index;
    if (leftChild < this.heap.length && this.dists.get(getCord(this.heap[leftChild])) > this.dists.get(getCord(this.heap[biggest]))) {
      biggest = leftChild;
    }
    if (rightChild < this.heap.length && this.dists.get(getCord(this.heap[rightChild])) > this.dists.get(getCord(this.heap[biggest]))) {
      biggest = rightChild;
    }
    if (biggest === index) break;

    [this.heap[index], this.heap[biggest]] = [this.heap[biggest], this.heap[index]];
    index = biggest;
  }
  return toReturn;
};


function longestSlideDown(pyramid) {
  const endDists = []

  // Initialize MinHeap by passing it the distances map
  const dists = new Map();
  const maxHeap = new MaxHeap(dists);

  // Seed maxnHeap and dists
  dists.set("0,0", pyramid[0][0]);
  maxHeap.push([0, 0]);

  while (maxHeap.heap.length > 0) {
    // iterate over the unvisited cells with the highest distance values and explore.
    let currCell = maxHeap.pop();

    // Store end values
    if (currCell[0] === pyramid.length - 1) {
      endDists.push(dists.get(getCord(currCell)))
      continue
    };

    for (const [x, y] of [[1, 0], [1, 1]]) {
      const newCell = [+currCell[0] + x, +currCell[1] + y];

      if (newCell[1] >= 0 && newCell[1] < pyramid[newCell[0]].length) {
        // The distance of current cell + the value of new cell 
        const newVal = pyramid[newCell[0]][newCell[1]] + dists.get(getCord(currCell));
        const oldVal = dists.get(getCord(newCell)) || -Infinity;

        // Insert entry
        if (newVal > oldVal) {
          dists.set(getCord(newCell), newVal);
          maxHeap.push(newCell);
        }
      }
    }
  }
  return endDists.sort((a, b) => b - a)[0]
}

console.log(
  longestSlideDown(
    [
      [ 75 ],
      [ 95, 64 ],
      [ 17, 47, 82 ],
      [ 18, 35, 87, 10 ],
      [ 20, 4, 82, 47, 65 ],
      [ 19, 1, 23, 75, 3, 34 ],
      [ 88,  2, 77, 73, 7, 63, 67],
      [ 99, 65, 4, 28, 6, 16, 70, 92],
      [ 41, 41, 26, 56, 83, 40, 80, 70, 33],
      [ 41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
      [ 53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
      [ 70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
      [ 91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
      [ 63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
      [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]
    ]
  )
);