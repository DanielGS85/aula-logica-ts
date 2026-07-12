let pessoas = ["ana", "bruno", "caio"];

let nomesMaiusculos = pessoas.map(pessoa => {
    return pessoa.toUpperCase();
});

alert(nomesMaiusculos.join(", "));