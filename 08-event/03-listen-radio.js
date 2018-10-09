#!/usr/bin/node

const Radio=require('./03-radio.js');

const station={
  freq:'11.1',
  name:'ab'
}

var radio=new Radio(station);

radio.on('open',(station)=>{
  console.log("频率为%s的%s电台开启",station.freq,station.name);
});

radio.on('stop',(station)=>{
  console.log("频率为%s的%s电台关闭",station.freq,station.name);
});
