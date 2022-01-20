/*5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia. */
const books = require('./books');
const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors(lista) {
  // escreva seu código aqui
  const newArray = lista.filter( (book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map( (book) => `${book.author.name}`).sort();
  console.log(newArray);
}
fantasyOrScienceFictionAuthors(books);