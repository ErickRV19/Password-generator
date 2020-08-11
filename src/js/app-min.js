(() => {
    var e = document.getElementById("generar");
    (btncaracter8 = document.getElementById("ochoCarac")),
    (btncaracter15 = document.getElementById("carac")),
    (mensaje = document.querySelector(".alerta")),
    (spacePassword = document.querySelector(".password")),
    (checkMayuscula = document.getElementById("checkMayuscula")),
    (checkSimbolos = document.getElementById("checkSimbolos")),
    (recomendacion = document.querySelector(".recomendacion")),
    (checkpalabra = document.getElementById("checkpalabra"));
    let c = 0,
        n = 0;
    (e.onclick = function() {
        mensaje.removeAttribute("hidden"),
            (function() {
                const e = [],
                    t = [
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
                    a = [
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
                0 == n && (c = 15);
                for (let n = 0; n < c; n++) {
                    let c = Math.random();
                    (numL = Math.round(25 * Math.random() + 0)),
                    (num = Math.round(9 * Math.random() + 0)),
                    num < 7 &&
                        (checkMayuscula.checked && num < 4 ?
                            e.push(t[numL].toUpperCase()) :
                            e.push(t[numL])),
                        num >= 7 &&
                        (checkSimbolos.checked ?
                            0 == c ?
                            e.push(num) :
                            e.push(a[numL]) :
                            e.push(num));
                }
                spacePassword.innerHTML = e.join("");
            })();
    }),
    (btncaracter8.onclick = function() {
        (c = 8),
        recomendacion.removeAttribute("hidden"),
            (recomendacion.innerHTML =
                "!!! Se recomienda 15 caracteres para mayor seguridad !!!"),
            (n += 1);
    }),
    (btncaracter15.onclick = function() {
        recomendacion.setAttribute("hidden", ""), (c = 15), (n += 1);
    });
})();