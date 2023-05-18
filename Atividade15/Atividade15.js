function confirmarCurso() {
    var cursos = document.getElementById("cursos");
    var cursoSelecionado = cursos.value;
  
    if (cursoSelecionado !== "") {
      var confirmacao = confirm("Deseja abrir a janela do curso de " + cursoSelecionado + "?");
  
      if (confirmacao) {
        abrirJanelaCurso(cursoSelecionado);
      }
    }
  }
  
  function abrirJanelaCurso(curso) {
    var url = "";
    var titulo = "";
    var largura = 600;
    var altura = 300;
  
    switch (curso) {
      case "Fm":
        url = "http://www.fatecsorocaba.edu.br/curso_fm.html";
        titulo = "Fabricação Mecânica";
        break;
      case "ads":
        url = "http://www.fatecsorocaba.edu.br/curso_ads.html";
        titulo = "Análise e Desenvolvimento de Sistemas";
        break;
      case "log":
        url = "http://www.fatecsorocaba.edu.br/curso_log.html";
        titulo = "Logística";
        break;
    }
  
    if (url !== "") {
      window.open(url, titulo, "width=" + largura + ",height=" + altura);
    }
  }
  