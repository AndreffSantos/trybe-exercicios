const fatorial = (n) => {
  // if (n === 0) {
  //   return 1;
  // } else {
  //   return n * fatorial(n - 1)
  // }

  return (n === 0 ? 1 : n * fatorial(n - 1));
}

console.log(fatorial(0));