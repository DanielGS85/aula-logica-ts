let valores = [10, 2, 33, 4, 25];

let crescente = valores.sort((primeiro, segundo) => {
    return primeiro - segundo;
});

alert(crescente.join(", "));