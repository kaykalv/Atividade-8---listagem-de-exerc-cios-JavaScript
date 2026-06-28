// Exercício 4 - Sistema de Controle Financeiro

// Função responsável pelo cálculo dos gastos
function calcularGastos(valores) {
  let total = 0;

  for (const item of valores) {
    // 1. Converter os valores para número
    const valor = parseFloat(item);

    // 2. Ignorar valores inválidos (NaN)
    if (isNaN(valor)) {
      continue;
    }

    // 3. Somar os gastos válidos
    total += valor;
  }

  return total;
}

function exibirRelatorio(valores) {
  const total = calcularGastos(valores);

  // 4. Exibir o total
  console.log(`Total: R$ ${total}`);
  console.log();

  // 5. Informar se ultrapassou R$ 2.000
  if (total > 2000) {
    console.log("Limite ultrapassado");
  } else {
    console.log("Gastos dentro do limite");
  }
}

// Entrada 1
const gastos1 = ["500", "350.50", "1000"];
exibirRelatorio(gastos1);

console.log("\n--- Entrada 2 ---\n");

// Entrada 2
const gastos2 = ["800", "900", "700"];
exibirRelatorio(gastos2);