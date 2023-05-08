function abrirJanela() {
    var janela = document.getElementById("janela");
    janela.style.backgroundImage = "url('janela_aberta.jpg')";
}

function fecharJanela() {
    var janela = document.getElementById("janela");
    janela.style.backgroundImage = "url('janela_fechada.jpg')";
}

function quebrarJanela() {
    var janela = document.getElementById("janela");
    janela.style.backgroundImage = "url('janela_quebrada.jpg')";
}