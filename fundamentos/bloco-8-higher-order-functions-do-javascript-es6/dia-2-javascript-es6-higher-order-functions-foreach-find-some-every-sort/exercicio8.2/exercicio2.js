/*2 - Retorne o nome do livro de menor nome. */
const books = require('./books');
function smallerName(lista) {
    let nameBook = lista[0].name;
    // escreva aqui o seu código
    lista.forEach(element => {
        (element.name.length < nameBook.length) ? (nameBook = element.name) : nameBook;
    });
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
}

console.log(`O menor título é ${smallerName(books)}`);
  