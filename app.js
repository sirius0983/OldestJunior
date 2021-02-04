// let numberOne = document.querySelector('.number'),
//     button = document.querySelector('.button'),
//     result = document.querySelector('.result');
// button.addEventListener('click', function () {
//
//     let prise = 100,
//         age = numberOne.value
//
//     if (age < 8) {
//         prise = 0
//     } else if (age > 7 && age < 20) {
//         prise = prise * 0.8
//     } else {
//         prise = prise
//     }
//     result.innerText = `Цена билета равна ${prise}`
// })

let myInput = document.createElement('input'),
    myButton = document.createElement('button'),
    par = document.createElement('p')
myInput.setAttribute('type', 'number')
myButton.setAttribute('type', 'button')
par.setAttribute('class', 'result')
myButton.innerText = 'Показать'
par.innerText = '12'
let body = document.querySelector('body')
body.appendChild(myInput)
body.appendChild(myButton)
body.appendChild(par)