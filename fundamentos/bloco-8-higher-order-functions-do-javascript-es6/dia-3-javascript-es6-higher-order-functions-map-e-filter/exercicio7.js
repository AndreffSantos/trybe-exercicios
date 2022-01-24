/*7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais. 
Dica: cada inicial termina com um ponto.
*/
const books = require('./books');
const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName(lista) {
  // escreva seu código aqui
  const Arg = /^[a-z]\. [a-z]\. [a-z]\. /i;
  const nameBook = lista.filter( (book) => book.author.name.match(Arg) !== null);
  nameBook.forEach( (element) => console.log(element.name));
}
authorWith3DotsOnName(books);
