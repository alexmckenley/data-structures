var Queue = function(){
  this.storage = {};
  this.sizeOf = 0;

};


Queue.prototype.enqueue = function(value){
  this.storage[this.sizeOf] = value;
  this.sizeOf ++;
};

Queue.prototype.dequeue = function(){
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

Queue.prototype.size = function(){
  return this.sizeOf;
};