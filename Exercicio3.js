// Exercício 3 - Sistema de Biblioteca

// 4. Função que recebe título e autor e retorna mensagem formatada
function criarFicha(titulo, autor) {
  return `Livro: "${titulo}" — Autor: ${autor}`;
}

function processarAutores(autoresStr, autorBuscado) {
  // 1. Transformar a string em array
  const autoresArray = autoresStr.split(",");

  // 2. Exibir cada autor
  for (const autor of autoresArray) {
    console.log(autor);
  }

  console.log();

  // 3. Informar se existe determinado autor
  if (autoresArray.includes(autorBuscado)) {
    console.log("Autor encontrado");
  } else {
    console.log("Autor não encontrado");
  }

  console.log();

  // 5. Exibir a lista novamente utilizando join()
  console.log("Lista:", autoresArray.join(" | "));
}

// Entrada 1
const autores1 = "Machado de Assis,Clarice Lispector,Monteiro Lobato";
processarAutores(autores1, "Clarice Lispector");

console.log("\n--- Entrada 2 ---\n");

// Entrada 2
const autores2 = "J. K. Rowling,J. R. R. Tolkien";
processarAutores(autores2, "Machado de Assis");

// Demonstração da função criarFicha
console.log("\n--- Ficha de livro ---");
console.log(criarFicha("Dom Casmurro", "Machado de Assis"));