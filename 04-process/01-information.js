console.log(`This processer architecture is ${process.arch}`);
console.log(`This platform is ${process.platform}`);

console.log(`This process is pid ${process.pid}`);
console.log(`This execPath is ${process.execPath}`);

console.log('node version:',process.version);
console.log('user.id:',process.getuid());
console.log('group.id:',process.getgid());
console.log('cwd:',process.cwd());

console.log('rss:',process.memoryUsage().rss);
console.log('heapTotal:',process.memoryUsage().heapTotal);
console.log('heapUsed:',process.memoryUsage().heapUsed);
console.log('external:',process.memoryUsage().external);

console.log('env:',process.env);
console.log('host name:',process.env.HOSTNAME);
