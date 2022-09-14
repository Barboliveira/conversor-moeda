function converterDolarReal() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    
    var valorEmReal = valorEmDolarNumerico * 5.21;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
}

function converterEuroReal() {
    var valorElemento = document.getElementById("valor2")
    var valor2 = valorElemento.value;
    var valorEmEuroNumerico = parseFloat(valor2);
    
    var valorEmReal = valorEmEuroNumerico * 5.22;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido2");
    var valorConvertido2 = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido2;
}