const output  = require('./output');
const program = require('commander');

const getKeys = (json) => {
  return Object.keys(json).map( key => key );
};

const callOption = ( option, data ) => {
  if( program[option] )
    output.info(option, data);
};

const searchArgs = (data) => {
  getKeys(data)
    .forEach( current => callOption(current, data) );
};

const all = (data) => {
  getKeys(data).forEach( (current) => {
    if(typeof data[current] === 'string')
      output.info(current, data)
  });
};

module.exports = { searchArgs, all };