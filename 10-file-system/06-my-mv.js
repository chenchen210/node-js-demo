#!/usr/bin/node

const fs=require('fs'),
      join=require('path').join,
      src=process.argv[2];

if(typeof(src) == 'undefined'){
  console.log('请指定要删除的目录名或文件！');
  process.exit(1);
}

if(!fs.existsSync(src)){
  console.error('%s is not exits',src);
  process.exit(2);
}
if(fs.statSync(src).isFile()) fs.unlinkSync(src);
if(fs.statSync(src).isDirectory()) deleteDir(src);

function deleteDir(folder){
  var files=fs.readdirSync(folder);
  for(var i=0;i<files.length;i++){
    var file=join(folder,files[i]);
    if(fs.statSync(file).isFile()){
      fs.unlinkSync(file);
      continue;
    }
    if(fs.statSync(file).isDirectory())
      deleteDir(file);
  }
  fs.rmdirSync(folder);
}
