const formInput = document.querySelector('.form-input')
const botaoForm = document.querySelector('.botao-form')
const olhos = document.querySelector('.olhos')
const olhos2 = document.querySelector('.olhos2')

botaoForm.addEventListener('click', enviar)
function enviar() {
    if(num === 5){
        if (formInput.value === '') {
            formInput.style.transition = ''
            formInput.style.backgroundColor = 'red';
            olhos.style.transition = ''
            olhos.style.opacity =  '1'
            olhos2.style.transition = ''
            olhos2.style.opacity =  '1'
            setTimeout(() => {
                formInput.style.transition = '3s'
                formInput.style.backgroundColor = '';
                olhos.style.transition = '1s'
                olhos.style.opacity =  ''
                olhos2.style.transition = '1s'
                olhos2.style.opacity =  ''
            }, 100);
        } else {
            alert('BOA!')
            formInput.style.backgroundColor = '';
        }
    }
}