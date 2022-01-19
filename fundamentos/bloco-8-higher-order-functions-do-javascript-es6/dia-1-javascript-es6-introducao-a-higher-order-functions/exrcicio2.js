const generateNumber = (bet,callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  if (callback(bet, number)) {
    return 'Parabens você ganhou'
  } 
  return `${bet} e ${number} Tente novamente`;
}

const compare = (numberA, numberB) => {
  return (numberA === numberB) ? true : false;
}

console.log(generateNumber(1, compare));