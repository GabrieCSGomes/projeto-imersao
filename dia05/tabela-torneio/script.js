var listaJogadores = [
  {
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9yq_Vf1m0e4di4KZqOQ97HxnpCS-OOU8b4Q&usqp=CAU",
  	nome: "Gabriel",
  	vitoria: 0,
  	empate: 0,
  	derrota: 0,
  	pontos: 0
  }
];

exibirNaTela()

function exibirNaTela() {
  tabelaJogadores.innerHTML = "";
  listaJogadores.forEach((jogador) =>{
  	tabelaJogadores.innerHTML += `
			<tr>
    		<td><img src = "${jogador.foto}" class= "foto" ></td>
				<td>${jogador.nome}</td>
				<td>${jogador.vitoria}</td>
    		<td>${jogador.empate}</td>
    		<td>${jogador.derrota}</td>
    		<td>${jogador.pontos}</td>
    		<td><button onClick="adicionarVitoria('${jogador.nome}')">Vitória</button></td>
    		<td><button onClick="adicionarEmpate()">Empate</button></td>
    		<td><button onClick="adicionarDerrota('${jogador.nome}')">Derrota</button></td>
			</tr>
		`;
  });
}

function adicionarVitoria(nome) {
	listaJogadores.forEach((jogador) => {
    if (jogador.nome != nome) {
      jogador.derrota++;
    } else {
      jogador.vitoria++;
      jogador.pontos = jogador.pontos + 3;
    }
  });
  exibirNaTela();
}
  

function adicionarEmpate() {
  listaJogadores.forEach((jogador) => {
    jogador.empate++;
    jogador.pontos++
  });
  exibirNaTela();
}

function adicionarDerrota(nome) {
	listaJogadores.forEach((jogador) => {
    if (jogador.nome != nome) {
      jogador.vitoria++;
      jogador.pontos = jogador.pontos + 3;
    } else {
      jogador.derrota++;
    }
  });
  exibirNaTela();
}

function reniciarDisputa() {
  listaJogadores.forEach((jogador) => {
    jogador.vitoria = 0;
    jogador.derrota = 0;
    jogador.empate = 0;
    jogador.pontos = 0;
  });
  exibirNaTela();
}

function novoJogador() {
  nomeNovoJogador = document.getElementById("nomeNovoJogador").value;
  avatarNovoJogador = document.getElementById("avatarNovoJogador").value;
  
  if (nomeNovoJogador.length == 0 || avatarNovoJogador.length == 0 ||
    (!avatarNovoJogador.endsWith("jpg") && !avatarNovoJogador.endsWith("png"))
  ) {
    alert("Informação Invalida");
    return;
  }
  listaJogadores[listaJogadores.length] = {
    nome: nomeNovoJogador,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };

  document.querySelector("input[id=nomeNovoJogador]").value = "";
  document.querySelector("input[id=avatarNovoJogador]").value = "";

  exibirNaTela();
}
