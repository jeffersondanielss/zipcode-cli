const chalk = require('chalk');

module.exports = {
  info: (e, data) => {
    console.log( chalk.green(`${e}: `) + data[e] );
  },

  header: () => {
    console.log( chalk.blue('\n------------ ZIPCODE ------------\n') );
  },

  footer: () => {
    console.log( '\n' );
  }
}

