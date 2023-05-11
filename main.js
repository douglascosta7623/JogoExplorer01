let randomNumber = Math.round(Math.random() * 10);
const screenMain = document.querySelector('.screenMain');
const screenAgain = document.querySelector('.screen-again');
const buttonTry = document.querySelector('#btnTry');
const buttonAgain = document.querySelector('#btn-again');
console.log(randomNumber);
let xAttempts = 1;

function handleTryClick(event) {
  event.preventDefault();
  const inputNumber = document.querySelector('#inputNumber');

  if (Number(inputNumber.value) == '') {
    alert('Favor colocar um número');
  } else if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert('Utiliza número de 0 a 10');
  } else if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    screenAgain.querySelector(
      '.text-again'
    ).innerText = `Você acertou em ${xAttempts} tentativas`;
  }
  inputNumber.value = '';
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
  console.log(randomNumber);
}

buttonTry.addEventListener('click', handleTryClick);

buttonAgain.addEventListener('click', handleResetClick);

document.addEventListener('keydown', handleResetClickEnter);

function toggleScreen() {
  screenMain.classList.toggle('hide');
  screenAgain.classList.toggle('hide');
}

function handleResetClickEnter(e) {
  if (e.key == 'Enter' && screenMain.classList.contains('hide')) {
    handleResetClick();
  }
}
