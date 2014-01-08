var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.len = 0; // Hint: set an initial value here

  _.extend(instance, stackMethods);

  return instance;
  };
  
var stackMethods = {
  push: function(value){
    this.storage[this.len] = value;
    this.len += 1;
  },
  pop: function(){
    var temp = this.storage[this.len - 1];
    if( this.len ){
      delete this.storage[this.len - 1];
      this.len -= 1;
      return temp;
    }
  },
  size: function(){
    return this.len;
  }
};