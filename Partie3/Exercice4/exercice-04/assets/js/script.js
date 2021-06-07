let daysWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
let div = document.getElementById("array");
daysWeek.forEach(days => {
    let p = document.createElement("p");
    p.innerText = days;
    if (days == ["Samedi"] || days == ["Dimanche"]) {
        p.style.fontWeight = 'bold';
    }
    div.appendChild(p);
})