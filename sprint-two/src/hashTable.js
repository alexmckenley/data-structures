var HashTable = function(limit){
  this._limit = limit || 8;
  this._items = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, v);
  this._items += 1;

  if( (this._items / this._limit) >= 0.75 ){
    this._limit *= 2;
    var temp = makeLimitedArray(this._limit);
    this._storage.each(function(value, index){
      temp.set(index, value);
    });
    this._storage = temp;
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
  if( (this._items / this._limit) <= 0.25 ){
    this._limit /= 2;
    var temp = makeLimitedArray(this._limit);
    this._storage.each(function(value, index){
      temp.set(index, value);
    });
    this._storage = temp;
  }

};

