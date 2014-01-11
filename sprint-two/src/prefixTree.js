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

PrefixTree.prototype.tNine = function(digits){
  var numberMap = {
    "1": [],
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
    "0": []
  };
  digits = digits.toString().split("");
  var words = [];
  var set = [];
  var temp;
  //console.log(digits);

  var recurse = function(arr){
    var temp = [];
    numberMap[arr[arr.length - 2]].forEach(function(v){
      arr[arr.length - 1].forEach(function(value){
        temp.push(v + value);
      });
    });
    return temp;
  };

  //change the last element of the array to letters
  digits[digits.length - 1] = numberMap[digits[digits.length - 1]];

  //while the length is greater than or equal to 2, recurse 
  while(digits.length >= 2){
    temp = recurse(digits);
    digits.splice(digits.length - 2, 2, temp);
  }

  return digits ;
};