var numero = "";
var numeroAnterior = "";
var operadorActual = "";
var expresionCompleta = "";

function Escribir(P_Numero) {
    numero += P_Numero;
    expresionCompleta += P_Numero;
    document.getElementById("num1").value = expresionCompleta;
}

function SeleccionarOperacion(op) {
    if (numero !== "") {
        numeroAnterior = numero;
        operadorActual = op;
        expresionCompleta += "" + op + "";
        document.getElementById("num1").value = expresionCompleta;
        numero = "";
    }
}

function Resultado() {
    if (numero !== "" && numeroAnterior !== "" && operadorActual !== "") {
        var resultado;
        var num1 = Number(numeroAnterior);
        var num2 = Number(numero);

        switch (operadorActual) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    alert("No se puede dividir por cero");
                } else {
                    resultado = num1 / num2;
                }
                break;

            default:
                alert("Operación no válida");
        }

        expresionCompleta += " = " + resultado;
        num1.value = expresionCompleta;
        document.getElementById("num1").value = expresionCompleta;

        numero = resultado.toString();
        numeroAnterior = "";
        operadorActual = "";

    }
}
function Limpiar(){
    expresionCompleta = "";
    num1.value = "";
    document.getElementById("num1").value = "";
    numero = "";
    numeroAnterior = "";
    operadorActual = "";
}