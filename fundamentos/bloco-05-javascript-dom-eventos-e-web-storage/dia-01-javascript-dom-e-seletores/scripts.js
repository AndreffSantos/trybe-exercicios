/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/
function mudarTextoParagrafo(positionTag, novoTexto) {
    let paragrafo = document.getElementsByTagName('p');
    paragrafo[positionTag].innerText = novoTexto;
}

function mudaCorAmarelo() {
    let elemento = document.getElementsByClassName('main-content');
    elemento[0].style.backgroundColor = 'rgb(76,164,109)';
}

function mudaCorVermelho() {
    let elemento = document.getElementsByClassName('center-content');
    elemento[0].style['background-color'] = 'white';
}

function ajeitaH1() {
    let elemento = document.getElementsByTagName('h1');
    elemento[0].innerText = 'Exercício 5.1 - JavaScript';
}

function paragrafoUppercase() {
    let elemento = document.getElementsByTagName('p');
    for (let index = 0; index < elemento.length; index += 1) {
        elemento[index].style.textTansform = 'uppercase';
        console.log(elemento[index].innerHTML);
    }
}