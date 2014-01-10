var HashTable = function(limit){
  this._limit = limit || 8;
  this._items = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(_.isEmpty(this._storage.get(i)) || !this._storage.get) {
    var obj = {};
    obj[k] = v;
    this._storage.set(i, obj);
  } else {
    this._storage.get(i)[k] = v;
  }
  this._items += 1;


  if( (this._items / this._limit) > 0.75 ){
    var that = this;
    this._limit *= 2;
    var temp = makeLimitedArray(this._limit);
    var tempPairs = {};
    this._storage.each(function(element, index){
      _.each(element, function(value, key){
         //temp.set(getIndexBelowMaxForKey(key, that._limit), value);
         tempPairs[key] = value;
      });
    });
    this._storage = temp;
    this._items = 0;
    _.each(tempPairs, function(value, key){
      that.insert(key, value);
    });
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)){
    return this._storage.get(i)[k];
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)){
    delete this._storage.get(i)[k];

  }
  this._items -= 1;

  if( this._items > 0 && (this._items / this._limit) < 0.25 ){
    var that = this;
    this._limit /= 2;
    var temp = makeLimitedArray(this._limit);
    var tempPairs = {};
    this._storage.each(function(element, index){
      _.each(element, function(value, key){
         //temp.set(getIndexBelowMaxForKey(key, that._limit), value);
         tempPairs[key] = value;
      });
    });
    this._storage = temp;
    this._items = 0;
    _.each(tempPairs, function(value, key){
      that.insert(key, value);
    });
  }


  // if( (this._items / this._limit) <= 0.25 ){
  //   this._limit /= 2;
  //   var temp = makeLimitedArray(this._limit);
  //   this._storage.each(function(value, index){
  //     temp.set(index, value);
  //   });
  //   this._storage = temp;
  // }

};

