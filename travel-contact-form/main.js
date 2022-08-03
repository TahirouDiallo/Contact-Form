import './style.css';
import javascriptLogo from './travellogo.png';
/*
document.createElement('dev').innerHTML = `
  <div>
    <a href="https://instagram.com/kndtravelservices?igshid=YmMyMTA2M2Y=" target="_blank">
      <img src="/travellogo.png" class="logo" alt="KnD Travel logo" />
    </a>
    <a href="https://instagram.com/kndtravelservices?igshid=YmMyMTA2M2Y=" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="KnD Travel logo" />
    </a>
    <h1>Djenabou Barry- Travel Agent!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

const resultList = document.getElementById('results');
new URLSearchParams(window.location.search).forEach((value, name) => {
  resultList.append(`${name}: ${value}`);
  resultList.append(document.createElement('br'));
});
*/

// Get data
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const success = document.querySelector('#success');
const errorNodes = document.querySelector('.error');

// Validate data
function validateForm() {
  clearMessage();
  let errorFlag = false;

  if (nameInput.ariaValueMax.length < 1) {
    errorNodes[0].innerText = 'Name cannot be blank';
    nameInput.classList.add('error-border');
    errorFlag = true;
  }

  if (!emailIsValid(email.vaule)) {
    errorNodes[1].innerText = 'Invalid email address';
    email.classList.add('error-border');
    errorFlag = true;
  }

  if (message.value.length < 1) {
    errorNodes[2].innerText = 'Invalid email address';
    message.classList.add('error-border');
    errorFlag = true;
  }

  if (!errorFlag) {
    success.innerText = 'success!';
  }
}

// Clear error  / success messages
function clearMessage() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = '';
  }
  success.innerText = '';
  nameInput.classList.remove('error-border');
  email.classList.remove('error-border');
  message.classList.remove('error-border');
}

// Check if email is valid
function emailIsValid(email) {
  const pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
