
		function jogar(jogada) {
			var jogadaComputador = Math.random();
			if (jogadaComputador < 0.33) {
				jogadaComputador = "pedra";
			} else if (jogadaComputador < 0.66) {
				jogadaComputador = "papel";
			} else {
				jogadaComputador = "tesoura";
			}
			var resultado;
			if (jogada == jogadaComputador) {
				resultado = "Empate!";
			} else if (jogada == "pedra" && jogadaComputador == "tesoura" || jogada == "tesoura" && jogadaComputador == "papel" || jogada == "papel" && jogadaComputador == "pedra") {
				resultado = "Você ganhou!";
			} else {
				resultado = "Computador ganhou!";
			}
			document.getElementById("resultado").innerHTML = "Você jogou " + jogada + ". O computador jogou " + jogadaComputador + ". " + resultado;
		}
