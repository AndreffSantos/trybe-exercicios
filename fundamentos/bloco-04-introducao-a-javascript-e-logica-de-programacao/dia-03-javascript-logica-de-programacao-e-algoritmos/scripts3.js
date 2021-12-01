let n = 5,textoDaLinha = '';
for(let indexLinha = 1; indexLinha <= n; indexLinha += 1){
    for(let index2 = 1 ; index2 <= n - indexLinha; index2 += 1){
       textoDaLinha += ' ';
    }
    for(let index3 = 1; index3 <= indexLinha; index3 += 1){
        textoDaLinha += '*';
    }
    console.log(textoDaLinha);
    textoDaLinha = '';
}