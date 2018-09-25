#!usr/bin/node

var buf1=new Buffer(256);
buf1[0]=25;
console.log("buffer length:",buf1.length);
console.log("buffer content:",buf1);

for(var i=0;i<256;i++){
  buf1[i]=i;
}
console.log("\nbuf1 content:",buf1);

var buf2=buf1.slice(246,256);
console.log("buf2 content:",buf2);
console.log("buf2 length:",buf2.length);

buf2.fill(0);
console.log("buf2 content:",buf2);

var arr=['a',12,'d',45,1];
var buf3=new Buffer(arr);
console.log("buf3 content:",buf3);
console.log("buf3 length:",buf3.length);

var buf4=new Buffer("hello world",'utf8');
console.log("buf4 content:",buf4);

buf4.copy(buf3);
console.log("buf3 after copy",buf3);

