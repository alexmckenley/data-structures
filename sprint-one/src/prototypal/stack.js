var makeStack = function(){
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.sizeOf = 0; // Hint: set an initial value here

  // Implement the methods below

  
  return instance;
};
  
var stackMethods = {};

 stackMethods.push = function(value){
    this.storage[this.sizeOf] = value;
    this.sizeOf += 1;
  };

  stackMethods.pop = function(){
    var result;
    if (this.sizeOf > 0){
      result = this.storage[this.sizeOf - 1];
      delete this.storage[this.sizeOf - 1];
      this.sizeOf --;
    }
    return result;
  };

  stackMethods.size = function(){
    return this.sizeOf;
  };