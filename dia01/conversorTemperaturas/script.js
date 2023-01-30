var nome = prompt("Qual seu nome?");

var celsius = parseInt(prompt("Quantos graus celsius você gostaria de converter?"));

var fahrenheit = (celsius * 1.8) + 32;
var kelvin = celsius + 273;

alert(
  "Olá, " +
    nome +
    ".\n" +
    "Você pediu que fosse convertido " +
    celsius +
    "ºC .\n" + 
    "O valor convertido em Fahrenheit é: " +
    fahrenheit +
    "F.\n" +
    "E o valor convertido em Kelvin é: " +
    kelvin +
    "K."
);