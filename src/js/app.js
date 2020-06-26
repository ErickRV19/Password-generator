var btnGenerar = document.getElementById("generar");
var btncaracter8 = document.getElementById("ochoCarac");
var btncaracter15 = document.getElementById("carac");
var mensaje = document.querySelector(".alerta");
var spacePassword = document.querySelector(".password");
var checkMayuscula = document.getElementById("checkMayuscula");
var checkSimbolos = document.getElementById("checkSimbolos");
let carac = 0,
    aux = 0;

btnGenerar.onclick = function generarPassword() {
    mensaje.removeAttribute("hidden");
    generar();
};

btncaracter8.onclick = function caracter8() {
    carac = 8;
    aux += 1;
};
btncaracter15.onclick = function caracter8() {
    carac = 15;
    aux += 1;
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
        ],
        simbolo = [
            "!",
            "#",
            "$",
            "%",
            "&",
            "(",
            ")",
            "*",
            "+",
            "-",
            "/",
            "<",
            "=",
            ">",
            "?",
            "@",
            "[",
            "]",
            "{",
            "|",
            "}",
        ];
    if (aux == 0) {
        carac = 15;
    }
    for (let i = 0; i < carac; i++) {
        let con = Math.random();
        let numL = Math.round(Math.random() * (25 - 0) + 0);
        let num = Math.round(Math.random() * (9 - 0) + 0);
        if (num < 7) {
            if (checkMayuscula.checked) {
                if (num < 4) {
                    password.push(letras[numL].toUpperCase());
                } else {
                    password.push(letras[numL]);
                }
            } else {
                password.push(letras[numL]);
            }
        }
        if (num >= 7) {
            if (checkSimbolos.checked) {
                if (con == 0) {
                    password.push(num);
                } else {
                    password.push(simbolo[numL]);
                }
            } else {
                password.push(num);
            }
        }
    }

    console.log(password);
    spacePassword.innerHTML = password.join("");
}