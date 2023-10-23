var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var SetaDireita = window.document.getElementById("seta-direita")
var SetaEsquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita() {
    Leonardo.style ="display: none"
    Bruna.style ="display: flex"
    SetaDireita.style ="display: none"
    SetaEsquerda.style ="display: flex; margin-top: 100px"
}

function RolarParaEsquerda() {
    Leonardo.style =" display: flex"
    Bruna.style ="display: none"
    SetaDireita.style ="display: flex"
    SetaEsquerda.style ="display: none; margin-top: 100px"
}