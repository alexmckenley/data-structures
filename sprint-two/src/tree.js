var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = makeTree(value);
  newChild.parent = this;
  this.children.push(newChild);
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

treeMethods.removeFromParent = function(){
  var result = this;
  if( this.parent === null ){
    return result;
  }
  var index = this.parent.children.indexOf(this);
  this.parent.children.splice(index, 1);
  return result.value;

};
