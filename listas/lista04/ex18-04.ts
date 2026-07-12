let listaEmails = [
    "a@x.com",
    "b@x.com",
    "a@x.com",
    "c@x.com",
    "b@x.com"
];

let emailsSemRepetir = [...new Set(listaEmails)];

alert(
    emailsSemRepetir.join("\n") +
    "\nTotal: " +
    emailsSemRepetir.length +
    " de " +
    listaEmails.length
);