const maxPlay = +prompt("Hasta que numero quiere jugar?");
const secretNumb = Math.floor(Math.random() * maxPlay + 1);
let userNumb = +prompt(`Elija un número del 1 al ${maxPlay}`);

let count = 1;
let word = "intento";

while (userNumb !== secretNumb) {
    if (secretNumb > userNumb) {
        alert("Skynet eligio un número mayor");
    } else {
        alert("Skynet eligio un número menor");
    }
    if (count >= 3) {
        alert("Maximo de intentos alcanzado");
        break;
    }
    userNumb = +prompt("Elija un número del 1 al 10");
    count++;
    word = "intentos";
}
if (userNumb === secretNumb) alert("Te tomo " + count + " " + word + " acertar");
