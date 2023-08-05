import chalk from "chalk";
import validator from "validator";
console.log(chalk.blue.inverse("Hello world!"));
const res = validator.isEmail("foo@bar.m");
console.log(res ? chalk.white.inverse(res) : chalk.blue.inverse(res));
