const mainText = document.querySelector(".main-text")
const contador = document.querySelector(".contador")
const teclas = document.querySelector(".teclas")
const botao = document.querySelector('.botao')
const imgem = document.querySelector('.img')
const form = document.querySelector('.form')
let num = 1
verificarNum()

function verificarNum() {
    console.log(num)
    if (num == 1) {
        mainText.innerHTML = 'Contador de Cliques'
        contador.style.opacity = '1'
        contador.style.zIndex = '10'
    } if (num == 2) {
        mainText.innerHTML = 'Captura de Teclas'
        teclas.style.opacity = '1'
        teclas.style.zIndex = '10'
    } if (num == 3) {
        mainText.innerHTML = 'Botão de Mensagem'
        botao.style.opacity = '1'
        botao.style.zIndex = '10'
    } if (num == 4) {
        mainText.innerHTML = 'Imagem Hover'
        imgem.style.opacity = '1'
        imgem.style.zIndex = '10'
    } if (num == 5) {
        mainText.innerHTML = 'Validador'
        form.style.opacity = '1'
        form.style.zIndex = '10'
    }
}

const esquerda = document.querySelector(".esquerda")
const direita = document.querySelector(".direita")

function esquerdaClick() {
    contador.style.opacity = '0'
    contador.style.zIndex = '0'
    teclas.style.opacity = '0'
    teclas.style.zIndex = '0'
    botao.style.opacity = '0'
    botao.style.zIndex = '0'
    imgem.style.opacity = '0'
    imgem.style.zIndex = '0'
    form.style.opacity = '0'
    form.style.zIndex = '0'
    if(num === 1){
        num = 5
    }else{
        num -= 1
    }
    setTimeout(() => {
        verificarNum()
    }, 500);
}
esquerda.addEventListener('click', esquerdaClick)

function direitaClick() {
    contador.style.opacity = '0'
    contador.style.zIndex = '0'
    teclas.style.opacity = '0'
    teclas.style.zIndex = '0'
    botao.style.opacity = '0'
    botao.style.zIndex = '0'
    imgem.style.opacity = '0'
    imgem.style.zIndex = '0'
    form.style.opacity = '0'
    form.style.zIndex = '0'
    if(num === 5){
        num = 1
    }else{
        num += 1
    }
    setTimeout(() => {
        verificarNum()
    }, 500);
}
direita.addEventListener('click', direitaClick)