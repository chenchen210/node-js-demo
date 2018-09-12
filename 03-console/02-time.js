#!/usr/bin/node

function task(){
  var n=0;
  for(var i=0;i<100;i++){
    for(var j=0;j<100;j++){
      n=n+i*j;
    }
  }
  console.log(n);
}

console.time('TEST');
task();
console.timeEnd('TEST');

