function possuiNumero(texto) {
    for (let indice = 0; indice < texto.length; indice++) {
        if ("0123456789".includes(texto[indice])) {
            return true;
        }
    }

    return false;
}

function validarSenha(senha) {
    if (senha.length < 8) {
        return "Fraca: 8+ caracteres";
    }

    if (!possuiNumero(senha)) {
        return "Fraca: falta um número";
    }

    return "Senha forte ✅";
}

let senha = prompt("Crie uma senha:");

alert(validarSenha(senha));