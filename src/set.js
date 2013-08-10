var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(value){
  this._storage[value] = true;
};

setPrototype.contains = function(value){
  var result = false;
  if (this._storage[value]){
    result = true;
  }
  return result;
};

setPrototype.remove = function(value){
  delete this._storage[value];

};
