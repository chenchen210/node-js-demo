#!/usr/bin/node

const a=process.argv[2];
if(typeof(a)=='undefined'){
  console.log('请输入命令行参数！');
  process.exit(1);
}
else if(isNaN(a)){
  console.log('请输入数值类型！');
  process.exit(1);
}else{
  process.exit(a);
}

