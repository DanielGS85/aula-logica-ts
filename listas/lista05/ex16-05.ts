function ehPrimo(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function primoAte(max: number): number[] {
    let listaPrimos = [];
    for(let num = 2; num <= max; num++) {
        if(ehPrimo(num)){
            listaPrimos.push(num);
        }
    }
    return listaPrimos;
}
alert(primoAte(Number(prompt("Digite um número para ver todos os primos até ele:"))).join(", "));