#!usr/bin/node

const str=process.argv[2];

var buf=new Buffer(str,'base64');
var namePwd=buf.toString('utf8');
var data=namePwd.split(":");

if(process.argv.length<=2){
  console.log('请输入正确格式！');
}
console.log('usr name:%s\npassword:%s',data[0],data[1]);
