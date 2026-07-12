function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}

const nomeUsuario: string = prompt("Digite seu nome:") || "Usuário";
alert(saudacao(nomeUsuario));