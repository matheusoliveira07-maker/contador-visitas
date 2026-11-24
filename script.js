// Quando o documento carregar
document.addEventListener("DOMContentLoaded", () => {
    // Pega o elemento onde o número será exibido
    const numeroVisitasElement = document.getElementById("numero-visitas");

    // Usa o localStorage para simular um banco de dados (para testes locais)
    // Quando você subir para o servidor, isso será substituído por uma API real.
    let visitas = localStorage.getItem("visitas_site");

    if (visitas) {
        visitas = parseInt(visitas) + 1;
    } else {
        visitas = 1; // Primeira visita
    }

    // Salva o novo valor
    localStorage.setItem("visitas_site", visitas);

    // Função para animar o contador subindo os números (Efeito visual legal)
    function animarContador(elemento, valorFinal) {
        let valorAtual = 0;
        const incremento = Math.ceil(valorFinal / 50); // Velocidade da animação
        const duracao = 1500; // 1.5 segundos
        const passo = duracao / (valorFinal / incremento);

        const timer = setInterval(() => {
            valorAtual += incremento;
            if (valorAtual >= valorFinal) {
                elemento.innerText = valorFinal;
                clearInterval(timer);
            } else {
                elemento.innerText = valorAtual;
            }
        }, passo);
    }

    // Inicia a animação
    animarContador(numeroVisitasElement, visitas);
});