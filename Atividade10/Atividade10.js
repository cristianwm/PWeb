var Aluno1 = {
    RA: "12345",
    Nome: "João"
  };
  
  function Aluno(RA, Nome) {
    this.RA = RA;
    this.Nome = Nome;
  }
  
  var Aluno2 = new Aluno("54321", "Maria");
  
  class Aluno {
    constructor(RA, Nome) {
      this.RA = RA;
      this.Nome = Nome;
    }
  }
  
  var Aluno3 = new Aluno("98765", "Pedro");
 
  var resultado = document.getElementById("resultado");
  
  resultado.innerHTML += "Aluno1: RA = " + Aluno1.RA + ", Nome = " + Aluno1.Nome + "<br>";
  resultado.innerHTML += "Aluno2: RA = " + Aluno2.RA + ", Nome = " + Aluno2.Nome + "<br>";
  resultado.innerHTML += "Aluno3: RA = " + Aluno3.RA + ", Nome = " + Aluno3.Nome + "<br>";
  