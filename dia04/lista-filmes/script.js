var listaNomesFilmes = []

function adicionarFilme() {
  var nomeFilme = document.getElementById("nome").value
  
  if(listaNomesFilmes.includes(nomeFilme)) {
    alert('Filme ja cadastrado!')
    return
  }
  
  var capa = document.getElementById("filme").value
  var trailer = document.getElementById("trailer").value
  
  var extensoesValidas = ['.jpg', '.jpeg', '.gif', '.png', '.webp'];
  if(!extensoesValidas.some(extensao => capa.toLowerCase().endsWith(extensao))) {
    alert('Url inválida!')
    return; 
  }
  
  var listaFilmes = document.getElementById("listaFilmes")  
  
  var filme = '<p><a href=' + trailer + 'target="_blank">' + '<img src=' + capa + '></a>' + nomeFilme + '<button onClick=removerFilme()>Excluir</button></p>'
    
  listaFilmes.innerHTML = listaFilmes.innerHTML + filme

	listaNomesFilmes.push(nomeFilme); 
  
  document.getElementById("filme").value = ''
  document.getElementById("nome").value = ''
  document.getElementById("trailer").value = ''
}

function removerFilme() {
  //pesquisar sobre event listenter do JavaScript
}