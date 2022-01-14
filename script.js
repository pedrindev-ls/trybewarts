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
  console.log(caracteres - obsEvaluation.selectionEnd);
});

// Pagina Final

const nameEvaluation = document.getElementById('input-name');
const lastnameEvaluation = document.getElementById('input-lastname');
const emailEvaluation = document.getElementById('input-email');
const houseEvaluation = document.getElementById('house');
const familyEvaluation = document.getElementsByName('family');
const subjectsEvaluation = document.getElementsByName('subjects');
const rateEvaluation = document.getElementsByName('rate');

const info = {
  Nome: '',
  Email: '',
  Casa: '',
  Familia: '',
  Materias: '',
  Avaliacao: '',
  Observacoes: '',
};

function searchFamily() {
  let familia = '';

  for (let i = 0; i < familyEvaluation.length; i + 1) {
    if (familyEvaluation[i].checked) {
      familia = familyEvaluation[i].value;
      console.log(familia);
    }
  }

  info.Familia = familia;
}

function searchRate() {
  let rate = '';

  for (let i = 0; i < rateEvaluation.length; i + 1) {
    if (rateEvaluation[i].checked) {
      rate = rateEvaluation[i].value;
      console.log(rate);
    }
  }
  
  info.Avaliacao = rate
}

function searchSubjects() {
  let materia = '';

  for (let i = 0; i < subjectsEvaluation.length; i + 1) {
    if (subjectsEvaluation[i].checked) {
      materia = `${materia}
      ${subjectsEvaluation}`;
      console.log(materia);
    }
  }
  info.Materias = materia;
}

botao.addEventListener('click', searchFamily, searchRate, searchSubjects, () => {
  info.Nome = `${nameEvaluation.value}  ${lastnameEvaluation.value}`;
  info.Email = emailEvaluation.value;
  info.Casa = houseEvaluation.value;
  info.Observacoes = obsEvaluation.value;

  console.log(info);
});
