function validarFormulario() {
    var nome = document.forms["myForm"]["nome"].value;
    var email = document.forms["myForm"]["email"].value;
    var comentario = document.forms["myForm"]["comentario"].value;
    var pesquisa = document.forms["myForm"]["pesquisa"].value;
  
    if (nome.length < 10) {
      alert("O nome deve ter pelo menos 10 caracteres.");
      return false;
    }
  
    if (!email.includes("@") || !email.includes(".")) {
      alert("O email deve conter os caracteres '@' e '.'.");
      return false;
    }
  
    if (comentario.length < 20) {
      alert("O comentário deve ter no mínimo 20 caracteres.");
      return false;
    }
  
    if (pesquisa === "sim") {
      alert("Que bom que você voltou a visitar esta página!");
    } else {
      alert("Volte sempre a esta página!");
    }
  
    return true;
  }
  