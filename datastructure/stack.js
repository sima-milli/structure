// Stack is an array
// LIFO
// this has a limited size: if you exceed the stack limitation stack overflow

class Stack {
  constructor(limit) {
    this.index = -1;
    this.limit = limit;
    this.store = new Array(limit);
  }

  isEmpty() {
    return this.index === -1;
  }

  isFull() {
    return this.index >= this.limit;
  }

  push(data) {
    // introduce
    if (this.isFull()) {
      throw "Stack overflow!";
    }
    this.index += 1;
    this.store[this.index] = data;
  }

  pop() {
    // take out
    if (this.isEmpty()) {
      throw "Empty stack";
    }
    const data = this.store[this.index];
    this.index -= 1;
    return data;
  }

  get() {
    if (this.isEmpty()) {
      throw "Empty stack";
    }
    const data = this.store[this.index];
    return data;
  }
}

module.exports = Stack;
