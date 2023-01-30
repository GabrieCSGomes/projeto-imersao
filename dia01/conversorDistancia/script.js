var nome = prompt("Qual seu nome?");

var anosLuz = prompt("Quantos anos luz você gostaria de converter?");
var anoLuzEmMetros = 9.461e15;
var anoLuzEmQuilometros = 9.461e12;
var metros = anosLuz * anoLuzEmMetros;
var quilometros = anosLuz * anoLuzEmQuilometros;

alert(
  "Olá, " +
    nome +
    ".\n" +
    "Você pediu que fosse convertido " +
    anosLuz +
    " anos luz.\n" +
    "O valor convertido em metros é: " +
    metros +
    " M.\n" +
    "E o valor convertido em Quilometros é: " +
    quilometros +
    " KM."
);
