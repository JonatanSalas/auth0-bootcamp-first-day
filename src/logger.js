const chalk = require("chalk");

module.exports.log = (str, ...opts) => console.error(chalk.yellow(str), ...opts);
module.exports.info = (str, ...opts) => console.info(chalk.green(str), ...opts);
module.exports.error = (str, ...opts) => console.error(chalk.red(str), ...opts);