#!/usr/bin/node

const fs=require('fs');

var file=process.argv[2]||__filename;

var fid=fs.openSync(file,'r');
//console.log(fs.readFileSync(fid).toString('utf8'));

fs.writeSync(1,readFileSync(fid).toString('utf8'));
fs.closeSync(fid);
