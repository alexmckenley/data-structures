var assert = chai.assert;

describe("bloomFilter", function() {
  var bf;

  beforeEach(function() {
    bf = new BloomFilter(24);
  });

  it("should accept values", function() {
    expect(bf.insert).to.be.a('function');
  });

  it("should return true if actually stored", function(){
    bf.insert("hello", "world");
    assert.isTrue(bf.retrieve("hello"));
    expect(bf._actualRetrieve("hello")).to.equal("world");
  });

  it("add items, retrieve items and log the stats", function(){
    var numberOfKeys = 5;
    var retrieveAttempts = 10000;
    var temp = [];
    var words = JSON.parse($('#words').html());

    for (var key in words){
      temp.push(key);
    }

    for (var i = 0; i < numberOfKeys; i += 1) {
      bf.insert(temp[i], i);
    }

    var results = [];
    for( i = retrieveAttempts; i >= 0; i-- ){
      results.push(bf.retrieve(Math.random().toString()));
    }

    var trues = _.filter(results, function(value){
      if(value){
        return true;  
      }
      return false;
    }).length;
    
    console.log("Found ", trues, " false matches out of ", retrieveAttempts, " attempts.");
    console.log("False Positive Rate: ", (trues/retrieveAttempts * 100).toFixed(2), "%");
  });



});
