let n = 5,textoDaLinha = '';
for(let indexLinha = 1; indexLinha <= n; indexLinha += 1){
    for(let index2 = 1; index2 <= indexLinha; index2 += 1){
       textoDaLinha += '*';
    }
    console.log(textoDaLinha);
   textoDaLinha = '';
}