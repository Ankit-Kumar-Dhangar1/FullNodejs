// const mera_naam=require("./operator.js");
// console.log(mera_naam);
// console.log(add(5,7));


// first method
const operator=require("./operator.js");

console.log(operator);

console.log(operator.add(5,7));
console.log(operator.sub(5,7));
console.log(operator.name);


// second method
const {add,sub,mul,name}=require("./operator.js");

console.log(operator);

console.log(add(5,7));
console.log(sub(5,7));
console.log(mul(5,7));
console.log(name);

