let limite = Number(prompt("Primos até:"));

let listaPrimos = "";

for (let numero = 2; numero <= limite; numero++) {

    let primo = true;

    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            primo = false;
        }
    }

    if (primo) {
        listaPrimos += numero + " ";
    }
}

alert("Primos: " + listaPrimos);