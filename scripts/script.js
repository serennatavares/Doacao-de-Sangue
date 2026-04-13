let doadores = [];

document.getElementById('formDoacao').addEventListener("submit", function (e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  let email = document.getElementById("email").value;
  let idade = document.getElementById("idade").value;
  let peso = document.getElementById("peso").value;
  let tipo = document.getElementById("tipo").value;
  let telefone = document.getElementById("telefone").value;
  let cidade = document.getElementById("cidade").value;
  let estado = document.getElementById("estado").value;

  let valido = true;

  if (idade < 16) {
    alert("A idade mínima para doação é 16 anos.");
    valido = false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("O email deve ser válido.");
    valido = false;
  }

  if (peso < 50) {
    alert("O peso mínimo para doação é 50 kg.");
    valido = false;
  }

  if (isNaN(telefone)) {
    alert("O telefone deve conter apenas números.");
    valido = false;
  }

  if (
    nome === "" ||
    sobrenome === "" ||
    email === "" ||
    idade === "" ||
    peso === "" ||
    tipo === "" ||
    telefone === "" ||
    cidade === "" ||
    estado === ""
  ) {
    alert("Todos os campos são obrigatórios.");
    valido = false;
  }

  if (!valido) return;

  let doador = {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    idade: idade,
    peso: peso,
    tipoSanguineo: tipo,
    telefone: telefone,
    cidade: cidade,
    estado: estado
  };

  doadores.push(doador);

  console.table(doadores);

  alert("Cadastro realizado com sucesso!");
});