const secretNumb = Math.floor(Math.random() * 10 + 1);
let userNumb = +prompt("Elija un número del 1 al 10");

let contador = 1;

while (userNumb !== secretNumb) {
    if (secretNumb > userNumb) {
        alert("Skynet eligio un número mayor");
    } else {
        alert("Skynet eligio un número menor");
    }
    userNumb = +prompt("Elija un número del 1 al 10");
    contador++;
}

alert("Te tomo " + contador + " intentos acertar");

// const day = prompt("Que dia de semana es?").toLowerCase();

// if (day === "sabado" || day === "domingo") {
//     alert("Buen fin de semana");
// } else {
//     alert("Buena semana");
// }

// const nameUser = prompt("Escribe tu nombre");
// alert(`Bienvenid@ ${nameUser}`);
