let input = require('readline-sync')
let nota = input.question('Insira o percentual. ')
let notaLetra;

if (nota >= 90 && nota <= 100){
    notaLetra = 'A';
    console.log('Sua nota é: ' + notaLetra);
}else if (nota >= 80 && nota <= 100){
    notaLetra = 'B';
    console.log('Sua nota é: ' + notaLetra);
}else if (nota >= 70 && nota <= 100){
    notaLetra = 'C';
    console.log('Sua nota é: ' + notaLetra);
}else if (nota >= 60 && nota <= 100){
    notaLetra = 'D';
    console.log('Sua nota é: ' + notaLetra);
}else if(nota >=50 && nota <= 100){
    notaLetra = 'E';
    console.log('Sua nota é: ' + notaLetra);
}else if(nota < 50){
    notaLetra = 'F';
    console.log('Sua nota é: ' + notaLetra);
} else{
    console.log('O valor inserido é menor que zero ou maior que 100.');
}