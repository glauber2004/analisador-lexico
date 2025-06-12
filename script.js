function validarPalavra() {
  const palavra = document.getElementById("entrada").value.trim();
  const regex = /^[a-z]+$/;
    if (palavra === "") {
        alert("O campo de entrada não pode estar vazio.");
        return false;
    } else if (!regex.test(palavra)) {
        alert("A palavra deve conter apenas LETRAS minúsculas."); 
        return false;
    } 
    
    const lista = document.getElementById("lista-palavras");
    const item = document.createElement("li");
    item.textContent = palavra;
    lista.appendChild(item);
    document.getElementById("entrada").value = ""; //limpar entrada 
}