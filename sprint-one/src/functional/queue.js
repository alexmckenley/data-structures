var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[size] = value;
    size += 1; 
  };

  instance.dequeue = function(){
    temp = storage[0];
    if( size ){
      _.each(storage, function(value, key){
        if(+key){
          storage[key - 1] = storage[key];
        }
      });
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
