const http = require('http');

module.exports.get = (cep, callback) => {

  const options = {
    hostname: 'api.postmon.com.br',
    path: '/v1/cep/' + cep,
    agent: false
  }

  http.get(options, ( res ) => {
    res.setEncoding('utf8');
    res.on('data', ( chuck ) => {
      callback( JSON.parse(chuck) );
    });
  });

}