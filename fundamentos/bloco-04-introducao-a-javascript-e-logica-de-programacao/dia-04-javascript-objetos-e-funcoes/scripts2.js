// Exercício 1
function invertePalavra(palavra){
    let palavraInvertida = '';
    
    for(let index = palavra.length - 1; index >= 0; index -= 1){
        palavraInvertida += palavra[index]
        
    }
    return palavraInvertida
}
function verificaPalindrome(palavra){
    if(palavra === palavra.split('').reverse().join('') /* invertePalavra(palavra) */){
        return true
    }else{
        return false
    }
}
console.log(verificaPalindrome('carro'));

// // Exercício 2
function numMaior(array){
    maior = array[0]
    for(let index in array){
        if(array[index] > maior){
            maior = array[index]
        }
    }
    return array.indexOf(maior)
}
let array = [2, 3, 6, 7, 10, 1]
console.log('O maior número esta no índice: ', numMaior(array))

// // Exercício 3
function numMenor(array){
    menor = array[0]
    for(let index in array){
        if(array[index] < menor){
            menor = array[index]
        }
    }
    return array.indexOf(menor)
}
let array = [2, 3, 6, 7, 10, 1]
console.log('O menor número esta no índice: ', numMenor(array))

// Exercício 4
let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
function xablau(array){
    for(let i in array){
        if(array[0].length < array[i].length){
            array[0] = array[i]
        }
    }
    return array[0];
}
console.log(xablau(array));

//Exercício 5
let array = [2, 3, 2, 5, 8, 2, 3];
function contElemento(elemento){
    let contador = 0
    for(let index in array){
        if(array[index] === elemento){
            contador += 1;
        }
    }
    return contador
}

function elementoMaisRepete(array){
    let elementoMaisRepetido = array[0]
    for(let elemento of array){
        
        let eMaior = contElemento(elemento) > contElemento(elementoMaisRepetido)

        if(eMaior){
            elementoMaisRepetido = elemento
        }
    }
    return elementoMaisRepetido; 
}

console.log(elementoMaisRepete(array));