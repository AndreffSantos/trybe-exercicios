/*7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário. */
const books = require('./books');
const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  let result = true;
  books.forEach( (book) => {
    if (books.some( (book2) => book.id !== book2.id && book.author.birthYear === book2.author.birthYear) && result === true) {
      result = false;
    }
  });
  return result;
}
console.log(authorUnique());