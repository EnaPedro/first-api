# Primeira API - Backend
## 22/03 
- Entender o que é JSON (OK)
- Entender para que serve a API RESTFULL (OK)
- Criar uma rota e entender o que diabo é rota (OK)
- Salvar o código no git (OK)

* Plus -> Criar o live reload do nosso código (OK)

## 23/03
- Objeto 

### Desafios 
- Criar uma rota para cadastro de um produto POST -> /products (ok)
    - Receber o body com o produto
    - Retornar um objeto contendo os dados enviados mais um id "ficticio"
- Subir código pro git

## 29/03
- Resolução do desafio
- Revisão geral 

### Desafio 
- Criar uma rota para cadastro de usuário 
    - Receber um body contendo: nome, CPF e data de nascimento
- Validar quantidade de digitos do CPF
    - ex: Se forem enviados +11 digitos ou -11 digitos retornar um status 400 com a seguinte mensagem: CPF inválido
- Retornar os dados cadastrados + 1 id ficticio
- Subir para o github 