let n = 7, textoDaLinha = '';
for(let indexLinha = 1; indexLinha <= n; indexLinha += 1){
    if(indexLinha % 2 !== 0){
        for(let index2 = 1 ; index2 <= n - indexLinha; index2 += 2){
            textoDaLinha += ' ';
        }
        for(let index3 = 0; index3 < indexLinha; index3 += 1){
            if(indexLinha === 2 * index3 + 1 || indexLinha){
                textoDaLinha += '*';
            }
        }
        console.log(textoDaLinha);
        textoDaLinha = '';
    }
}