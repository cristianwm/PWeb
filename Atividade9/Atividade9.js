function maiorNumero() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let maior = num1;

    if (num2 > maior) {
        maior = num2;
    }

    if (num3 > maior) {
        maior = num3;
    }

    document.getElementById("resultado").innerHTML = "O maior número é: " + maior;
}

function ordemCrescente() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let resultado = "";

    if (num1 <= num2 && num1 <= num3) {
        resultado += num1 + " ";
        if (num2 <= num3) {
            resultado += num2 + " " + num3;
        } else {
            resultado += num3 + " " + num2;
        }
    } else if (num2 <= num1 && num2 <= num3) {
        resultado += num2 + " ";
        if (num1 <= num3) {
            resultado += num1 + " " + num3;
        } else {
            resultado += num3 + " " + num1;
        }
    } else {
        resultado += num3 + " ";
        if (num1 <= num2) {
            resultado += num1 + " " + num2;
        } else {
            resultado += num2 + " " + num1;
        }
    }

    document.getElementById("resultado").innerHTML = "Os números em ordem crescente são: " + resultado;
}
