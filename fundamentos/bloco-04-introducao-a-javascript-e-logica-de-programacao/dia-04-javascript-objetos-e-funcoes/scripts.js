let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    // Exercício 2
    recorrente: 'Sim'
};

// Exrcício 1
console.log('Bem-vinda,', info.personagem);

// Execício 3
for(let key in info){
    console.log(key);
}

// Exercício 4
for(let key in info){
    console.log(info[key]);
}

// Exercício 5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

for(let key in info){
    if(key === 'recorrente'){
        if(info[key] === info2[key]){
            console.log('Ambos recorretes');
        }
    }else{
        console.log(info[key], 'e', info2[key]);
    }

}

// Exercício 6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      // Exercício 7
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
    ],
};
console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama','\'' + leitor.livrosFavoritos[0].titulo + '\'');

// Exercício 8
console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos.');