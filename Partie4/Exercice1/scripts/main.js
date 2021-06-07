/*var formValid = document.getElementById('submittbutton')
var firstNumber = document.getElementById('firstnumber')
var secondNumber = document.getElementById('secondnumber')
var missFirstNumber = document.getElementById('missFirstNumber')*/

/*formValid.addEventListener('click', validation)

function validation(event) {
    //Si le champ est vide
    if (firstNumber.validity.valueMissing) {
        event.preventDefault()
        missFirstNumber.numberContent = 'Nombre manquant'
        missFirstNumber.style.color = 'red'
    }
}
*/

function multiplierDeuxValeurs(firstNumber, secondNumber) {
    document.getElementById("myForm").innerText = (firstNumber * secondNumber)
}