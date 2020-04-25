/* eslint-disable no-undef */
const Train = require("../datastructure/linkList");
const { expect } = require("chai");

describe("linkList", () => {
  it("should be empty", () => {
    const linkList = new Train();
    expect(linkList.isEmpty()).to.equal(true);
  });

  it("should add to list", () => {
    const linkList = new Train();
    linkList.add(9);
    expect(linkList.firstWagon.people).to.equal(9);
  });

  it("should pop first wagon", () => {
    const linkList = new Train();
    linkList.add("a");
    linkList.pop();
    expect(linkList.firstWagon).to.equal(undefined);
  });

  it("should remove node by index", () => {
    const linkList = new Train();
    linkList.add("d");
    linkList.add(1);
    linkList.remove(0);
    expect(linkList.firstWagon.people).to.equal(1);
  });

  it("should search for wagon and return wagon if it's there", () => {
    const linkList = new Train();
    linkList.add(1);
    const result = linkList.search((data) => data === 1);
    expect(result.people).to.equal(1);
  });

  it("should search list by index and return wagon", () => {
    const linkList = new Train();
    linkList.add("p");
    const result = linkList.searchIndex(0);
    expect(result.people).to.equal("p");
  });

  it("should map nodes and return new linkedlist", () => {
    const linkList = new Train();
    linkList.add(1);
    linkList.add(2);
    const newList = linkList.map((item) => {
      return {
        data: item,
      };
    });
    expect(newList.firstWagon.people.data).to.equal(1);
  });
});
