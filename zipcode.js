#!/usr/bin/env node

'use strict';

const program = require('commander');
const getter  = require('./getter');
const output  = require('./output');

var zc;

program
  .usage('<cep> --option')
  .version('1.0.0')
  .option('-a, --address', 'Show just address')
  .option('-c, --city', 'Show just city')
  .option('-s, --state', 'Show just state')
  .option('-d, --district', 'Show just district')
  .parse(process.argv);

program
  .command('*')
  .action((zc) => {
    getter.postmon(zc, output.all);
  });

program.parse(process.argv);