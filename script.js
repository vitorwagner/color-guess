const balls = document.querySelectorAll('.ball');
const guessAnswer = document.getElementById('answer');
const scoreBoard = document.getElementById('score');

function randomColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}

function assignRandomPalette() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = randomColor();
  }
  const rgbIndex = Math.floor(Math.random() * (balls.length));
  document.getElementById('rgb-color').innerHTML = balls[rgbIndex].style.backgroundColor.slice(3);
}

window.onload = assignRandomPalette;

function checkAnswer() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', (event) => {
      const colorGuess = `rgb${document.getElementById('rgb-color').innerHTML}`;
      if (event.target.style.backgroundColor === colorGuess) {
        guessAnswer.innerHTML = 'Acertou!';
        scoreBoard.innerHTML = parseInt(scoreBoard.innerHTML, 10) + 3;
        assignRandomPalette();
      } else {
        guessAnswer.innerHTML = 'Errou! Tente novamente!';
        assignRandomPalette();
      }
    });
  }
}

checkAnswer();
