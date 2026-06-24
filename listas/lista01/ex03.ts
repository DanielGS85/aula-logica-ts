let input: string | null = prompt("10");
let numero: number = input !== null ? parseFloat(input) : 0;

let antecessor: number = numero - 1;
let sucessor: number = numero + 1;

alert(`Número: ${numero}`);
alert(`Antecessor: ${antecessor}`);
alert(`Sucessor: ${sucessor}`);