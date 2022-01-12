// Enviar só ativa quando a checkbox estiver marcada

let aceito = document.getElementById('agreement')
let botao =  document.getElementById('submit-btn')

aceito.addEventListener('click', function(){
    if (aceito.checked){
        botao.removeAttribute('disabled')
    } else {
        botao.setAttribute('disabled', 'disabled')
    }
})

let login = document.getElementById('login-btn')
let email = document.getElementById('login-input-email')
let password = document.getElementById('login-input-password')

login.addEventListener('click' ,function(){
    if (email.value === 'tryber@teste.com' && password.value === '123456'){
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
})