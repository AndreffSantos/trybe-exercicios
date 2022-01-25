// escreva sum abaixo
function sum (...rest) {
  return rest.reduce( (acc, number) => acc + number, 0);
}
const param = [1, 2, 3, 4];
console.log(sum(...param));