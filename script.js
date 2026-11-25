document.addEventListener("DOMContentLoaded", () => {
    const numeroVisitasElement = document.getElementById("numero-visitas");
    
    // Usando a API do Abacus (mais estável)
    // O nome 'ure_leste_3_visitas' é o identificador do seu contador. Não mude.
    fetch('https://abacus.jasonkelly.dev/api/v1/counter/ure_leste_3_visitas/up')
        .then(response => response.json())
        .then(data => {
            // A API do Abacus retorna o número na variável 'value'
            const totalVisitas = data.value;
            animarContador(numeroVisitasElement, totalVisitas);
        })
        .catch(error => {
            console.error("Erro ao buscar contador:", error);
            // Se der erro, mostra 0 (ou pode colocar um número de teste)
            animarContador(numeroVisitasElement, 0); 
        });

    function animarContador(elemento, valorFinal) {
        if (isNaN(valorFinal)) valorFinal = 0; 

        let valorAtual = 0;
        // Se o número for muito grande, ajusta a velocidade
        const incremento = Math.ceil(valorFinal / 50) || 1; 
        const duracao = 1500; 
        const passo = duracao / (valorFinal / incremento) || 50;

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
});