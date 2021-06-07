let languagesList = ['html', 'css', 'javascript', 'php', 'mysql', 'c++', 'ruby', 'python'];
let div = document.getElementById("array");
languagesList.forEach(language => {
    let p = document.createElement("p");
    p.innerText = language;
    div.appendChild(p);
})


/*document.getElementById("array").innerHTML = languages.join();
La méthode join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'un objet semblable à un tableau). 
La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.*/