let numbers = [5, 9, 3 ,19, 70, 8, 100, 2, 35, 27];
let soma = 0;
// Exercício 1
console.log(numbers);

// Exercício 2
for(let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}
console.log('A soma dos numeros do Array é:',soma);

// Exercício 3
let media = soma / numbers.length;
console.log('A média aritimética dos valores do Array é;',media);

// Exercício 4
if(media > 20){
    console.log('Média maior que 20.');
}else{
    console.log('Média menor ou igual a 20.');
}

// Exercício 5
let maior = numbers[0];
for(let index2 = 1; index2 < numbers.length; index2 += 1){
    if(numbers[index2] > maior){
        maior = numbers[index2];
    }
}
console.log(maior);

// Exercício 6.
let numeroImpar = 0;
for(let index3 = 0; index3 < numbers.length; index3 += 1){
    if(numbers[index3] % 2 !== 0){
        numeroImpar += 1; 
    }
}
if(numeroImpar !== 0){
    console.log('Existem', numeroImpar, 'Números impar no Array.');
}else{
    console.log('nenhum valor ímpar encontrado.');
}

// Exercício 7.
let menor = numbers[0];
for(let index4 = 1; index4 < numbers.length; index4 += 1){
    if(numbers[index4] < menor){
        menor = numbers[index4];
    }
}
console.log('O menor valor é:', menor);

// Exercício 8.
let array25 = [];
for(let index5 = 1; index5 <= 25; index5 += 1){
    array25.push(index5);
}
console.log(array25);

// Exercício 9.
let array25Metade = [];
for(let index6 = 0; index6 < array25.length; index6 += 1){
    array25Metade.push(array25[index6] / 2); 
}
console.log(array25Metade);