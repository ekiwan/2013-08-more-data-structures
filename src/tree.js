var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, makeTree.treeMethods);

  return newTree;
};

makeTree.treeMethods = {};

makeTree.treeMethods.addChild = function(value){
  var newChild = makeTree(value);
  return this.children.push(newChild);
};

makeTree.treeMethods.contains = function(value, result){
  if (this.value === value){
   return true;
  }
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      result = result || this.children[i].contains(value, result);
    }
  }
  return result;
};

//Experimental Code Below!
/*function(value, result){
  //base case
  if (this.value === value){
  return true;
  }
  //work towards the base case
  return _.any(value, function(value){
    this.contains(value,result);
  });
  return false;
};
*/



