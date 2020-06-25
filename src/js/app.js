var btnGenerar = document.getElementById('generar');
var mensaje = document.querySelector('.alerta');



btnGenerar.onclick = function generarPassword() {
    mensaje.removeAttribute('hidden');
    console.log('click');
}