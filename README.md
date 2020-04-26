![Travis (.org)](https://img.shields.io/travis/sima-milli/structure) [![Coverage Status](https://coveralls.io/repos/github/sima-milli/structure/badge.svg?branch=master)](https://coveralls.io/github/sima-milli/structure?branch=master)

# structure

Small single [linked list.](https://en.wikipedia.org/wiki/Linked_list "linked list (Wikipedia)")
## Installation

```sh
npm install structure
yarn add structure
```

## Usage

```javascript
const {LinkedList} = require(“structure”);
const structure = new LinkedList(5);

// add
structure.add(9);
structure.add(1);
structure.add("a");

// remove by index
structure.remove(2);

// turn to array
const newArr = structure.toArray();

// map nodes and return new list
const newList = structure.map((item) => {
  return {
    data: item,
  };
});
const result = structure.search((data) => data === “d”);

// loop nodes
structure.foreach((item) => {
  console.log(“this is the item:“, item);
});

// search for node
 const result = structure.search((data) => data === "d");

// search by index
const result = structure.searchIndex(1);
```

### AMD

```javascript
define(function (require, exports, module) {
  var linkedlist = require("structure");
});
```

## Test

```sh
npm run test
```
