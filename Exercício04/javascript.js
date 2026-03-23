function somar() {

    let valor1 = document.getElementById("num1").value;
    let valor2 = document.getElementById("num2").value;

    // Converter para número
    valor1 = Number(valor1);
    valor2 = Number(valor2);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Digite apenas números!");
        return;
    }

    let soma = valor1 + valor2;

    document.getElementById("resultado").innerHTML =
        "Resultado: " + soma;
}