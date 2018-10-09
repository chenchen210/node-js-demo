#!/usr/bin/node

const EventEmitter=require('events').EventEmitter;
var emitter=new EventEmitter();

emitter.on('hello',()=>{
  console.log('hello event');
});

emitter.on('hello',()=>{
  console.log('HELLO EVENT');
})
/*上述的hello有多个订阅者*/
emitter.on('bye',()=>{
  console.log('bye event');
  process.exit();
});

global.setInterval(()=>{
  emitter.emit('hello');
},1000);
global.setTimeout(()=>{
  emitter.emit('bye');
},5000);
