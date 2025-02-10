// https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) return -1;

    if (pageIndex < this.pageCount() - 1) return this.itemsPerPage;

    const count = this.itemCount() % this.itemsPerPage;
    return count === 0 ? this.itemsPerPage : count;
  }
  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) return -1;

    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f', "g", "h", "i"], 4);
helper.itemCount() // should == 6
helper.pageItemCount(2) // should == 4
console.log(
  helper.pageIndex(4)
)
helper.pageCount() // should == 2