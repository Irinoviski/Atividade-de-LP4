// importando os módulos
const https = require('http');

// configuraçao pra acessar o server
const localhost = '127.0.0.1';
const port = 5000;

// configuraçao do server
const server = https.createServer((req, res) => {

  //url que vai ser inserida pelo usuario
  let url = req.url;
  if (url == '/') {

    res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });

    // página principal
    res.write('<h2>Você está na página principal</h2>');
    res.end();

  } else if (url == '/professores') {

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // página professores
    res.write('<h4>você está na página professores</h4>')

    res.end();

  } else if (url == '/estudantes') {

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // página estudantes
    res.write('<h4>você está na página de estudantes</h4>')

    res.end();

  } else {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    res.write('essa página não existe - erro 404');

    res.end();
  }
});
// msg que avisa se o server tá funcionando
server.listen(port, localhost, console.log('O server está funcionando'))