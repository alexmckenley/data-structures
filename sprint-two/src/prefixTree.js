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

PrefixTree.prototype.predict = function(word){
  word = word.split("");
  var count = 0;
  var result = null;

  var recurse = function(startNode){
    if(!startNode){
      return result;
    }
    if(count >= word.length){
      if(startNode._isWord){
        result = word.join("");
      } else {
        var rank = startNode._rank;
        for (var key in startNode._children){
          if (startNode._children[key]._rank === rank){
            word.push(key);
            count += 1;
            recurse(startNode._children[key]);
          }
        }
      }
    } else{
      count += 1;
      recurse(startNode._children[word[count - 1]]);
    }
  };

  recurse(this);
  return result;
};