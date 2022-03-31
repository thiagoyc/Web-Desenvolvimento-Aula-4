import express from 'express';

const server = express();

server.get('/', (request, response) => {
  console.log('Hello web');

  response.send('Hello Client');
});

server.get('/Exercicio', (request, response) => {
  console.log('Hello web');

  response.send(index.html);
});

server.listen(3000, () =>{
  console.log('Estou pronto');
});