/*7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais. 
Dica: cada inicial termina com um ponto.
*/
const books = require('./books');
const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName(lista) {
  // escreva seu código aqui
  const bookName = lista.find( (book) => book.author.name.match(/[a-z]\. [a-z]\. [a-z]\./gi) !== null).name;
  console.log(bookName);
}
authorWith3DotsOnName(books);