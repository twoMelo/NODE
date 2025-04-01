// JAVASCRIPT -> SETINTERVAL -> MAIN.JS

let contador = 0;
let intervalo;

function iniciarContador() {
    intervalo = setInterval(() => {
        contador++;
        console.log("Contador: " + contador);
    }, 1000);
}

function pararContador() {
    clearInterval(intervalo);
}

// Inicia o contador automaticamente
iniciarContador();