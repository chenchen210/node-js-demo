#!usr/bin/node

var person={};
var arr=['name','email','qq','phone'];
var i=0;
console.log(arr[i]+":");
process.stdin.on('data',(data)=>{
    //console.log(arr[++i]+":");
    person[arr[i]]=data.slice(0,data.length-1).toString();
    if(i>=3){
      console.log(person);
      process.exit();
    }else{
      console.log(arr[++i]+":");
    }

});
