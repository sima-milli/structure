// link list

// ----O----O----O----O----0----

// --c--|--b--|--a--|--34-|--9--

class Node {
  // wagon
  constructor(people) {
    this.people = people;
    this.link = undefined;
  }
}

class LinkedList {
  //train
  constructor() {
    this.firstWagon = undefined;
  }

  add(people) {
    const wagon = new Node(people);
    if (this.firstWagon === undefined) {
      this.firstWagon = wagon;
    } else {
      wagon.link = this.firstWagon;
      this.firstWagon = wagon;
    }
  }

  isEmpty() {
    return this.firstWagon === undefined;
  }

  pop() {
    if (this.isEmpty()) {
      throw "Empty list";
    }
    const wagon = this.firstWagon;
    this.firstWagon = this.firstWagon.link;
    return wagon;
  }

  remove(index) {
    // --c--|--b--|--a--|--34-|--9--
    let wagon = this.searchIndex(index);
    if (this.isEmpty()) {
      throw "Empty list";
    }
    if (wagon === undefined) {
      throw "node not found!";
    }

    if (wagon === this.firstWagon) {
      wagon = this.firstWagon.link;
    } else {
      const prev = this.searchIndex(index - 1);
      prev.link = wagon.link;
    }

    wagon.link = undefined;
  }

  search(predicate) {
    // predicate is a functions that returns true or false
    let wagon = this.firstWagon;
    while (wagon) {
      if (predicate(wagon.people)) {
        return wagon;
      }
      wagon = wagon.link;
    }
    return undefined;
  }

  searchIndex(index) {
    let counter = 0;
    let wagon = this.firstWagon;
    while (wagon) {
      if (counter === index) {
        return wagon;
      }
      wagon = wagon.link;
      counter++;
    }
    return undefined;
  }

  foreach(action) {
    // action is a function that doesn't return any value
    let wagon = this.firstWagon;
    while (wagon) {
      action(wagon.people);
      wagon = wagon.link;
    }
  }

  map(func) {
    // function is a function that returns a value
    const result = new LinkedList();
    this.foreach((item) => {
      result.add(func(item));
    });
    return result;
  }

  toArray() {
    const arr = [];
    this.foreach((item) => {
      arr.push(item);
    });
    return arr;
  }
}

// remove
// search

module.exports = LinkedList;
