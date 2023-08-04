import chalk from "chalk";
import validator from "validator";
console.log(chalk.blue.inverse("Hello world!"));
const res = validator.isEmail("foo@bar.com");
console.log(res ? chalk.red.inverse(res) : chalk.green.inverse(res));
