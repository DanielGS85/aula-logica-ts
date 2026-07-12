function calculadora(a: number, b: number, operacao: string): number {
    if (operacao === "+") {
        return a + b;
    } else if (operacao === "-") {
        return a - b;
    } else if (operacao === "*") {
        return a * b;
    } else if (operacao === "/") {
        return a / b;
    } else {
        return "Operação inválida";
    }
}

let num1: number = Number(prompt("Digite o primeiro número:"));
let num2: number = Number(prompt("Digite o segundo número:"));
let operacao: string = prompt("Digite a operação (+, -, *, /):") || "";

alert(`Resultado: ${calculadora(num1, num2, operacao)}`);