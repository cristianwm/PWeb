function calcularMedia() {
  let nome = document.getElementById("nome").value;
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);
  let nota3 = parseFloat(document.getElementById("nota3").value);

  let media = (nota1 + nota2 + nota3) / 3;

  document.getElementById("resultado").innerHTML = `A média do aluno ${nome} é ${media.toFixed(2)}`;
}
