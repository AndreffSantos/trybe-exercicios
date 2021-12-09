function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
    
    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;
        weekDaysList.appendChild(dayListItem);
    };
}
  
createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1
function createDaysOfTheMonth() {
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const ulDays = document.querySelector('#days');
    for (let dia of dezDaysList) {
        const newLi = document.createElement('li');
        if (dia === 25){
            newLi.className = 'day holiday friday';
            newLi.innerHTML = dia;
            ulDays.appendChild(newLi)
        } else if (dia === 24 || dia === 31) {
            newLi.className = 'day holiday';
            newLi.innerHTML = dia;
            ulDays.appendChild(newLi);
        } else if (dia === 4 || dia === 11 || dia === 18) {
            newLi.className = 'day friday';
            newLi.innerHTML = dia;
            ulDays.appendChild(newLi)
        } else {
            newLi.className = 'day';
            newLi.innerHTML = dia;
            ulDays.appendChild(newLi)
        }
    }
}
createDaysOfTheMonth();

//Exercício 2
function createHolidyasButton(buttonName) {
    const divButtonsContainer = document.querySelector('.buttons-container');
    const newButton = document.createElement('button');
    newButton.id = 'btn-holiday';
    newButton.innerHTML = buttonName;
    divButtonsContainer.appendChild(newButton);
}
createHolidyasButton('Feriados');

//Exercício 3
function displayHolidays(){
    const buttonHoliday = document.querySelector('#btn-holiday');
    const liHoliday = document.querySelectorAll('.holiday');
    const backgroundColor = 'rgb(238,238,238)';
    const color = 'red';
    buttonHoliday.addEventListener('click', function(){
        for (let index = 0; index < liHoliday.length; index += 1) {
            if(liHoliday[index].style['background-color'] === color){
                liHoliday[index].style['background-color'] = backgroundColor;
            } else {
                liHoliday[index].style['background-color'] = color;
            }
        }
    });
}
displayHolidays();

//Exercício 4
function createFridayButton(buttonName) {
    const divButtonsContainer = document.querySelector('.buttons-container');
    const newButton = document.createElement('button');
    newButton.id = 'btn-friday';
    newButton.innerHTML = buttonName;
    divButtonsContainer.appendChild(newButton);
}
createFridayButton('Sexta-feira');

//Exercício 5
function displayFridays() {
    const buttonFriday = document.querySelector('#btn-friday');
    const liFriday = document.querySelectorAll('.friday');
    let daysFriday = [];
    const Text = 'Sextou!';
    buttonFriday.addEventListener('click', function(){
        for (let index = 0; index < liFriday.length; index += 1) {
            if(liFriday[index].textContent === Text){
                liFriday[index].textContent = daysFriday[index];
            } else {
                daysFriday.push(liFriday[index].textContent)
                liFriday[index].textContent = Text;
            }
        }
    });
}
displayFridays();
