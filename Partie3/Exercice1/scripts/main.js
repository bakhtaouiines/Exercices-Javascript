let ul = document.getElementById("yearList")

for (let year = 2020; year <= 2030; year++) {
    let li = document.createElement("li")
    li.innerText = year
    if (year % 400 === 0 || (year % 4 == 0 && year % 100 != 0)) {
        li.style.color = "red"
    }
    ul.appendChild(li)
}

/*innerText = ajout de texte -> year
appendChild = relie virtuellement le ul au li*/