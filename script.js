// Enviar só ativa quando a checkbox estiver marcada

const aceito = document.getElementById('agreement');
const botao = document.getElementById('submit-btn');

aceito.addEventListener('click', () => {
  if (aceito.checked) {
    botao.removeAttribute('disabled');
  } else {
    botao.setAttribute('disabled', 'disabled');
  }
});

// Valida o Email na aba de login do header

const login = document.getElementById('login-btn');
const email = document.getElementById('login-input-email');
const password = document.getElementById('login-input-password');

login.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Contador

const obsEvaluation = document.getElementById('textarea');
const contador = document.getElementById('counter');
const caracteres = 500;

obsEvaluation.addEventListener('input', () => {
  contador.innerText = (caracteres - obsEvaluation.selectionEnd);
});

// Pagina Final

const nameEvaluation = document.getElementById('input-name');
const lastnameEvaluation = document.getElementById('input-lastname');
const emailEvaluation = document.getElementById('input-email');
const houseEvaluation = document.getElementById('house');
const familyEvaluation = document.getElementsByName('family');
const subjectsEvaluation = document.getElementsByName('subjects');
const rateEvaluation = document.getElementsByName('rate');
const formulario = document.getElementById('evaluation-form');

const info = {
  Nome: '',
  Email: '',
  Casa: '',
  Família: '',
  Matérias: '',
  Avaliação: '',
  Observações: '',
};

function searchFamily() {
  let familia = '';

  for (let i = 0; i < familyEvaluation.length; i += 1) {
    if (familyEvaluation[i].checked) {
      familia = familyEvaluation[i].value;
    }
  }

  info.Família = familia;
}

function searchRate() {
  let rate = '';

  for (let i = 0; i < rateEvaluation.length; i += 1) {
    if (rateEvaluation[i].checked) {
      rate = rateEvaluation[i].value;
    }
  }

  info.Avaliação = rate;
}

function searchSubjects() {
  let materia = '';

  for (let i = 0; i < subjectsEvaluation.length; i += 1) {
    if (subjectsEvaluation[i].checked) {
      materia = `${materia}${subjectsEvaluation[i].value}, `;
    }
  }
  info.Matérias = materia;
}

botao.addEventListener('click', (event) => {
  event.preventDefault(event);
  info.Nome = `${nameEvaluation.value}  ${lastnameEvaluation.value}`;
  info.Email = emailEvaluation.value;
  info.Casa = houseEvaluation.value;
  info.Observações = obsEvaluation.value;
  searchFamily();
  searchRate();
  searchSubjects();

  formulario.innerText = '';

  // const paragrafo = document.getElementsByClassName('resultado-do-formulario');
  for (let index = 0; index < Object.keys(info).length; index += 1) {
    formulario.innerText += `${Object.keys(info)[index]}: ${Object.values(info)[index]}
    `;
  }
  console.log(info);
});
