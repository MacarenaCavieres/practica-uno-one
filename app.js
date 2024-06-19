const secretNumb = Math.floor(Math.random() * 10 + 1);
let userNumb = +prompt("Elija un número del 1 al 10");

while (userNumb !== secretNumb) {
    if (secretNumb > userNumb) {
        alert("Skynet eligio un número mayor");
    } else {
        alert("Skynet eligio un número menor");
    }
    userNumb = +prompt("Elija un número del 1 al 10");
}
