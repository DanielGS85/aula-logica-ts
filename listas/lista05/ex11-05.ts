function saudcaoHorario(nome: string, hora: number): string {
  if (hora >= 0 && hora < 12) {
    return `Bom dia, ${nome}!`;
  } else if (hora >= 12 && hora < 18) {
    return `Boa tarde, ${nome}!`;
  } else if (hora >= 18 && hora <= 23) {
    return `Boa noite, ${nome}!`;
  } else {
    return "Hora inválida!";
  }
}

let nome: string = prompt("Digite seu nome:");
let hora: number = Number(prompt("Digite a hora atual (0-23):"));
alert(saudcaoHorario(nome, hora));