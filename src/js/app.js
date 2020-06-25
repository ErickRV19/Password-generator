var btnGenerar = document.getElementById("generar");
var btncaracter8 = document.getElementById("ochoCarac");
var btncaracter15 = document.getElementById("carac");
var mensaje = document.querySelector(".alerta");
var spacePassword = document.querySelector(".password");
let carac = 0;

btnGenerar.onclick = function generarPassword() {
    mensaje.removeAttribute("hidden");
    generar();
    console.log("click");
};

btncaracter8.onclick = function caracter8() {
    carac = 8;
};
btncaracter15.onclick = function caracter8() {
    carac = 15;
};

function generar() {
    const password = [],
        letras = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "z",
            "y",
            "z",
        ];

    for (let i = 0; i < carac; i++) {
        let con = Math.random();
        let numL = Math.round(Math.random() * (25 - 0) + 0);
        let num = Math.round(Math.random() * (9 - 0) + 0);
        if (con < 0.8) {
            password.push(letras[numL]);
        } else {
            password.push(num);
        }
    }
    console.log(password);
    spacePassword.innerHTML = password.join("");
}