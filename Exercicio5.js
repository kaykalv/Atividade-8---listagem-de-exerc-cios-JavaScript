// Exercício 5 - Sistema Completo de Eventos

// Função para formatar a data no padrão brasileiro (DD/MM/AAAA)
function formatarData(data) {
  const dia = String(data.getUTCDate()).padStart(2, "0");
  const mes = String(data.getUTCMonth() + 1).padStart(2, "0");
  const ano = data.getUTCFullYear();
  return `${dia}/${mes}/${ano}`;
}

// Função para exibir os dados do evento
function exibirEvento(evento) {
  console.log(`Evento: ${evento.nome}`);

  // 6. Verificar se a propriedade local existe
  const localExiste = "local" in evento && evento.local !== "";
  if (localExiste) {
    console.log(`Local: ${evento.local}`);
  }

  console.log();

  // 1. Exibir a data formatada no padrão brasileiro
  console.log(formatarData(evento.data));

  console.log();

  // 2. Informar quantos participantes existem
  console.log(`Participantes: ${evento.participantes.length}`);

  console.log();

  // 3. Verificar se existe pelo menos um participante
  if (evento.participantes.length === 0) {
    console.log("Nenhum participante cadastrado");
  }

  console.log();

  // Exibir propriedades e valores do objeto
  for (const chave of Object.keys(evento)) {
    const valor = Array.isArray(evento[chave])
      ? `[${evento[chave].join(", ")}]`
      : evento[chave];
    console.log(`${chave}: ${valor}`);
  }

  console.log();

  // 6. Exibir se a propriedade local está cadastrada
  console.log(`Local cadastrado: ${localExiste}`);

  console.log();

  // 7. Exibir o tipo de cada informação com typeof
  for (const chave of Object.keys(evento)) {
    console.log(`typeof ${chave}: ${typeof evento[chave]}`);
  }
}

// Entrada 1
const evento1 = {
  nome: "Semana da Tecnologia",
  local: "Auditório",
  data: new Date("2026-08-20"),
  participantes: ["Ana", "Carlos", "Marcos"],
};
exibirEvento(evento1);

console.log("\n--- Entrada 2 ---\n");

// Entrada 2
const evento2 = {
  nome: "Workshop Angular",
  local: "Laboratório 5",
  data: new Date("2026-09-10"),
  participantes: [],
};
exibirEvento(evento2);