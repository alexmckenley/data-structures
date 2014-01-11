var makeBinarySearchTree = function(value, count){
  var bst = {};
  bst.left = null;
  bst.value = value;
  bst.right = null;
  bst.maxDepth = 1;

  _.extend(bst, bstMethods);

  return bst;
};

var bstMethods = {
  insert: function(value, count){
    count = count || 2;
    if((this.maxDepth / this.minDepth()) > 3){
        this.rebalance();
      }
    if( value === this.value ){
      return;
    }
    if( value < this.value ){
      if (!this.left){
        this.left = makeBinarySearchTree(value);
        return count;
      }
      count += 1;
      count = this.left.insert(value, count);
    } else {
      if (!this.right){
        this.right = makeBinarySearchTree(value);
        return count;
      }
      count += 1;
      count = this.right.insert(value, count);
    }
    if (count > this.maxDepth){
      this.maxDepth = count;
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
  breadthFirstLog: function(func, queue){
    func = func || function(value){console.log(value)};
    func(this.value);
    queue = queue || new Queue();
    this.left && queue.enqueue(this.left);
    this.right && queue.enqueue(this.right);
    var node = queue.dequeue();
    node && node.breadthFirstLog(func, queue);
  },
  minDepth: function(){
    var queue =  new Queue();
    var foundNull = false;
    var count = 0;
    queue.enqueue(this);

    var traverse = function(){
      var node = queue.dequeue();
      count += 1;
      if(node.left){
        queue.enqueue(node.left);
      } else {
        foundNull = true;
      }
      if(node.right){
        queue.enqueue(node.right);
      } else {
        foundNull = true;
      }
      if(foundNull){
        return;
      }
      traverse();
    }
    traverse();
    return count;
  },
  rebalance: function(){
    var that = this;
    var allItems = [];
    this.depthFirstLog(function(value){
      allItems.push(value);
    });
    allItems.sort(function(a, b){
      return a - b;
    });
    var middle = allItems.splice( Math.floor(allItems.length/2), 1 );
    this.value = middle[0];
    this.left = null;
    this.right = null;
    var firstHalf = allItems.splice(0, Math.floor(allItems.length/2));
    

    var insertRecursively = function(arr1, arr2){
      if(arr1.length > 0){
        var middle = arr1.splice( Math.floor(arr1.length/2), 1 );
        that.insert(middle[0]);
        var firstHalfarr1 = arr1.splice(0, Math.floor(arr1.length/2));
        insertRecursively(firstHalfarr1, arr1);
      }
      if(arr2.length > 0){
        var middle2 = arr2.splice( Math.floor(arr2.length/2), 1 );
        that.insert(middle2[0]);
        var firstHalfarr2 = arr2.splice(0, Math.floor(arr2.length/2));
        insertRecursively(firstHalfarr2, arr2);
      }

    };
    insertRecursively(firstHalf, allItems);
  },
  removeAll: function(){

  }
};

