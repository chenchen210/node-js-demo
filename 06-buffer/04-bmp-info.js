#!usr/bin/node

const fs=require('fs');
const filename=process.argv[2];

if(process.argv.length!=3){
  console.log('请输入正确命令行格式：cmd+file_name');
  process.exit(1);
}

try{
  var buf=fs.readFileSync(filename);
}catch(e){
 console.error(e);
 process.exit(2);
}

if(buf.toString('ascii',0,2)=='BM'){
  console.log('BMP file width:',buf.readUInt32LE(18));
  console.log('BMP file height:',buf.readUInt32LE(22));
  console.log('BMP file color deapth:',buf.readUInt16LE(38));
}
