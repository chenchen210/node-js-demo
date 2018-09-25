#!usr/bin/node

const fs=require('fs');
const width=16,
      height=16;
var p=width*height*4;
var tot=p+54;

var buf=new Buffer(tot);
buf.fill(0);

//head
buf.write('BM');
buf.writeUInt32LE(tot,0x02);
buf.writeUInt32LE(54,0x0a);
buf.writeUInt32LE(40,0x0e);
buf.writeUInt16LE(1,0x1a);
buf.writeUInt16LE(32,0x1c);
buf.writeUInt32LE(p,0x22);
buf.writeUInt32LE(width,0x12);
buf.writeUInt32LE(height,0x16);

//data
for(var i=54;i<tot;i+=4){
  buf.writeUInt32LE(0xffff0000,i);
}
fs.writeFile('./out.bmp',buf,(err)=>{
  if(err!=null){
    console.error(err);
    process.exit(1);
  }
});



