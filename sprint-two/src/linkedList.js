var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    if (list.head === null){
      list.head = makeNode(value);
      list.tail = list.head;
    } else {
      list.head.prev = makeNode(value);
      list.head.prev.next = list.head;
      list.head = list.head.prev;
    }
  };

  list.removeTail = function(){
    if(!list.head){
      return;
    }
    var result = list.tail.value;
    if (list.head === list.tail){
      list.head = null;
      list.tail = null;
    } else {
      list.tail = list.tail.prev;
      list.tail.next = null;
    }
    return result;
  };

  list.addToTail = function(value){
      if (list.head === null){
        list.tail = makeNode(value);
        list.head = list.tail;
      } else {
        list.tail.next = makeNode(value);
        list.tail.next.prev = list.tail;
        list.tail = list.tail.next;
      }
  };

  list.removeHead = function(){
    if (!list.head){
      return;
    }
    var result = list.head.value;
    list.head = list.head.next;
    if (list.head === null){
      list.tail = null;
    } else {
      list.head.prev = null;
    }
    return result;
  };

  list.contains = function(target, node){
    if (list.head === null){
      return false;
    }
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
  node.prev = null;

  return node;
};
