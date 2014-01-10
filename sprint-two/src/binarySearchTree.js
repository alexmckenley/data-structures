var makeBinarySearchTree = function(value){
  var bst = {};
  bst.left = null;
  bst.value = value;
  bst.right = null;
  _.extend(bst, bstMethods);

  return bst;
};

var bstMethods = {
  insert: function(value){
    if( value === this.value ){
      return;
    }
    if( value < this.value ){
      if (!this.left){
        this.left = makeBinarySearchTree(value);
        return;
      }
      this.left.insert(value);
    } else {
      if (!this.right){
        this.right = makeBinarySearchTree(value);
        return;
      }
      this.right.insert(value);
    }
  },
  depthFirstLog: function(func){
    func(this.value);
    if (this.left){
      this.left.depthFirstLog(func);
    }
    if (this.right){
      this.right.depthFirstLog(func);
    }
  },
  contains: function(value){
    if(this.value === value){
      return true;
    }
    if (value > this.value){
      if (!this.right){
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      if (!this.left){
        return false;
      } else {
        return this.left.contains(value);
      }
    }
  },
  breadthFirstLog: function(queue){
    queue = queue || new Queue();
    this.left && queue.enqueue(this.left);
    this.right && queue.enqueue(this.right);
    console.log(this.value);
    var node = queue.dequeue();
    node && node.breadthFirstLog(queue);
  }
};

