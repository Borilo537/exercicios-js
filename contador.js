const numeroContador = document.querySelector('.numero-contador')
const botaoContador = document.querySelector('.botao-contador')

function contadorFun() {
    if (num === 1) {
        numeroContador.value = parseInt(numeroContador.value) + 1;
    }
}
botaoContador.addEventListener('click', contadorFun)
