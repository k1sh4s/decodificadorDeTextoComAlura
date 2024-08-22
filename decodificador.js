const substituicoes1 = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
};
const substituicoes2 = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
};


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mostrarBotaoCopiar(){
    let botao = document.querySelector(".botaoCopiar");
        botao.style.display = 'block';
}

function removerTextoNaTela(tag){
    let campo = document.querySelector(tag);
    campo.textContent = "";
}
function removerImagem(tag){
    let imagem = document.getElementById(tag);
    imagem.remove();
}


function criptografar(){
    let frase = document.querySelector("textarea").value;
    let aFrase = frase.toLowerCase();

    let novaFrase = aFrase.replace(/a|e|i|o|u/g, vogal => substituicoes1[vogal]);
        
    exibirTextoNaTela("h1", novaFrase);
    
    console.log(novaFrase);

    mostrarBotaoCopiar();
    removerImagem("fotinha");
    removerTextoNaTela(".corpo__verTexto__subtitulo");
}

function descriptografar(){
    let frase = document.querySelector("textarea").value;
    let aFrase = frase.toLowerCase();
    
    let novaFrase = aFrase.replace(/ai|enter|imes|ober|ufat/g, vogal => substituicoes2[vogal]);
    
    exibirTextoNaTela("h1", novaFrase);

    console.log(novaFrase);

    mostrarBotaoCopiar();
    removerImagem("fotinha");
    removerTextoNaTela(".corpo__verTexto__subtitulo");
    
}

function copiarTexto(){
    
    let textoCopiar = document.querySelector("h1").textContent;

    // Cria um elemento temporário para copiar o texto
    const tempElement = document.createElement("textarea");
    tempElement.value = textoCopiar;
    document.body.appendChild(tempElement);

    // Seleciona o texto e copia para a área de transferência
    tempElement.select();
    document.execCommand("copy");

    // Remove o elemento temporário
    document.body.removeChild(tempElement);
}