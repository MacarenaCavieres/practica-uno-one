const day = prompt("Que dia de semana es?").toLowerCase();

if (day === "sabado" || day === "domingo") {
    alert("Buen fin de semana");
} else {
    alert("Buena semana");
}

const nameUser = prompt("Escribe tu nombre");
alert(`Bienvenid@ ${nameUser}`);

// Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let count = 1;

while (count <= 10) {
    console.log(count);
    count++;
}

// Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let count2 = 10;

while (count2 >= 0) {
    console.log(count2);
    count2--;
}
