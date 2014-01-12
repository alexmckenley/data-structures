var BloomFilter = function(limit){
  this._limit = limit || 18;
  this._items = 0;
  this._storage = [];
  this._actualStorage = {};

  for (var i = 0; i < 18; i++) {
    this._storage.push(false);
  }
};

BloomFilter.prototype.insert = function(key, value){
  var i1 = getIndexBelowMaxForKey(key, this._limit);
  var i2 = getIndexBelowMaxForKey(key, this._limit);
  var i3 = getIndexBelowMaxForKey(key, this._limit);

  this._storage[i1] = true;
  this._storage[i2] = true;
  this._storage[i3] = true;

  this._actualStorage[key] = value;
};

BloomFilter.prototype.retrieve = function(key){
  var i1 = getIndexBelowMaxForKey(key, this._limit);
  var i2 = getIndexBelowMaxForKey(key, this._limit);
  var i3 = getIndexBelowMaxForKey(key, this._limit);

  if (this._storage[i1] && this._storage[i2] && this._storage[i3]){
    return true;
  }
  return false;
};


BloomFilter.prototype._actualRetrieve = function(key){
  return this._actualStorage[key];
};