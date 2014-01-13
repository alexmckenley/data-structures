var BloomFilter = function(limit){
  this._limit = limit || 18;
  this._items = 0;
  this._storage = new Uint8Array(new ArrayBuffer(Math.ceil(this._limit/8)));
  this._actualStorage = {};
  //console.log(this._storage.length, limit);
};

BloomFilter.prototype.insert = function(key, value){
  var i1 = murmurhash3_32_gc(key, 123321);
  var i2 = murmurhash3_32_gc(key, 78945641);
  var i3 = murmurhash3_32_gc(key, 123456789);
  var element;

  // console.log("index=", (i1 % this._limit));
  // console.log("element in array=", ((i1 % this._limit)/8) === 1 ? Math.floor((i1 % this._limit)/8) - 1 : Math.floor((i1 % this._limit)/8) );
  // element = ((i1 % this._limit)/8) === 1 ? Math.floor((i1 % this._limit)/8) - 1 : Math.floor((i1 % this._limit)/8);
  // console.log("element value=", this._storage[Math.floor((i1 % this._limit)/8)].toString(2));
  // console.log("or'ing with=", Math.pow(2, ( (i1 % this._limit) - (8 * element )) - 1).toString(2));

  element = Math.floor((i1 % this._limit)/8);
  this._storage[element] = this._storage[element] | Math.pow(2, ( (i1 % this._limit) - (8 * element)) );
  element = Math.floor((i2 % this._limit)/8);
  this._storage[element] = this._storage[element] | Math.pow(2, ( (i2 % this._limit) - (8 * element)) );
  element = Math.floor((i3 % this._limit)/8);
  this._storage[element] = this._storage[element] | Math.pow(2, ( (i3 % this._limit) - (8 * element)) );
  
  this._actualStorage[key] = value;

  //console.log(this._storage[0].toString(2).split("").reverse().join(""), this._storage[1].toString(2).split("").reverse().join(""), this._storage[2].toString(2).split("").reverse().join(""));
};

BloomFilter.prototype.retrieve = function(key){
  var i1 = murmurhash3_32_gc(key, 123321);
  var i2 = murmurhash3_32_gc(key, 78945641);
  var i3 = murmurhash3_32_gc(key, 123456789);

  var element = Math.floor((i1 % this._limit)/8);
  var val1 = this._storage[element] & Math.pow(2, ( (i1 % this._limit) - (8 * element)) - 1 );
  element = Math.floor((i2 % this._limit)/8);
  var val2 = this._storage[element] & Math.pow(2, ( (i2 % this._limit) - (8 * element)) - 1 );
  element = Math.floor((i3 % this._limit)/8);
  var val3 = this._storage[element] & Math.pow(2, ( (i3 % this._limit) - (8 * element)) - 1 );
  //console.log(val1, val2, val3);

  if (val1 && val2 && val3){
    return true;
  }
  return false;
};


BloomFilter.prototype._actualRetrieve = function(key){
  return this._actualStorage[key];
};