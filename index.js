const fs = require('fs');  

// Creating a new file

fs.writeFileSync('read.txt', 'This is ankit');

// fs.writeFileSync('read.txt', read.'i m, always ankit\n');

// fs.appendFileSync('read.txt', 'how r u');




// for reading a file
// reading a file will always provide a buffer

const buf_data=fs.readFileSync('read.txt');
console.log(buf_data);

// converting buffer data to string

org_data=buf_data.toString();
console.log(org_data);

// utf8 directly provide data in string format (i.e.to leave buffer)


// const akk=fs.readFileSync('readWrite.txt','utf8');
// console.log(akk);



// rename the file
fs.renameSync('read.txt', 'readWrite.txt');