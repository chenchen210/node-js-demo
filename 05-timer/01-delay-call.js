#!usr/bin/node

function Bomb(){
  this.message="bomb";
}
Bomb.prototype.explode=function(){
  console.log(this.message);
}
var b=new Bomb();
var timer=global.setTimeout(b.explode.bind(b),2000);

global.clearTimeout(timer);

