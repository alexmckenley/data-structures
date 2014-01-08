var Stack = function(){
  // Use an object with numeric keys to store values
  this.storage = {};
  this.sizeOf = 0; // Hint: set an initial value here

};


Stack.prototype.push = function(value){
  this.storage[this.sizeOf] = value;
  this.sizeOf += 1;
};

Stack.prototype.pop = function(){
  var result;
  if (this.sizeOf > 0){
    result = this.storage[this.sizeOf - 1];
    delete this.storage[this.sizeOf - 1];
    this.sizeOf --;
  }
  return result;
};

Stack.prototype.size = function(){
  return this.sizeOf;
};