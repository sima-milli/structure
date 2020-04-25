const Stack = require("./datastructure/stack");

const LinkedList = require("./datastructure/linkList");

// const structure = new LinkedList(5);

// structure.add(9);
// structure.add(34);
// structure.add("a");
// structure.add("b");
// structure.add("d");
// structure.add(1);
// structure.remove(0);
// structure.searchIndex(0);
// const newArr = structure.toArray();
// const newList = structure.map((item) => {
//   return {
//     data: item,
//   };
// });
// structure.pop();
// const result = structure.search((data) => data === "d");
// structure.foreach((item) => {
//   console.log("this is the item:", item);
// });

// let wagon = newList.firstWagon;

// while (wagon !== undefined) {
//   console.log(wagon.people);
//   wagon = wagon.link;
// }
// console.log("search results", result);
// console.log("new array is", newArr);

module.exports = { LinkedList, Stack };
