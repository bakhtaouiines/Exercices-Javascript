let age = prompt("Quel est votre âge?")
if (isNaN(age)) {
    alert("La saisie n'est pas correcte")
} else {
    if (age >= 18) {
        alert("Vous êtes majeur")
    } else {
        alert("Vous êtes mineur")
    }
}