// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
      if (list.head === null){
        list.head = list.tail = newNode;
        //list.head.next = null;
      }else{
         list.head.next = newNode;
         list.tail = newNode;
      }
  };

  list.removeHead = function(){
  };

  list.contains = function(value){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

