const output = require('./output');
const program = require('commander');

module.exports.response = (data) => {
  output.header();

  Object.keys(data).map( (key) => {
    return key;

  }).forEach(( e ) => {
    if( program[e] )
      output.info(e, data);
  });

  output.footer();
};