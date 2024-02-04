function validarTexto(textarea) {
    textarea.value = textarea.value.toLowerCase().replace(/[^a-z]/g, ' ')
}

var vogais = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function criptografar() {
    var texto = document.getElementById("inputTexto").value;
    var textoCodificado = "";

    for (var i = 0; i < texto.length; i++) {
        var caractere = texto[i];
        if (vogais[caractere]) {
            textoCodificado += vogais[caractere];
        } else {
            textoCodificado += caractere;
        }
    }

    var resultadoParagrafo = document.querySelector("#area-resultado textarea");
    if (!resultadoParagrafo) {
        resultadoParagrafo = document.createElement("textarea");
        resultadoParagrafo.style.fontSize = "17px";
        resultadoParagrafo.style.fontStyle = "normal";
        resultadoParagrafo.style.fontWeight = "400";
        resultadoParagrafo.style.lineHeight = "100%";
        resultadoParagrafo.style.position = "relative";
        resultadoParagrafo.style.height = "500px";
        resultadoParagrafo.style.border = "none";
        resultadoParagrafo.style.outline = "none";
        resultadoParagrafo.style.resize = "none";
        resultadoParagrafo.setAttribute('id', 'textareaCriadocriptografado');
        document.getElementById("area-resultado").appendChild(resultadoParagrafo);

        var ButtonCopiarTwo = document.createElement("button");
        ButtonCopiarTwo.style.fontFamily = "Inter"
        ButtonCopiarTwo.style.color = "#0A3871"
        ButtonCopiarTwo.style.border = "solid 1px #0A3871"
        ButtonCopiarTwo.style.borderRadius = "20px"
        ButtonCopiarTwo.style.padding = "10px 77px"
        ButtonCopiarTwo.innerHTML = "Copiar";
        ButtonCopiarTwo.setAttribute('id', 'buttonCopiar');
        ButtonCopiarTwo.onclick = function() {
            resultadoParagrafo.select();
            document.execCommand("copy");
        };

        resultadoParagrafo.parentNode.insertBefore(ButtonCopiarTwo, resultadoParagrafo.nextSibling);
    }

    resultadoParagrafo.value += textoCodificado;
}

function esconder() {
    document.getElementById("div-resultado").style.display = "none";
}

function executarDuasFuncoes() {
    esconder();
    criptografar();
}
