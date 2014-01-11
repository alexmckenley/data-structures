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
var counter = 1;
var result = {};
word.forEach(function(val, index){
  val = val.replace(/["']/g,"");
  val = val.toLowerCase();
  result[val] = counter++;
});


fs.writeFileSync("words.json", JSON.stringify(result));
