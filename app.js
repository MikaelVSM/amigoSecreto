let amigos = [];



function adicionarAmigo() {

// Captura o valor inserido no campo de texto com id="amigo"

let nomeAmigo = document.getElementById('amigo').value;


// Valida se o nome não está vazio

if (nomeAmigo.trim() === '') {

alert('Por favor, insira um nome.');

return; // Não continua a execução se o campo estiver vazio

}


// Adiciona o nome à lista de amigos

amigos.push(nomeAmigo);


// Limpa o campo de entrada

document.getElementById('amigo').value = '';


// Exibe a lista de amigos na tela

exibirListaDeAmigos();

}



function exibirListaDeAmigos() {

// Exibe a lista de amigos na tela

let listaAmigos = document.getElementById('listaAmigos');

listaAmigos.innerHTML = ''; // Limpa a lista antes de exibir novamente



amigos.forEach(function(amigo) {

let li = document.createElement('li');

li.textContent = amigo;

listaAmigos.appendChild(li);

});

}



function sortearAmigo() {

if (amigos.length === 0) {

alert('Adicione pelo menos um amigo antes de sortear.');

return;

}



// Embaralha a lista de amigos (sorteio)

let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];



// Exibe o amigo sorteado

exibirTextoNaTela('#resultado', 'Amigo sorteado: ' + amigoSorteado);

}



function exibirTextoNaTela(tag, texto) {

let campo = document.querySelector(tag);

campo.innerHTML = texto;

}