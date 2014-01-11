var assert = chai.assert; 

describe("prefixTree", function() {
  var prefixTree;

  beforeEach(function() {
    pt = new PrefixTree();
    var words = JSON.parse($('#words').html());
    //insert words into tree
    // console.log(words);
    for (var key in words){
      pt.insert(key, words[key]);
    }

    // _.each(words, function(v, k, obj){
    //   debugger;
    //   pt.insert(obj[k], k);
    // });
  });

  it("should have a method named 'insert'", function() {
    expect(pt.insert).to.be.a('function');
  });

  it("should retreive the best prediction given a string", function(){
    // console.log(pt.predict("hel"));
    // console.log(pt.predict("a"));
    // console.log(pt.predict("b"));
    // console.log(pt.predict("t"));
    expect(pt.predict("th")).to.equal("the");

  });
  
});
