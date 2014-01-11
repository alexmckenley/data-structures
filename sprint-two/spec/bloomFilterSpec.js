var assert = chai.assert;

describe("bloomFilter", function() {
  var bf;

  beforeEach(function() {
    bf = new BloomFilter(100000);
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
    var keys = [];
    var retrieveAttempts = 10000;
    var temp;
    for (var i = 1000; i >= 0; i--) {
      temp = Math.random().toString();
      keys.push(temp);
      bf.insert(temp, i);
    }
    //console.log(bf.retrieve(keys[0]));

    var results = [];
    for( i = retrieveAttempts; i >= 0; i-- ){
      results.push(bf.retrieve(Math.random().toString()));
    }
    keys.forEach(function(value){
      results.push(bf.retrieve(value));
    });

    var trues = _.filter(results, function(value){
      if(value){
        return true;  
      }
      return false;
    }).length;
    
    console.log("Found ", trues, " Matches out of ", retrieveAttempts, " attempts.");
    console.log("Actual Positive Rate: ", keys.length/trues * 100);
    console.log("False Positive Rate: ", 100 - (keys.length/trues * 100));
  });



});
