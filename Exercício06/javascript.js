function gerarTabuada() {

    let numero = Number(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    // Limpa o resultado anterior
    resultado.innerHTML = "";

    // Validação
    if (numero < 1 || numero > 10 || isNaN(numero)) {
        alert("Digite um número de 1 a 10!");
        return;
    }

    // Gera a tabuada
    for (let i = 1; i <= 10; i++) {
        resultado.innerHTML += numero + " x " + i + " = " + (numero * i) + "<br>";
    }
}