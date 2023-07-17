const { openSync } = require('fs');
const os = require('os');

const kk=os.arch();
console.log(kk);
const ksk=os.freemem();
console.log(`${ksk/1024/1024/1024}`);
const totalMemory=os.totalmem();
console.log(totalMemory);
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());