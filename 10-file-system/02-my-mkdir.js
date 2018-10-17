#!/usr/bin/node

const fs=require('fs'),
      dir=process.argv[2];

if(typeof(dir) == 'undefined'){
  console.log("没有目录名称！");
  process.exit(1);
}
fs.mkdirSync(dir);
