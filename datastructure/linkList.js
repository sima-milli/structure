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

  /**
  * Add people to the first wagon.
  *
  * @param {any}  - data to add to wagon
  * 
  */
  add(people) {
    const wagon = new Node(people);
    if (this.firstWagon === undefined) {
      this.firstWagon = wagon;
    } else {
      wagon.link = this.firstWagon;
      this.firstWagon = wagon;
    }
  }
  /**
  *  Check if the list is empty.
  *
  * @return {boolean}
  *
  */
  isEmpty() {
    return this.firstWagon === undefined;
  }
  /**
  * Pop out the first wagon.
  *
  * @return {any}  first wagon
  *
  */
  pop() {
    if (this.isEmpty()) {
      throw "Empty list";
    }
    const wagon = this.firstWagon;
    this.firstWagon = this.firstWagon.link;
    return wagon;
  }
  /**
  * Remove wagon by index.
  *
  * @param {number}  - index of wagon to remove
  *
  */
  remove(index) {
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
  /**
  * Search for wagon.
  *
  * @param {predicate}  - index of wagon to remove
  *
  * @return {any}  wagon found or undefined
  */
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
  /**
  * Search wagon by given index.
  *
  * @param {number}  - index
  *
  * @return {any}  wagon found or undefined
  */
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
  /**
  * Run a loop over each wagon.
  *
  * @param {action}  - action to be done
  *
  */
  foreach(action) {
    // action is a function that doesn't return any value
    let wagon = this.firstWagon;
    while (wagon) {
      action(wagon.people);
      wagon = wagon.link;
    }
  }
  /**
  * Run a loop over each wagon and return new list.
  *
  * @param {function}  - function to be done
  *
  * @return {LinkedList}  new linkedlist
  */
  map(func) {
    // function is a function that returns a value
    const result = new LinkedList();
    this.foreach((item) => {
      result.add(func(item));
    });
    return result;
  }
  /**
  * Convert linkedlist to array.
  *
  * @return {Array}
  */
  toArray() {
    const arr = [];
    this.foreach((item) => {
      arr.push(item);
    });
    return arr;
  }
}

module.exports = LinkedList;
