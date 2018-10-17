#!/usr/bin/node

const fs=require('fs');

var file=process.argv[2]||__filename;
try{
  console.log(file.readFileSync(file).toString('utf8'));
}catch(err){
    console.error(err.message,err.name);
    process.exit(10);
  }

