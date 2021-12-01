let n = 5, textoDaLinha = '';
for(let indexLinha = 0; indexLinha < n; indexLinha += 1){
    for(let index2 = 0; index2 < n; index2 += 1){
        textoDaLinha += '*';
    }
    console.log(textoDaLinha);
    textoDaLinha = '';
}