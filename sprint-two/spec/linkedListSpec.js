var expect = chai.expect;
var assert = chai.assert;

describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(linkedList).to.have.property('head')
    expect(linkedList).to.have.property('tail')
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it("should designate a new tail when new nodes are added", function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it("should remove the head from the list when removeHead is called", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    // console.log(linkedList)
    linkedList.removeHead();
        //console.log(linkedList) 
    expect(linkedList.head.value).to.equal(5);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    assert.isTrue(linkedList.contains(4));
    assert.isTrue(linkedList.contains(5));
    assert.isFalse(linkedList.contains(6));
  });

  it("should not contain a value that was removed", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    assert.isFalse(linkedList.contains(4));
  });

  // add more tests here to test the functionality of linkedList
  it("should not break when lopping off too many heads", function(){
    linkedList.addToTail(4);
    linkedList.removeHead();
    linkedList.removeHead();
    linkedList.removeHead();
    linkedList.removeHead();
    linkedList.removeHead();
    assert.isFalse(linkedList.contains(4));
  });

  it("expects head and tail to equal null with an empty list", function(){
    linkedList.addToTail(5);
    linkedList.removeHead();
    assert.isTrue(linkedList.head === null);
    assert.isTrue(linkedList.tail === null);
  });

  it("should reference the previous node correctly", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.prev.value).to.equal(4);
  });

  it("should set the new head's previous pointer to null", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(8);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.head.prev).to.equal(null);
  });

  it("should add a new node at the head and make sure head === tail under single item list condition", function(){
    linkedList.addToHead(3);
    expect(linkedList.head.value).to.equal(3);
    assert.isTrue(linkedList.tail === linkedList.head);
  });

  it("should add to head without changing tail", function(){
    linkedList.addToHead(1);
    linkedList.addToHead(2);
    linkedList.addToHead(3);
    expect(linkedList.head.value).to.equal(3);
    expect(linkedList.tail.value).to.equal(1);
    expect(linkedList.head.next.value).to.equal(2);
  })

  it("should remove the tail", function(){
    linkedList.addToHead(1);
    linkedList.addToHead(2);
    linkedList.addToHead(3);
    expect(linkedList.removeTail()).to.equal(1);
    expect(linkedList.tail.value).to.equal(2);
  });
});
