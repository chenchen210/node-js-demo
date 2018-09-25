#!usr/bin/node

var sign=process.argv[2];
var pid=process.argv[3];
if(process.argv.length!==4||isNaN(Number(pid))){
  console.log("命令行参数输入错误！");
  process.exit(1);
}
process.kill(pid,sign);
