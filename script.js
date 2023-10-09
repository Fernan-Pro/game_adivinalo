// El juego selecciona un numero alzar para que adivines
let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intentos = document.getElementById("intentos");
let intento = 0

//Chequear el resultado
function resultado() {
    intento ++
    intentos.textContent = `Numero de intentos: ${intento}`
  let numeroIngresado = parseInt(numeroEntrada.value);

  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    mensaje.textContent = "Por favor, introduce un numero valido entre 1 y 100";
    mensaje.style.color = "black";
    return;
  }
  if (numeroIngresado === numeroAzar) {
    mensaje.textContent = "¡Felicitaciones has adivinado el numero!";
    mensaje.style.color = "green";
    numeroEntrada.disable = true;
  } else if (numeroIngresado < numeroAzar) {
    mensaje.textContent = "¡El numero es mayor!";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "¡El numero es menor!";
    mensaje.style.color = "red";
  }
}
