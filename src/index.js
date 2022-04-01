import express from 'express';

const PORT = 3000;

const server = express();

server.use(express.json());

server.post('/echo', (req, res) => {
  res.json("Nice");

  console.log("O usuário é:", req.body.usuario);
  console.log("A senha dele é:", req.body.senha);
});

server.get('/', (request, response) => {
  console.log('Hello web');

  const meuObj = {
    status: "ok",
    data: {
      username: "Thygas",
      age: 28,
    },
  };

  response.json(meuObj);
});

server.get('/Exercicio', (request, response) => {
  console.log('Hello web');

  response.send('<p> <html><head><title> Exercicio </title><style>button {border-color: red;border-width: 1px;border-radius: 10px;background-color: tomato;font-weight: bold;padding: 10px 15px;}button:hover {background-color: aqua;}</style></head><body><div><h1> meu texto bonito </h1><h2> meu texto bonito </h2><h3> meu texto bonito </h3><h4> meu texto bonito </h4><h5> meu texto bonito </h5><p>paragrafo 1</p><p>paragrafo 2</p></div><div><form><input /><input /><input /><input /><button> Meu botão </button></form></div><script>console.log("hello web");</script></body> </p>');
});

server.listen(PORT, () =>{
  console.log(`Listening on ${PORT}`);
});