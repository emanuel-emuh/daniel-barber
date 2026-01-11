function showSection(sectionId) {
    // 1. Remove a classe 'active' de todo o conteúdo e botões
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // 2. Adiciona 'active' apenas no que foi clicado
    document.getElementById(sectionId).classList.add('active');
    
    // Encontra o botão que chamou a função (baseado no onclick) e ativa ele
    const buttons = document.querySelectorAll('.nav-btn');
    if(sectionId === 'barbearia') {
        buttons[0].classList.add('active');
        document.body.classList.remove('lindalva-mode'); // Volta para cor da barbearia
    } else {
        buttons[1].classList.add('active');
        document.body.classList.add('lindalva-mode'); // Muda para cor da Lindalva
    }
}