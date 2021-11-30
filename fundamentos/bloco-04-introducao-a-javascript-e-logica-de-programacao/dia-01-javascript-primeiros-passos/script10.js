const custo = 10, imposto = 0.2, valorVenda = 17, custoTotal = custo * (imposto + 1);
let input = require('readline-sync');

let quantidadeVendida = input.question('Quantos produtos foram vendidos? ');
let lucro = quantidadeVendida * (valorVenda - custoTotal)

console.log(lucro);