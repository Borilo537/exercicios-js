const teclaInput = document.querySelector('.tecla-input');

teclaInput.addEventListener('keydown', function (event) {
    if (num === 2) {
        alert("VOCÊ PRESSIONOU: " + event.key.toUpperCase());
    }
})