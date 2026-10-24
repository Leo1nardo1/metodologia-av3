document.addEventListener('DOMContentLoaded', () => {
    console.log('Módulo 1 (Aprender) carregado com sucesso.');

    // Seleciona todos os botões do accordion
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Podemos usar isso para rastrear qual tópico o aluno mais estuda (OPCIONAL)
            const targetId = button.getAttribute('data-bs-target');
            console.log(`Usuário interagiu com o tópico: ${targetId}`);
            
            // Futuramente, podemos salvar no localStorage que o aluno já viu este tópico (OPCIONAL)
            // localStorage.setItem(`topico_visto_${targetId}`, 'true'); (OPCIONAL)
        });
    });
});