const output  = require('./output');
const program = require('commander');

function getKeys(data) {
  return Object.keys(data).map( key => key );
}

function callOption( e, data ) {
  if( program[e] )
    output.info(e, data);
}

function callAll(e, data) {
  output.info(e, data);
}

module.exports = {
  searchArgs: (data) => {
    // output.header();

    getKeys(data)
      .forEach( e => callOption(e, data) );

    // output.footer();
  },

  all: (data) => {
    getKeys(data)
      .forEach( e => callAll(e, data) );
  }
}