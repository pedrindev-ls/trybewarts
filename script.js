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

//Contador

let obsEvaluation = document.getElementById("textarea")
let contador = document.getElementById('counter')
let caracteres = 500

obsEvaluation.addEventListener('input', function(event){
    contador.innerText = (caracteres - obsEvaluation.selectionEnd)
    console.log(caracteres - obsEvaluation.selectionEnd)
})

//Pagina Final

let nameEvaluation = document.getElementById("input-name")
let lastnameEvaluation = document.getElementById("input-lastname")
let emailEvaluation = document.getElementById("input-email")
let houseEvaluation = document.getElementById("house")
let familyEvaluation = document.getElementsByName('family')
let subjectsEvaluation = document.getElementsByName('subjects')
let rateEvaluation = document.getElementsByName("rate")

info = {
    Nome: nameEvaluation.value + " " + lastnameEvaluation.value,
    Email: emailEvaluation.value,
    Casa: houseEvaluation.value,
    Familia: '',
    Materias: '',
    Avaliacao: '',
    Observacoes: obsEvaluation.value,
};

botao.addEventListener('click', function(){
    
    info.Nome = nameEvaluation.value + " " + lastnameEvaluation.value;
    info.Email = emailEvaluation.value;
    info.Casa = houseEvaluation.value;
    info.Observacoes = obsEvaluation.value;
    
    let familia = '';
    let materia = '';
    let rate = '';

    for (i = 0; i < familyEvaluation.length; i++){
        if(familyEvaluation[i].checked){
            familia =familyEvaluation[i].value
            console.log(familia)
        }
    }

    info.familia = familia
    
    for (i = 0; i < subjectsEvaluation.length; i++){
        if(subjectsEvaluation[i].checked){
            materia = materia + ' ' + subjectsEvaluation[i].value
            console.log(materia)
        }
    }

    info.Materias = materia
    
    for (i = 0; i < rateEvaluation.length; i++){
        if(rateEvaluation[i].checked){
            rate = rateEvaluation[i].value
            console.log(rate)
        }
    }

    info.Avaliacao = rate

    console.log(info)
    console.log(info.Avaliacao)
    console.log(info.Observacoes)

})