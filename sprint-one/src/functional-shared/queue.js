var makeQueue = function(){
  var instance = {};
  instance.storage = {};
  instance.len = 0;

  _.extend(instance, queueMethods);

  return instance;
};


var queueMethods = {
  enqueue: function(value){
    this.storage[this.len] = value;
    this.len += 1; 
  },

  dequeue: function(){
    if( this.len ){
      var that = this;
      var temp = this.storage[0];
      //debugger;
      _.each(this.storage, function(value, key){
        if(+key){
          that.storage[key - 1] = that.storage[key];
        }
      });
      delete this.storage[this.len - 1];
      this.len -= 1;
      return temp;
    }
  },
  size: function(){
    return this.len;
  }

};
