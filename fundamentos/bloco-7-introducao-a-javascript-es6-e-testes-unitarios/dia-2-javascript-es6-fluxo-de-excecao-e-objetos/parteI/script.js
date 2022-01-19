function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const pResult = document.getElementById('result');
  const isEmpty = (n1, n2) => (n1 === '' || n2 === '') ? true : false;
  
  try {
    if (isEmpty(value1,value2)) {
      throw new Error('Algum valor ta vazio.');
    } 
    if (isNaN(value1) || isNaN(value2)) {
      throw new Error('Algum dos valores não é numerico.')
    }
    const result = parseInt(value1) + parseInt(value2);
    pResult.innerHTML = `Resultado: ${result}`;
  } catch (error) {
    pResult.innerHTML = `Error: ${error.message}`;
  }
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
