/*1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947. */
const books = require('./books');
const find = (list, callback) => {
    for (let item of list) {
        if (callback(item)) {
            return item;
        }
    }
    return undefined;
};

function authorBornIn1947(book) {
    return (book.author.birthYear === 1947);
} 
    

const nomeDoAutor = (book) => {
    return (book !== undefined) ? `O autor do livro ${book.name} é ${book.author.name}` : undefined;
};

console.log(nomeDoAutor(books.find(authorBornIn1947)));
   