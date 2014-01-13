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
  var i1 = murmurhash3_32_gc(key, "asdffdsa");
  var i2 = murmurhash3_32_gc(key, "this._limit");
  var i3 = murmurhash3_32_gc(key, "jkl;asdf");

  console.log(i1 % this._limit, i2 % this._limit, i3 % this._limit);

  this._storage[i1 % this._limit] = true;
  this._storage[i2 % this._limit] = true;
  this._storage[i3 % this._limit] = true;

  this._actualStorage[key] = value;
};

BloomFilter.prototype.retrieve = function(key){
  var i1 = murmurhash3_32_gc(key, "asdffdsa");
  var i2 = murmurhash3_32_gc(key, "this._limit");
  var i3 = murmurhash3_32_gc(key, "jkl;asdf");

  if (this._storage[i1 % this._limit] && this._storage[i2 % this._limit] && this._storage[i3 % this._limit]){
    return true;
  }
  return false;
};


BloomFilter.prototype._actualRetrieve = function(key){
  return this._actualStorage[key];
};