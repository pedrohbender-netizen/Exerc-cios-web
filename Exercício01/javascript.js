let resultado = document.getElementById("resultado");

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        resultado.innerHTML += i + " ";
    }
}