let input = require('readline-sync');

let pecaXadres = input.question('Insira qual peça você quer conhecer o movimento. ')
if (pecaXadres.toLocaleLowerCase() == 'peao' || pecaXadres.toLocaleLowerCase() == 'peão'){
    console.log('move 1 casa para frente, se for o primeiro movimento pode mover 2 casa.');
}else if (pecaXadres.toLocaleLowerCase() == 'torre'){
    console.log('move-se para as laterais quantas casa quiser.');
}else if (pecaXadres.toLocaleLowerCase() == 'cavalo'){
    console.log('move-se 4 casas em "L".');
}else if (pecaXadres.toLocaleLowerCase() == 'bispo'){
    console.log('move-se em diagonais.');
}else if(pecaXadres.toLocaleLowerCase() == 'rainha'){
    console.log('Move-se para todos os lados quantas casa quiser.');
}else if (pecaXadres.toLocaleLowerCase() == 'rei'){
    console.log('Move-se para todos os lados um casa por vez');
}