let fotos = document.querySelectorAll('.foto');
let indiceAtual = 0;

function mudarFoto(direcao) {
    fotos[indiceAtual].classList.remove('active');
    indiceAtual += direcao;

    if (indiceAtual >= fotos.length) {
        indiceAtual = 0; // Volta para a primeira
    } else if (indiceAtual < 0) {
        indiceAtual = fotos.length - 1; // Volta para a última
    }

    fotos[indiceAtual].classList.add('active');
}

// Inicializa a primeira foto como visível
fotos[indiceAtual].classList.add('active');

// Função para mudar a imagem ao clicar nas miniaturas
function mudarParaImagem(indice) {
    fotos[indiceAtual].classList.remove('active');
    indiceAtual = indice;
    fotos[indiceAtual].classList.add('active');
}
