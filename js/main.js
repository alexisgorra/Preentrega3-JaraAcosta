function convertir(){
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var usd = 351;
    var cad = 134;
    if (document.getElementById("1").checked){
        resultado = valore / usd;
        alert("El Cambio de Pesos argentinos a Dolares es: $" + resultado.toFixed(3));
    }
    if (document.getElementById("2").checked){
        resultado = valore / cad;
        alert("El Cambio de Pesos argentinos a Canadian Dollars es: $" + resultado.toFixed(3));
    }
}