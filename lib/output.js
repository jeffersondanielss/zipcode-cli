const chalk = require('chalk');
  
const info = (e, data) => {
  console.log( chalk.green(`${e}: `) + data[e] );
};

const error = (msg) => {
  console.error( chalk.red(msg) );
};

module.exports = { info, error };