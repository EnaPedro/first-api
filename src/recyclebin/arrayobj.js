const produtoA = {
  id: 'asdsadsadasfasdasdasd',
  nome: 'Televisao',
  preco: 3500,
  categoria: 'Eletrodoméstico',
  descricao: 'TV Samsung 4k UHD 55 polegadas'
};

/**
 * Caso seja em até 3 parcelas o produto não sofrerá acréscimo 
 * De 4 a 6 parcelas terá um acréscimo de 3%
 * De 7 a 12 Parcelas haverá acréscimo de 5%
 * Acima de 12 parcelas não será permitido
 */
function parcelamento(produto, qtd_parcelas) {
  if (qtd_parcelas <= 3) {
    console.log("Produto não sofrerá acréscimo valor total: " + produto.preco);
  } else if (qtd_parcelas <= 6) {
    const valorComAcrescimo = produto.preco + (produto.preco * 0.03);
    console.log("Produto sofrerá acréscimo de 3% novo valor total: " + valorComAcrescimo);
  } else if (qtd_parcelas <= 12) {
    const valorComAcrescimo = produto.preco + (produto.preco * 0.05);
    console.log("Produto sofrerá acréscimo de 5% novo valor total: " + valorComAcrescimo);
  } else {
    console.log('Erro: Só é permitido parcelar em até 12x');
  }
}

parcelamento(produtoA, 13);