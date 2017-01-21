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
  // output.header();

  getKeys(data)
    .forEach( current => callOption(current, data) );

  // output.footer();
};

const all = (data) => {
  getKeys(data)
    .forEach( current => output.info(current, data) );
};

module.exports = { searchArgs, all };