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

makeTree.treeMethods.contains = function(value){
  var result = false;
  var i = 0;
  for (var current = this; current.children !== undefined; current = current.children){
    console.log('loopin');
    if (current.value === value){
      result = true;
    }
    this.children[i].contains(value);
    i++;
  }
  return result;
};

