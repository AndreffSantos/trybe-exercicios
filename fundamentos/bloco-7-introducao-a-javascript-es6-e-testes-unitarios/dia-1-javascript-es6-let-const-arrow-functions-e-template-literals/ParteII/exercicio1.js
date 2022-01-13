const fatorial = (n) => {
  let aux = 1;
  for (let index = 1; index <= n ; index += 1) {
    aux = aux * index;
  }
  return aux;
}

console.log(fatorial(1));