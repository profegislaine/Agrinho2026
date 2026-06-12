// --- FUNCIONALIDADE 1: ACESSIBILIDADE (ALTO CONTRASTE) ---
const btnAcessibilidade = document.getElementById('btn-acessibilidade');

btnAcessibilidade.addEventListener('click', () => {
    // Alterna a classe 'alto-contraste' no elemento body
    document.body.classList.toggle('alto-contraste');
    
    // Feedback visual rápido no botão ao clicar
    btnAcessibilidade.style.transform = 'scale(0.9)';
    setTimeout(() => {
        btnAcessibilidade.style.transform = 'none';
    }, 100);
});


// --- FUNCIONALIDADE 2: CONTADORES ANIMADOS (DADOS) ---
const numeros = document.querySelectorAll('.numero');
let animacaoIniciada = false;

function iniciarContagem() {
    numeros.forEach((numero) => {
        const alvo = parseInt(numero.getAttribute('data-alvo'));
        let atual = 0;
        
        // Ajusta a velocidade com base no tamanho do número alvo
        const incremento = alvo / 50; 
        
        const atualizarContador = () => {
            atual += incremento;
            if (atual < alvo) {
                numero.innerText = Math.ceil(atual);
                setTimeout(atualizarContador, 25); // Velocidade da animação (ms)
            } else {
                numero.innerText = alvo; // Garante que termine no número exato
            }
        };
        
        atualizarContador();
    });
}

// Evento de Scroll para acionar a animação quando a seção estiver visível
window.addEventListener('scroll', () => {
    const secaoDados = document.getElementById('dados');
    const posicaoSecao = secaoDados.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    // Se a seção entrar na tela e a animação ainda não tiver ocorrido
    if (posicaoSecao < alturaTela - 100 && !animacaoIniciada) {
        iniciarContagem();
        animacaoIniciada = true; // Evita que a animação rode de novo ao subir/descer a página
    }
});