#!usr/bin/node

const http=require('http'),
      fs=require('fs');
var filename=process.argv[2];
var buf=fs.readFileSync(filename);

if(process.argv.length!==3){
  console.log('请输入正确格式:');
  process.exit(1);
}
try{
  var data=fs.readFileSync(filename).toString('base64');
}catch(e){
  console.error(e.message);
  process.exit(2);
}
var dataURL='data:image/png;base64,'+buf.toString('base64');
//console.log("dataURL:%s",dataURL);
var html='<!DOCTYPE html><html><head><title>hello world</title></head><body><img src="'+dataURL+'"/></body></html>';

http.createServer((req,res)=>{
  res.end(html);
}).listen(8080);
