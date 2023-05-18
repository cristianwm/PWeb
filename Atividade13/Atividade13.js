function transformText() {
    var inputText = document.getElementById("inputText").value;
    var uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
    var lowercaseCheckbox = document.getElementById("lowercaseCheckbox");
    var outputText = document.getElementById("outputText");
  
    if (uppercaseCheckbox.checked && lowercaseCheckbox.checked) {
      outputText.value = "Selecione apenas uma opção.";
    } else if (uppercaseCheckbox.checked) {
      outputText.value = inputText.toUpperCase();
    } else if (lowercaseCheckbox.checked) {
      outputText.value = inputText.toLowerCase();
    } else {
      outputText.value = "Nenhuma opção selecionada.";
    }
  }