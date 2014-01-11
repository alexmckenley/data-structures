var fs = require('fs');
var input;
input = fs.readFileSync("words.txt", 'utf8').toString().split(/[ \t\n\r\v]+/);
var rank = [];
var word = [];
input.forEach(function(value, index){
  if(index % 2 === 0){
    rank.push(value);
  } else {
    word.push(value);
  }
});
var result = {};
word.forEach(function(val, index){
  val = val.replace(/["']/g,"");
  val = val.toLowerCase();
  result[val] = +rank[index];
});


fs.writeFileSync("words.json", JSON.stringify(result));
