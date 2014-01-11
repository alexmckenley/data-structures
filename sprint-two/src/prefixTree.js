var PrefixTree = function(value, rank, isWord){
  this._children = {};
  this._rank = rank || null;
  this._isWord = isWord || false;
  this._value = value || "";

  //load elements as a test

};

PrefixTree.prototype.insert = function(word, rank){
  word = word.split("");
  var count = 0;
  var wordCount = word.length;

  var recurse = function(startNode){
    if(count === word.length){
      return;
    }
    if (rank < startNode._rank){
        startNode._rank = rank;
      }
    if(!startNode._children[word[count]]){
      var isWord = word.length - 1 === count;
      startNode._children[word[count]] = new PrefixTree(word[count], rank, isWord);
      count += 1;
      recurse(startNode._children[word[count-1]]);
    } else {
      count += 1;
      recurse(startNode._children[word[count-1]]);
    }
  };

  recurse(this);
};