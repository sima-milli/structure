const Train = require("../datastructure/linkList");
const {expect} = require('chai');

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

  it("should pop ")
});


