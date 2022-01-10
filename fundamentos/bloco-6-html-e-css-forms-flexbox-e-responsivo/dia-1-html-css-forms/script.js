
window.onload = function() {
  const BUTTON_SUBMIT = document.querySelector('button');
  const selectEstado = document.querySelector('#estado');
  const inputNome = document.querySelector('#nome');
  const estados = {'AC': 'Acre','AL': 'Alagoas','AP': 'Amapá','AM': 'Amazonas','BA': 'Bahia','CE': 'Ceará','ES': 'Espírito Santo','GO': 'Goiás','MA': 'Maranhão','MT': 'Mato Grosso','MS': 'Mato Grosso do Sul','MG': 'Minas Gerais','PA': 'Pará','PB': 'Paraíba','PR': 'Paraná','PE': 'Pernambuco','PI': 'Piauí','RJ': 'Rio de Janeiro','NR': 'Rio Grande do Norte','RS': 'Rio Grande do Sul','RO': 'Rondônia','RR': 'Roraima','SC': 'Santa Catarina','SP':'São Paulo','SE': 'Sergipe','TO': 'Tocntins','DF': 'Distrito Federal'};
  for(estado in estados) {
    const newOption = document.createElement('option');
    newOption.value = estado;
    newOption.innerText = estados[estado];
    selectEstado.appendChild(newOption)
  }

  function buttonFunction(event) {
    event.preventDefault();
    inputNome
  }

  BUTTON_SUBMIT.addEventListener('click', buttonFunction);
}
