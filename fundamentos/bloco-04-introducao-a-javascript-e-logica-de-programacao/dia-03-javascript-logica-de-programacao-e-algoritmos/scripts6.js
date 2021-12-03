let readlineSync = require('readline-sync')

let num = readlineSync.question('Insira um número qualquer: '), cont = 0;
for(let index = 1; index <= num; index += 1){
    if(num % index === 0){
        cont += 1
    }
}
if(cont === 2){
    console.log('O número', num, 'é primo.');
}else {
    console.log('O número', num, 'não é primo.');
}