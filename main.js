const randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);
let xAttempts = 1;

function handleClick(event) {
  event.preventDefault();
  const inputNumber = document.querySelector('#inputNumber');

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector('.screenMain').classList.add('hide');
    document.querySelector('.screen-again').classList.remove('hide');
    document.querySelector(
      '.text-again'
    ).innerText = `Você acertou em ${xAttempts} tentativas`;
  }
  xAttempts++;
  console.log(xAttempts);
}

const buttonAgain = document.querySelector('.btn-again');

buttonAgain.addEventListener('click', function handleClickRemove() {
  document.querySelector('.screenMain').classList.remove('hide');
  document.querySelector('.screen-again').classList.add('hide');
});
