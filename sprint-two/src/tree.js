var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var result = false;
  this.children.forEach(function(value){
    if (value.value === target){
      result = true;
    }
    if(result){
      return true;
    }
    result = value.contains(target);
  });
  return result;
};

