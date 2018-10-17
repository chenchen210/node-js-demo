#!/usr/bin/node

const fs=require('fs'),
      src=process.argv[2];

if(typeof(src)=='undefined' || process.argv.length!=3){
  console.log('命令行参数不正确！');
  process.exit(1);
}

try{
  console.log(src,'->',fs.readlinkSync(src));
}catch(err){
  console.log(err.message);
  process.exit(2);
}

