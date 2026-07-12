let precos = [50, 120, 30, 200, 90];

// filter mantém só quem passa no teste
let caros = precos.filter(p => p > 100);

alert("Acima de 100: " + caros.join(", "));