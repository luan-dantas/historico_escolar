const http = require('http');

// Dados do aluno
const nome = 'John Doe';
const matricula = '12345';

// URL do servidor do webservice
const url = `http://localhost:3000/historico?nome=${nome}&matricula=${matricula}`;

// Enviar requisição para o servidor
http.get(url, res => {
    let rawData = '';
    res.on('data', chunk => {
      rawData += chunk;
    });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData.historico);
        console.log(parsedData.coeficiente);
      } catch (e) {
        console.error(e.message);
      }
    });
});