/*6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação. */
const books =require('./books');
const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks(lista) {
  // escreva seu código aqui
  const currentData = new Date().getFullYear();
  const newArray = lista.filter( (book) => currentData - book.releaseYear > 60).map( (book) => `${book.name}` );
  console.log(newArray);
}
oldBooks(books);