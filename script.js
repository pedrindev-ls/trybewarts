let aceito = document.getElementById('agreement')
let botao =  document.getElementById('submit-btn')

// if (aceito.checked){
//     botao.setAttribute('disabled', null)
// }

aceito.addEventListener('click', function(){
    if (aceito.checked){
        botao.removeAttribute('disabled')
    } else {
        botao.setAttribute('disabled', 'disabled')
    }
})