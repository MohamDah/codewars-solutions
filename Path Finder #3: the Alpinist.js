function MinHeap() {
  this.heap = []
}
MinHeap.prototype.push = function (value) {
  this.heap.push(value)
  let index = this.heap.length - 1

  while (index > 0) {
    const parent = Math.floor((index - 1) / 2)
    if (this.heap[parent][1] <= this.heap[index][1]) break;

    [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
    index = parent
  }
}

MinHeap.prototype.pop = function () {
  if (this.heap.length < 2) return this.heap.pop()

  const toReturn = this.heap[0]
  this.heap[0] = this.heap.pop()

  let index = 0
  while (true) {
    let leftChild = 2 * index + 1
    let rightChild = 2 * index + 2
    let smallest = index
    if (leftChild < this.heap.length && this.heap[leftChild][1] < this.heap[smallest][1]) {
      smallest = leftChild
    }
    if (rightChild < this.heap.length && this.heap[rightChild][1] < this.heap[smallest][1]) {
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
  const getCord = cell => `${cell[0]},${cell[1]}`
  visited.add("0,0")

  let currCell = [[0, 0], 0]
  const minHeap = new MinHeap()
  const dists = new Map()


  while (currCell) {
    
    visited.add(`${currCell[0][0]},${currCell[0][1]}`)
    for (const [x, y] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
      const newCell = [+currCell[0][0] + x, +currCell[0][1] + y];
      const coords = `${newCell[0]},${newCell[1]}`
      if (
        newCell.every(i => i >= 0 && i < matrix.length)
        && !visited.has(coords)
      ) {
        const newVal = Math.abs(+matrix[newCell[0]][newCell[1]] - +matrix[currCell[0][0]][currCell[0][1]]) + currCell[1]
        const oldVal = minHeap.heap.find(i => getCord(i[0]) === coords)
        if (oldVal) {
          oldVal[1] = oldVal[1] > newVal ? newVal : oldVal[1]
          if (currCell[0][0] === matrix.length && currCell[0][1] === matrix.length ) break;
        } else {
          minHeap.push([newCell, newVal])
        }
      }
    }
    // minHeap.sort((a, b) => a[1] < b[1] ? -1 : 1)
    // currCell = minHeap.find(i => !visited.has(getCord(i[0])))
    currCell = minHeap.pop()
    // currCell &&= currCell[0].split(",")
    // console.log(minHeap)
  }

  console.log(minHeap)

  const endCell = minHeap.find(i => getCord(i[0]) === getCord([matrix.length - 1, matrix.length - 1]))

  return endCell ? endCell[1] : 0
}






console.log(
  pathFinder(
    // `700000
    // 077770
    // 077770
    // 077770
    // 077770
    // 000007`
    `010
101
010`
  )
)