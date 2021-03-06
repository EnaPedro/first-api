const { response } = require('express');
const express = require('express');
const { type } = require('express/lib/response');
const app = express();

app.use(express.json());

/**
 * GET -> Listar/Retornar dados
 * POST -> Criar um registro
 * PUT -> Edição de registro
 * DELETE -> Deletar registros
 */

/**
 * QUERY PARAMS (Filtrar)
 * ROUTE PARAMS (Rotas)
 * REQUEST BODY (Preencher/inserir)
 */

app.get('/users', (request, response) => {
  const query = request.query;
  if (!query.nome) {
    return response.status(400).json({ message: "O parametro nome é obrgatório" })
  }
  return response.json(query)
});

app.get('/users/:id', (request, response) => {
  const params = request.params;
  if (params.id === '1') {
    return response.json({
      id: 1,
      nome: "XIQUIM",
    })
  } else {
    return response.status(404).json({ message: "Usuário nao encontrado" })
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

/**
 * Daqui pra baixo rotas de produto e pagamento
 */

app.post('/products/:id/payments', (request, response) => {
  const produto = {
    id: '1',
    nome: 'Televisao',
    preco: 3500,
    categoria: 'Eletrodoméstico',
    descricao: 'TV Samsung 4k UHD 55 polegadas'
  };
  const parcelas = request.body.parcelas;
  const id = request.params.id;
  let percentualAcrescimo = 0;

  if(!id || id !== produto.id ) {
    return response.status(400).json({message: "Produto inválido"})
  }

  if(!parcelas || parcelas <= 0) {
    return response.status(400).json({message: "Número de parcelas inválido"})
  }
  if (parcelas <= 3) {
  } else if (parcelas <= 6) {
    percentualAcrescimo = 0.03;
  } else if (parcelas <= 12) {
    percentualAcrescimo = 0.05;
  } else {
    return response.status(400).json({ message: 'Só é permitido parcelar em até 12x' })
  }
  const valorAcrescimo = produto.preco * percentualAcrescimo;
  const valorComAcrescimo = produto.preco + valorAcrescimo;
  
  return response.status(201).json({ produto, valorAcrescimo, percentualAcrescimo, valorComAcrescimo });
});

app.post('/products', (request, response) => {
  const id = Math.round(Math.random() * 10000).toFixed(0);
  const product = {
    id,
    nome: request.body.nome,
    preco: request.body.preco,
    categoria: request.body.categoria,
    descricao: request.body.descricao
  };
  return response.status(201).json(product);
});

app.post ('/cdusers', (request, response) => {
  const id = Math.round(Math.random() * 8000).toFixed(0);
  const users = {
    id,
    nome: request.body.nome,
    cpf: request.body.cpf,
    nascimento: request.body.nascimento,
  }
  if(String(request.body.cpf).length == 11){
    return response.status (201).json(users)
  }
  else {
    return response.status(400).json('CPF INVÁLIDO');
 }
})

app.listen(3333, () => {
  console.log("Server is running on port 3333");
})