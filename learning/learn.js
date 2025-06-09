const os = require("os");

console.log("platform", os.platform());
console.log("platform", os.totalmem() / (1024 * 1024));
