const chalk = require('chalk');

module.exports.all = (data) => {
  console.log( chalk.blue('\n------------ ZIPCODE ------------\n') );
  console.log( chalk.green('Endereço : ') + data.logradouro );
  console.log( chalk.green('Bairro   : ') + data.bairro );
  console.log( chalk.green('Cidade   : ') + data.cidade );
  console.log( chalk.green('Estado   : ') + data.estado );
  console.log( '\n' );
}

module.exports.address = (data) => {
  console.log( chalk.blue('\n------------ ZIPCODE ------------\n') );
  console.log( data );
  // console.log( chalk.green('Endereço : ') + data.logradouro );
  console.log( '\n' );
}