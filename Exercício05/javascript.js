function somar() {

    let valor1 = Number(document.getElementById("num1").value);
    let valor2 = Number(document.getElementById("num2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Digite apenas números!");
        return;
    }

    let soma = valor1 + valor2;

    document.getElementById("resultado").innerHTML =
        "Resultado: " + soma;

    let botao = document.getElementById("botao");

    // Verifica se é par ou ímpar
    if (soma % 2 === 0) {
        botao.style.backgroundColor = "blue";   // PAR
    } else {
        botao.style.backgroundColor = "green";  // ÍMPAR
    }
}