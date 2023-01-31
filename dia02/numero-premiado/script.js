function surpresa (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  var premiado = parseInt(surpresa(1,1001));
  var contador = 0;
  var tentativa = 10;
  
  while (numero != premiado) {
    var numero = prompt("Tente acerta o número premiado!\n" + "Você tem ainda tem " + tentativa + " para acertar o número");
    if (tentativa == 1) {
      alert ("Você usou todas suas tentativas, o número premiado é: " + premiado);
      break;
    }
    if (numero == premiado) {
      alert("ACERTOU!!! \nVocê ganhou a maquina acertando o número!\n" + "Para ganhar você tentou: " + contador + " de vezes.");
     } else if (numero > premiado) {
       alert("O número é menor que isso");
     } else if (numero < premiado) {
       alert("O número é maior que isso");
     }
    contador ++;
    tentativa --;
  }