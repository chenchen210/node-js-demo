#!/usr/bin/node

const Transform=require('stream').Transform,
      util=require('util'),
      stdin=process.stdin,
      stdout=process.stdout;

stdin.setEncoding('utf8');
function Mytransform(){
  Transform.call(this);
}

Mytransform.prototype._transform=function(chunk,encode,callback){
  this.push('\033[1;32m'+chunk.slice(0,chunk.length-1)+'\033[1;37m');
  callback;
}

util.inherits(Mytransform,Transform);

var Tf=new Mytransform();
(stdin).pipe(Tf).pipe(stdout);
