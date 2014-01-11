var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  this.nodes[newNode] = {};
  this.nodes[newNode].edges = [];
  if (_.keys(this.nodes).length === 2){
    this.addEdge(newNode, _.keys(this.nodes)[0]);
  }
  if (toNode){
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  return Boolean(this.nodes[node]);
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return _.contains(this.nodes[fromNode].edges, toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var index = this.nodes[fromNode].edges.indexOf(toNode);
  if(index !== -1){
    this.nodes[fromNode].edges.splice(index, 1);
  }
  index = this.nodes[toNode].edges.indexOf(fromNode);
  if(index !== -1){
    this.nodes[toNode].edges.splice(index, 1);
  }
  if (this.nodes[fromNode].edges.length === 0){
    this.removeNode(fromNode);
  }
  if (this.nodes[toNode].edges.length === 0){
    this.removeNode(toNode);
  }
};
