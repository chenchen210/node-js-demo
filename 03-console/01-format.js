#!/usr/bin/node

const usr={
  name:'amy',
  age:12,
  qq:'1486001914'
};
console.log('name:%s',usr.name);
console.log('age:%d',usr.age);
console.log('qq:%j',usr.qq);
console.log(`qq:${usr.qq}`);

console.error('Error:something wrong!');
