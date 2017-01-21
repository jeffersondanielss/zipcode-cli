const chalk = require('chalk');
  
const info = (e, data) => {
  console.log( chalk.green(`${e}: `) + data[e] );
};

const header = () => {
  console.log( chalk.blue('\n------------ ZIPCODE ------------\n') );
};

const footer = () => {
  console.log( '\n' );
};

const error = (msg) => {
  console.error( chalk.red(msg) );
};

module.exports = { info, header, footer, error };