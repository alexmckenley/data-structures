var makeQueue = function(){
  //var instance = {};


  var instance = Object.create(queueMethods);
  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.sizeOf = 0;

  // // Implement the methods below
  // _.extend(instance, queueMethods);



  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
    this.storage[this.sizeOf] = value;
    this.sizeOf ++;
  };

  queueMethods.dequeue = function(){
    var result;
    if (this.sizeOf > 0){
      result = this.storage[0];
      for (var i = 1; i < this.sizeOf + 1; i ++){
        this.storage[i - 1] = this.storage[i];
      }
      delete this.storage[this.sizeOf - 1];
      this.sizeOf --;
    }
    return result;
  };

  queueMethods.size = function(){
    return this.sizeOf;
  };