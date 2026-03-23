function mostrarMensagem() {

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    if (nome === "" || idade === "") {
        alert("Preencha todos os campos!");
        return;
    }

    document.getElementById("resultado").innerHTML = 
        nome + " tem " + idade + " anos";
}