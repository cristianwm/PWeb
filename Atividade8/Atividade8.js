
var respostas = [];
var qtdPessimo = 0;
var qtdOtimoBom = 0;
var qtdMulheres = 0;
var qtdHomens = 0;


function adicionarResposta() {
	
	var idade = parseInt(document.getElementById("idade").value);
	var sexo = document.getElementById("sexo").value;
	var opiniao = parseInt(document.getElementById("opiniao").value);

	
let idadeTotal = 0;
let idadeMaisVelha = 0;
let idadeMaisNova = Infinity;
let qtdPessimo = 0;
let qtdOtimoBom = 0;
let qtdMulheres = 0;
let qtdHomens = 0;

const totalPessoas = parseInt(prompt("Quantas pessoas responderam ao questionário?"));

for (let i = 1; i <= totalPessoas; i++) {
  const idade = parseInt(prompt(`Digite a idade da pessoa ${i}:`));
  const sexo = prompt(`Digite o sexo da pessoa ${i} (M/F):`);
  const opiniao = parseInt(prompt(`Digite a opinião da pessoa ${i} (1=Péssimo, 2=Regular, 3=Bom, 4=Ótimo):`));
  
  idadeTotal += idade;
  if (idade > idadeMaisVelha) {
    idadeMaisVelha = idade;
  }
  if (idade < idadeMaisNova) {
    idadeMaisNova = idade;
  }
  if (opiniao === 1) {
    qtdPessimo++;
  }
  if (opiniao === 3 || opiniao === 4) {
    qtdOtimoBom++;
  }
  if (sexo.toUpperCase() === "M") {
    qtdHomens++;
  }
  if (sexo.toUpperCase() === "F") {
    qtdMulheres++;
  }
}

const mediaIdade = idadeTotal / totalPessoas;
const percentOtimoBom = (qtdOtimoBom / totalPessoas) * 100;

document.write(`<p>Média de idade: ${mediaIdade.toFixed(2)} anos</p>`);
document.write(`<p>Idade da pessoa mais velha: ${idadeMaisVelha} anos</p>`);
document.write(`<p>Idade da pessoa mais nova: ${idadeMaisNova} anos</p>`);
document.write(`<p>Quantidade de pessoas que responderam péssimo: ${qtdPessimo}</p>`);
document.write(`<p>Porcentagem de pessoas que responderam ótimo ou bom: ${percentOtimoBom.toFixed(2)}%</p>`);
document.write(`<p>Quantidade de homens que responderam ao questionário: ${qtdHomens}</p>`);
document.write(`<p>Quantidade de mulheres que responderam ao questionário: ${qtdMulheres}</p>`);}
