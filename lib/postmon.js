const http   = require('http');
const output = require('./output');

const get = (cep, callback) => {

  let options = {
    hostname: 'api.postmon.com.br',
    path: '/v1/cep/' + cep,
    agent: false
  }

  http.get(options, ( res ) => {
    res.setEncoding('utf8');

    if (res.statusCode !== 200)
      return output.error('CEP inválido ou não encontrado.');

    res.on('data', ( chuck ) => {
      callback( JSON.parse(chuck) );
    });

  }).on('error', (e) => {
    return output.error(`Erro na consulta da API: ${e}`);
  });

};

module.exports = { get };