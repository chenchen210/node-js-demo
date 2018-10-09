#!/usr/bin/node

const Transform=require('stream').Transform;

process.stdin.setEncoding('utf8');
var tf=new Transform();

tf._transform=function(chunk,encode,callback){
  this.push(Buffer(chunk.toString('utf8').toUpperCase()));
  callback;
}

(process.stdin).pipe(tf).pipe(process.stdout);

