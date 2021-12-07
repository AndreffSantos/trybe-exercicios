let numerosCardinais = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
function criaElemento(tag, conteudo = '', classe = '') {
  let element = document.createElement(tag);
  element.className = classe;
  element.innerText = conteudo;
  return element;
}

function addElement(local, tag, conteudo, classe){
  local.appendChild(criaElemento(tag, conteudo, classe));
}
// Exercício 1
let body = document.body;
addElement(body, 'h1', 'Exercício 5.2 - JavaScript DOM', '');
// Exercício 2
addElement(body, 'main', '', 'main-context');
// Exercício 3
let main = body.lastChild;
addElement(main, 'section', '', 'center-content');
// Exercício 4
addElement(main.lastElementChild, 'p', 'Opa isso é um parágrafo', '');
// Exercício 5
addElement(main, 'section', '', 'left-content');
// Exercício 6
addElement(main, 'section', '', 'right-content');
// Exercício 7
addElement(main.children[1], 'img', '', 'small-image');
let img = document.querySelector('.small-image');
img.src = 'https://picsum.photos/200';
// Exercício 8
addElement(main.children[2], 'ol', '', '');
for(let numero of numerosCardinais){
    addElement(main.children[2].lastElementChild, 'li', numero, '');
}
// Exercício 9
for(let index = 1; index <= 3; index += 1) {
  addElement(main, 'h3', '', '');
}

// Exercício 1
document.querySelector('h1').className = 'title';
// Exercício 2
for(let index = 0; index < 3; index += 1) {
  document.querySelectorAll('h3')[index].className = 'description';
}
// Exercício 3
main.removeChild(main.children[0])
// Exercício 4
main.children[1].style.marginRight = 'auto';