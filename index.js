#!/usr/bin/env node

'use strict';

const program = require('commander');
const postmon  = require('./lib/postmon');
const options  = require('./lib/options');

program
  .usage('<cep> --option')
  .version('Versão: 1.0.0')
  .option('-l, --logradouro', 'Mostrar apenas a logradouro')
  .option('-c, --cidade', 'Mostrar apenas a cidade')
  .option('-e, --estado', 'Mostrar apenas o estado')
  .option('-b, --bairro', 'Mostrar apenas o bairro')
  .option('-lce', 'Combinação de parametros')

program
  .action((code) => {
    postmon.get(code, options.response);
  });

program.parse(process.argv);

if (!program.args.length)
  program.help();