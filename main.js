function calcular() {
    // Obtener los valores de los inputs
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let operacion = document.getElementById('operacion').value;
    let resultado;

    // Verificar si los números son válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingresa números válidos");
        return;
    }

    // Realizar la operación seleccionada
    switch(operacion) {
        case "sumar":
            resultado = numero1 + numero2;
            break;
        case "restar":
            resultado = numero1 - numero2;
            break;
        case "multiplicar":
            resultado = numero1 * numero2;
            break;
        case "dividir":
            if (numero2 === 0) {
                alert("No se puede dividir por cero");
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            alert("Operación no válida");
            return;
    }

    // Mostrar el resultado
    document.getElementById('resultado').innerText = "Resultado: " + resultado;
}

