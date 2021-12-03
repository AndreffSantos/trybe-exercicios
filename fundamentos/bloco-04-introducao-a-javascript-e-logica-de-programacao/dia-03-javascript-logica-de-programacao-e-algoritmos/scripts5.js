let n = 7, textoDaLinha = '', meio = (n + 1) / 2, asteriscoDireita = meio, asteriscoEsquerda = meio;
for(let linha = 1; linha <= n; linha += 1){
    if(linha %2 !== 0){
        for(let column = 1; column <= n; column += 1){
            if(column === asteriscoDireita || column === asteriscoEsquerda || linha === n){
                textoDaLinha += '*'
            }else {
                textoDaLinha += ' '
            }
        }
        console.log(textoDaLinha);
        textoDaLinha = ''
        asteriscoDireita += 1
        asteriscoEsquerda -= 1
    }

}