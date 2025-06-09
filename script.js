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

    const lista = document.getElementById("lista-palavras");
    const item = document.createElement("li");
    item.textContent = palavra;
    lista.appendChild(item);
    document.getElementById("entrada").value = ""; //limpar campo de entrada
    document.getElementById("entrada").focus(); //focar no campo de entrada
    document.getElementById("text").value += palavra + "\n"; //adicionar palavra ao textarea
    document.getElementById("text").scrollTop = document.getElementById("text").scrollHeight; //rolar para baixo
    document.getElementById("text").style.display = "block"; //mostrar textarea
    document.getElementById("text").style.height = "200px"; //definir altura do textarea
    document.getElementById("text").style.overflowY = "auto"; //adicionar rolagem vertical
    document.getElementById("text").style.fontFamily = "monospace"; //definir fonte do textarea
    document.getElementById("text").style.fontSize = "16px"; //definir tamanho da fonte do textarea
    document.getElementById("text").style.whiteSpace = "pre"; //manter espaços em branco
    

    //limpar
    document.getElementById("text").value = "";

    return true;
}