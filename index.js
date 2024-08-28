function somar(valorgasolina, distanciaPercorrida, consumoVeiculo) {
    const litrosNecessarios = distanciaPercorrida / consumoVeiculo;
    const custoTotal = litrosNecessarios * valorgasolina;
    return custoTotal;
}
function mostrarAlerta(mensagem, tipo) {
    const alerta = document.getElementById('alerta');
    alerta.textContent = mensagem;
    alerta.className = `alert ${tipo}`; // Adiciona a classe de tipo (success ou error)
    alerta.style.display = 'block'; // Mostra o alerta
}

function ocultarAlerta() {
    const alerta = document.getElementById('alerta');
    alerta.style.display = 'none'; // Oculta o alerta
}

function total() {
    const valorgasolina = parseFloat(document.getElementById('meuInput1').value);
    const distanciaPercorrida = parseFloat(document.getElementById('meuInput2').value);
    const consumoVeiculo = parseFloat(document.getElementById('meuInput3').value);
    const resposta = document.getElementById('resposta');

    if (isNaN(valorgasolina) || isNaN(distanciaPercorrida) || isNaN(consumoVeiculo)) {
        mostrarAlerta('Por favor, preencha todos os campos com valores numéricos válidos.', 'error');
        return; // Para a execução se algum campo estiver incorreto
    }
    ocultarAlerta(); 
    const resultado = somar(valorgasolina, distanciaPercorrida, consumoVeiculo);
    resposta.textContent = `O total gasto na viagem é R$ ${resultado.toFixed(2)}`;


}