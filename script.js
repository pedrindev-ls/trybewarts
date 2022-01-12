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

//Valida o Email na aba de login do header

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

//Pagina Final

let nameEvaluation = document.getElementById("input-name")
let lastnameEvaluation = document.getElementById("input-lastname")
let emailEvaluation = document.getElementById("input-email")
let houseEvaluation = document.getElementById("house")
let familyEvaluation = document.getElementsByName('family')
let subjectsEvaluation = document.getElementsByName('subjects')
let rateEvaluation = document.getElementsByName("rate")
let obsEvaluation = document.getElementById("textblock")

botao.addEventListener('click', function(){
    for (i = 0; i < familyEvaluation.length; i++){
        if(familyEvaluation[i].checked){
            let familia = familyEvaluation[i].value
            console.log(familia)
        }
    }
    
    for (i = 0; i < subjectsEvaluation.length; i++){
        if(subjectsEvaluation[i].checked){
            let materia = subjectsEvaluation[i].value
            console.log(materia)
        }
    }
    
    for (i = 0; i < rateEvaluation.length; i++){
        if(rateEvaluation[i].checked){
            let rate = rateEvaluation[i].value
            console.log(rate)
        }
    }


})