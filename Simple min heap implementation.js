// https://www.codewars.com/kata/53a71e153d87ddcb34000d20/javascript
function MinHeap() {
  this.heap = []
}
MinHeap.prototype.push = function (value) {
  this.heap.push(value)
  let index = this.heap.length - 1

  while (index > 0) {
    const parent = Math.floor((index - 1) / 2)
    if (this.heap[parent] <= this.heap[index]) break;

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
    if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
      smallest = leftChild
    }
    if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
      smallest = rightChild
    }
    if (smallest === index) break
    
    [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
    index = smallest
  }
  return toReturn
}


const heap = new MinHeap()

heap.push(10)
heap.push(3)
heap.push(4)
heap.push(7)

// while (heap.heap.length > 0) {
//   console.log(heap.pop())
// }
console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())
console.log(heap.pop())

console.log(heap.heap)