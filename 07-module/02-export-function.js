#!/usr/bin/node

function circle(r){
  return {
    area:function(){return Math.PI*r*r;},
    circumference:function(){return 2*Math.PI*r;}
  }
}
module.exports=circle;
