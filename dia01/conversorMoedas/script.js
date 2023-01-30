var nome = prompt("Qual seu nome?");
var valorEmDolar = prompt(nome + ". Quantos dolares você tem?");

var cotacaoDolar = 5.32;
var cotacaoEuro = 0.92;
var cotacaoYen = 130.4;
var cotacaoBitcoin = 0.000044;

var valorEmReal = valorEmDolar * cotacaoDolar;
var valorEmEuro = valorEmDolar * cotacaoEuro;
var valorEmYen = valorEmDolar * cotacaoYen;
var valorEmBitcoin = valorEmDolar * cotacaoBitcoin;

alert(
  "Olá, " +
    nome +
    ".\n" +
    "Você tem a quantia de: $" +
    valorEmDolar +
    " dolares.\n" +
    "O valor convertido em Real é: R$" +
    valorEmReal.toFixed(2) +
    ".\n" +
    "O valor convertido em Euro é: €" +
    valorEmEuro.toFixed(2) +
    ".\n" +
    "O valor convertido em Yen é: ¥" +
    valorEmYen.toFixed(2) +
    ".\n" +
    "O valor convertido em Bitcoin é: ₿" +
    valorEmBitcoin +
    "."
);
