const botaoMensagem = document.querySelector('.botao')

function mensagemBotao() {
    if (num === 3) {
        alert('Não clique em mim!')
    }
}
botaoMensagem.addEventListener('click', mensagemBotao)