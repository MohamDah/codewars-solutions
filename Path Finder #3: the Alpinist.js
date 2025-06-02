// https://www.codewars.com/kata/576986639772456f6f00030c

const getCord = cell => `${cell[0]},${cell[1]}`

function MinHeap(dists) { // Min heap implementation for this kata
  this.dists = dists
  this.heap = []
}
MinHeap.prototype.push = function (value) {
  // Pushes the cell and sorts based on the distance value of the cell in dicts
  this.heap.push(value)
  let index = this.heap.length - 1

  while (index > 0) {
    const parent = Math.floor((index - 1) / 2)
    if (this.dists.get(getCord(this.heap[parent])) <= this.dists.get(getCord(this.heap[index]))) break;

    [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
    index = parent
  }
}
MinHeap.prototype.pop = function () {
  // Extracts the root and reorganizes the tree
  if (this.heap.length < 2) return this.heap.pop()

  const toReturn = this.heap[0]
  this.heap[0] = this.heap.pop()

  let index = 0
  while (true) {
    let leftChild = 2 * index + 1
    let rightChild = 2 * index + 2
    let smallest = index
    if (leftChild < this.heap.length && this.dists.get(getCord(this.heap[leftChild])) < this.dists.get(getCord(this.heap[smallest]))) {
      smallest = leftChild
    }
    if (rightChild < this.heap.length && this.dists.get(getCord(this.heap[rightChild])) < this.dists.get(getCord(this.heap[smallest]))) {
      smallest = rightChild
    }
    if (smallest === index) break
    
    [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
    index = smallest
  }
  return toReturn
}

function pathFinder(area) {
  if (area.length === 1) return 0
  const matrix = area.split('\n').map(i => i.split('').map(Number));
  const visited = new Set()

  // Initialize MinHeap by passing it the distances map
  const dists = new Map()
  const minHeap = new MinHeap(dists)

  // Seed minHeap and dists
  dists.set("0,0", 0)
  minHeap.push([0, 0])

  while (minHeap.heap.length > 0) {
    // iterate over the unvisited cells with the lowest distance values and explore.
    let currCell = minHeap.pop()
    if (visited.has(getCord(currCell))) continue

    // If we reach the end, return the distance value of it.
    if (getCord(currCell) === getCord([matrix.length-1, matrix.length-1])) return dists.get(getCord(currCell))
    
    visited.add(getCord(currCell))

    for (const [x, y] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
      const newCell = [+currCell[0] + x, +currCell[1] + y];
      if (
        newCell.every(i => i >= 0 && i < matrix.length)
        && !visited.has(getCord(newCell))
      ) {
        // The difference between the two cells' numbers + the distance value of the current cell.
        const newVal = Math.abs(+matrix[newCell[0]][newCell[1]] - +matrix[currCell[0]][currCell[1]]) + dists.get(getCord(currCell))
        const oldVal = dists.get(getCord(newCell)) || Infinity

        // Insert entry
        dists.set(getCord(newCell), oldVal > newVal ? newVal : oldVal)
        minHeap.push(newCell)
      }
    }
  }
}


console.log(
  pathFinder(
    // `700000
    // 077770
    // 077770
    // 077770
    // 077770
    // 000007`
//     `010
// 101
// 010`
`777000
007000
007000
007000
007000
007777`
  )
)