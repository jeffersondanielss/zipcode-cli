const output  = require('./output');
const program = require('commander');
var validOption = 0;

const getKeys = (json) => {
  return Object.keys(json).map( key => key );
};

const callOption = ( option, data ) => {
  if( program[option] ) {
    output.info(option, data);
    validOption = 1
  }
};

const searchArgs = (data) => {
  getKeys(data)
    .forEach( current => callOption(current, data) );
  
    if( !validOption ) program.help();
};

const all = (data) => {
  getKeys(data)
    .forEach( current => output.info(current, data) );
};

module.exports = { searchArgs, all };