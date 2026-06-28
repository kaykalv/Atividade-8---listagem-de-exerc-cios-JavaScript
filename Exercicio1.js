// Exercício 1 - Sistema de Cadastro de Produtos

const produto = {
  nome: "Monitor",
  categoria: "Informática",
  preco: "899.90",
  estoque: 5,
};

// 1. Converter o preço para número
produto.preco = Number(produto.preco);

// 2. Validar se o preço é válido
function precoValido(preco) {
  return !isNaN(preco) && preco > 0;
}

// 3. Função para exibir os dados do produto
function exibirProduto(p) {
  if (!precoValido(p.preco)) {
    console.log("Preço inválido.");
    return;
  }

  console.log(`Produto: ${p.nome}`);
  console.log(`Categoria: ${p.categoria}`);
  console.log(`Preço: R$ ${p.preco.toFixed(2)}`);
  console.log();

  // 4. Informar se o estoque está baixo (menos de 10 unidades)
  if (p.estoque < 10) {
    console.log("Estoque baixo");
  } else {
    console.log(`Estoque: ${p.estoque} unidades`);
  }

  console.log();

  // 5. Exibir todas as propriedades do objeto
  console.log(JSON.stringify(Object.keys(p)));

  // 6. Exibir o tipo de cada informação com typeof
  console.log();
  for (const chave of Object.keys(p)) {
    console.log(`typeof ${chave}: ${typeof p[chave]}`);
  }
}

exibirProduto(produto);