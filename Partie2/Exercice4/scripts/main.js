let grade = prompt("Indiquez votre note:")
if (grade <= 3) {
    alert("NUL")
} else if (grade > 3 && grade <= 6) {
    alert("MOYEN")
} else if (grade >= 6.1 && grade <= 8) {
    alert("ASSEZ BIEN")
} else if (grade >= 8.1 && grade <= 9) {
    alert("BIEN")
} else if (grade == 10) {
    alert("EXCELLENT")
}