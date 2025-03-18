// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];

let ulListaAmigos = document.getElementById("listaAmigos");



function agregarAmigo(){

    let textousuario = document.getElementById('amigo').value;    
    if( !(textousuario == null || textousuario.length == 0 || /^\s+$/.test(textousuario)) ) { 
        amigos.push(textousuario);
        mostrarListaAmigo();
    } else {
        alert("Por favor, inserte un nombre.")
    }
    actualizarCampo();
    return;

}


function mostrarListaAmigo() {

    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
  
    for (let i = 0; i < amigos.length; i++) {
      const elemento = amigos[i];
  
      let listaHTML = document.createElement("li");
      listaHTML.textContent = elemento;
      listaAmigos.appendChild(listaHTML);
    }

}


function actualizarCampo() {

    document.querySelector('#amigo').value = '';
    return;

}


function sorteoAmigo() {

    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    let ganador = document.getElementById('resultado');
    ganador.innerHTML = amigos[numeroAleatorio];

}


