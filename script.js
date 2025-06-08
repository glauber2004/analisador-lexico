function validarPalavra() {
  const palavra = document.getElementById("entrada").value.trim();
  const regex = /^[a-z]+$/;
    if (palavra === "") {
        alert("O campo de entrada não pode estar vazio.");
        return false;
    } else if (!regex.test(palavra)) {
        alert("A palavra deve conter apenas letras minúsculas.");
        return false;
    } 
}