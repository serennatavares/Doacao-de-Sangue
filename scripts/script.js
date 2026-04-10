document.getElementById('formDoacao').addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let idade = document.getElementById('idade').value;
    let peso = document.getElementById('peso').value;
    let tipo = document.getElementById('tipoSanguineo').value;
    let telefone = document.getElementById('telefone').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;

  if (!nome.includes(" ")) alert("Digite nome e sobrenome.");

});