// const Stack = require('./datastructure/stack');

const Train = require("./datastructure/linkList");

const structure = new Train(5);

structure.add(9);
structure.add(34);
structure.add("a");
structure.add("b");
structure.add("c");
structure.remove(2);
const newArr = structure.toArray();
const newList = structure.map((item) => {
  return {
    data: item,
  };
});
const result = structure.search((data) => data === "d");
structure.foreach((item) => {
  console.log("this is the item:", item);
});

let wagon = newList.firstWagon;

while (wagon !== undefined) {
  console.log(wagon.people);
  wagon = wagon.link;
}
console.log("search results", result);
console.log("new array is", newArr);
