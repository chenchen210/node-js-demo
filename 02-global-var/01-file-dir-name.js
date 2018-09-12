#!usr/bin/node

console.log('file name:',__filename);
console.log('dir name:',__dirname);  

//method 1
var filename=__dirname+'/views/view.html';
console.log('filename',filename);

//method 2
var filename=__dirname+'/views/view.html';
switch(process.platform){
  case 'linux':
      filename=__dirname+'/views/view.html';
      break;
  case 'win32':
      filename=__dirname+'\\views\\view.html';
      break;
  default:
      filename='error message';
}
console.log('filename',filename);

//method 3
const path=require('path');
filename=path.join(__dirname,'views','view.html');
console.log('filename',filename);
