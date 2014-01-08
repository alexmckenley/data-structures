var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  instance.push = function(value){
    storage[size] = value;
    size += 1;
  };

  instance.pop = function(){
    var temp = storage[size - 1];
    if( size ){
      delete storage[size - 1];
      size -= 1;
      return temp;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
  };