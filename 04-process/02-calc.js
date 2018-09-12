#!/usr/bin/node

const arg=process.argv[2];
if(arg==='undefined'||arg==='--help'||arg==='-h'){
  console.log(instruction());
}else{
  console.log(arg+'=%s',eval(arg));
}

function instruction(){
  var a=''+'usage:cmd-name [OPTION] [expression]\n'+'evaluate the expression.\n'+'\n'+'Mandatory arguments to long options are mandatory for short options too.\n'+'-h,--help output help information and exit.\n'
  console.log(a);
}
