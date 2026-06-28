// Exercício 2 - Sistema de Matrícula Acadêmica

function processarDisciplinas(disciplinas) {
  // Adicionar nova disciplina
  disciplinas.push("Node.js");

  // Percorrer todas as disciplinas com for
  for (let i = 0; i < disciplinas.length; i++) {
    const disciplina = disciplinas[i];

    // Ignorar disciplinas vazias
    if (disciplina === "") {
      continue;
    }

    // Encerrar laço ao encontrar "TCC"
    if (disciplina === "TCC") {
      console.log(disciplina);
      console.log();
      console.log("Laço interrompido");
      return;
    }

    console.log(disciplina);
  }

  console.log();

  // 2. Informar a quantidade de disciplinas
  console.log(`Total: ${disciplinas.length - 1}`); // -1 pela adicionada

  // 3. Verificar se o aluno cursa "JavaScript"
  if (disciplinas.includes("JavaScript")) {
    console.log();
    console.log("Aluno cursa JavaScript");
  }
}

// Entrada 1
const disciplinas1 = ["HTML", "CSS", "JavaScript"];
processarDisciplinas(disciplinas1);

console.log("\n--- Entrada 2 ---\n");

// Entrada 2
const disciplinas2 = ["Banco de Dados", "", "TCC", "Redes"];
processarDisciplinas(disciplinas2);