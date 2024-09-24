function calcular() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const operacao = document.getElementById('operacao').value;

    let resultado;

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado = "Por favor, insira valores válidos.";
    } else {
        switch (operacao) {
            case '+':
                resultado = valor1 + valor2;
                break;
            case '-':
                resultado = valor1 - valor2;
                break;
            default:
                resultado = "Operação inválida.";
        }
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}
