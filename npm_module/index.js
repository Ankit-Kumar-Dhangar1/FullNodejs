const chalk = require("chalk");
const validator = require('validator');

console.log(chalk.blue.inverse('hii'));


const res=chalk.green.inverse.whiteBright(validator.isEmail("ankit@ghas.com"));
console.log(res);
