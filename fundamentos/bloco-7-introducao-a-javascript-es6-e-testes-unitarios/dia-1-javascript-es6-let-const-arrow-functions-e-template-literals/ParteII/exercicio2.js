function longestWord(frase) {
 let aux = frase.split(' ');
 let tam = 0;
 let maior;
 for (palavra of aux) {
  if (palavra.length > tam) {
    maior = palavra;
    tam = palavra.length;  
  }
 }
 console.log(maior);
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'