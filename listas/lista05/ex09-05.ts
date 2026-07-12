function celciusToFahrenheit(celsius: number): number {
  return (celsius * 9/5) + 32;
}

let celsius: number = Number(prompt("Digite a temperatura em Celsius:"));
alert(`${celsius}°C é igual a ${celciusToFahrenheit(celsius)}°F`);