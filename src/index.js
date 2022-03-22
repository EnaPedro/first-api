const express = require('express');
const app = express();

app.use(express.json());

/**
 * GET -> Listar/Retornar dados
 * POST -> Criar um registro
 * PUT -> Edição de registro
 * DELETE -> Deletar registros
 */

/**
 * QUERY PARAMS
 * ROUTE PARAMS
 * REQUEST BODY
 */

app.get('/users', (request, response) => {
  const query = request.query;
  if(!query.nome) {
    return response.status(400).json({message: "O parametro nome é obrgatório"})
  }
  return response.json(query)
});

app.get('/users/:id', (request, response) => {
  const params = request.params;
  if(params.id === '1') {
    return response.json({
      id: 1,
      nome: "XIQUIM",
    })
  } else {
    return response.status(404).json({message: "Usuário nao encontrado"})
  }
})

app.post('/users', (request, response) => {
  const body = request.body;
  if (body.nome === 'cu') {
    return response.status(400).json({ message: "Palavra inadequada no nome do usuário" });
  }
  if (!body.nome) {
    return response.status(422).json({ message: "O Campo nome é obrigatório" });
  }
  return response.status(201).json({
    id: 1,
    name: body.nome,
    message: "User successfully created"
  })
});

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});