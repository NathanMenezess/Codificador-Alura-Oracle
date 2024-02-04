function validarTexto(textarea) {
    textarea.value = textarea.value.toLowerCase().replace(/[^a-z]/g, ' ')
}

var vogaisInvertidas = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

function descriptografar() {

    var textoEntrada = document.getElementById("inputTexto").value;
    var textoDescriptografado = "";
    for (var codigo in vogaisInvertidas) {
        if (vogaisInvertidas.hasOwnProperty(codigo)) {

            var regex = new RegExp(codigo, 'g');
            textoEntrada = textoEntrada.replace(regex, vogaisInvertidas[codigo]);
        }
    }

    textoDescriptografado = textoEntrada;
    var resultadoParagrafo = document.querySelector("#area-resultado textarea");
    if (!resultadoParagrafo) {
        resultadoParagrafo = document.createElement("textarea");
        resultadoParagrafo.style.fontSize = "17px";
        resultadoParagrafo.style.fontStyle = "normal";
        resultadoParagrafo.style.fontWeight = "400";
        resultadoParagrafo.style.lineHeight = "100%";
        resultadoParagrafo.style.position = "relative";
        resultadoParagrafo.style.height = "440px";
        resultadoParagrafo.style.border = "none";
        resultadoParagrafo.style.outline = "none";
        resultadoParagrafo.style.resize = "none";
        resultadoParagrafo.setAttribute('id', 'textareaCriadoDescriptografado');

        document.getElementById("area-resultado").appendChild(resultadoParagrafo);


        var ButtonCopiar = document.createElement("button");
        ButtonCopiar.style.fontFamily = "Inter"
        ButtonCopiar.style.color = "#0A3871"
        ButtonCopiar.style.border = "solid 1px #0A3871"
        ButtonCopiar.style.borderRadius = "20px"
        ButtonCopiar.style.padding = "10px 77px"
        ButtonCopiar.innerHTML = "Copiar";
        ButtonCopiar.onclick = function () {
            resultadoParagrafo.select();

            document.execCommand("copy");
        };
        resultadoParagrafo.parentNode.insertBefore(ButtonCopiar, resultadoParagrafo.nextSibling);

    }

    resultadoParagrafo.value = textoDescriptografado;

}


function esconder() {
    var divResultado = document.getElementById("div-resultado");
    divResultado.style.display = "none";
}
function executarDuasFuncoesInvertidas() {
    esconder();
    descriptografar();
}
