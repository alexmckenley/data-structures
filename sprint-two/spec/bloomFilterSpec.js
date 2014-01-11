var assert = chai.assert;

describe("bloomFilter", function() {
  var bf;

  beforeEach(function() {
    bf = new BloomFilter();
  });

  it("should accept values", function() {
    expect(bf.insert).to.be.a('function');
  });

  it("should return true if actually stored", function(){
    bf.insert("hello", "world");
    assert.isTrue(bf.retrieve("hello"));
    expect(bf._actualRetrieve("hello")).to.equal("world");
  });



});
