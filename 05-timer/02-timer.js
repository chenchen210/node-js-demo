#!usr/bin/node

console.log("aaa");
var i=0;
/*setTimeout(()=>{
  console.log("over");
},2000);*/

var timer1=setInterval(function(){
  i++;
  console.log(i)
  if(i>5){
    global.clearInterval(timer1);
  }
},500);

