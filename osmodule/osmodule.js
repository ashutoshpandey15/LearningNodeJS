const os = require("os");
console.log(os.arch());

const freemem = os.freemem();
console.log(`${freemem}`);
