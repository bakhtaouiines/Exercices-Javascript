let ul = document.getElementById("ulNumber")
for (let number = 0; number <= 100; number++) {
    let li = document.createElement("li")
    if (number % 15 === 0 && number != 0) {
        li.innerText = ("...")
    } else {
        li.innerText = number
    }
    ul.appendChild(li)
}