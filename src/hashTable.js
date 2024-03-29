var HashTable = function(){
  this._limit = 1;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var collisions = this._storage.get(i) || [];
  var pair;
  if(collisions.length === 0){
    this._storage.set(i, v);
  }
  pair = [k, v];
  collisions.push(pair);
  //console.log(pair);
  this._storage.set(i, collisions);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //return this._storage.get(i); old code before collision handling
  var collisions = this._storage.get(i) || [];
  var pair = [];
    _(collisions).each(function(item){
    console.log(item);
    if (item[0] === k) {
      pair = item;
    }
  });
  return pair[1];

//old code that used a for loop before _.each refactor
/*  for (var j = 0; j < collisions.length; j++) {
    if(collisions[j][0] === k) {
      pair = collisions[j];
    }
  }
  return pair[1];*/
};

HashTable.prototype.remove = function(){
};



// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
