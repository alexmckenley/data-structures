var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
      if (list.head === null){
        list.tail = makeNode(value);
        list.head = list.tail;
      } else {
        list.tail.next = makeNode(value);
        list.tail = list.tail.next;
      }
  };

  list.removeHead = function(){
    var result = list.head;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target, node){
    for( var node in list ){
      if( list[node].value === target ){
        return true;
      }
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
