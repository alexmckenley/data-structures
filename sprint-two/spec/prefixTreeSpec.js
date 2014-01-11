var assert = chai.assert; 

describe("prefixTree", function() {
  var prefixTree;

  beforeEach(function() {
    pt = new PrefixTree();
  });

  it("should have a method named 'insert'", function() {
    expect(pt.insert).to.be.a('function');
  });
  
});
