'use strict';
const dice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
let activePlayer = 0;
let currentCount0 = 0;
let currentCount1 = 0;
let scoreCount0 = 0;
let scoreCount1 = 0;

dice.classList.add('hidden');

rollBtn.addEventListener('click', () => {
  const num = rollDice();
  console.log(num);
  dice.src = `dice-${num}.png`;

  if (num === 1) {
    if (activePlayer === 0) {
      currentCount0 = 0;
      showCurrent(0);
      switchPlyaer();
    } else {
      currentCount1 = 0;
      showCurrent(1);
      switchPlyaer();
    }
  } else {
    if (activePlayer === 0) {
      currentCount0 = currentCount0 + num;
      showCurrent(0);
    } else {
      currentCount1 = currentCount1 + num;
      showCurrent(1);
    }
  }
});

holdBtn.addEventListener('click', holdScore);

newBtn.addEventListener('click', reset);

function rollDice() {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  return randomNum;
}

function showCurrent(p) {
  if (p === 0) {
    current0.innerHTML = currentCount0;
  } else {
    current1.innerHTML = currentCount1;
  }
}

function showScore(p) {
  if (p === 0) {
    score0.innerHTML = scoreCount0;
  } else {
    score1.innerHTML = scoreCount1;
  }
}

function holdScore() {
  if (activePlayer === 0) {
    scoreCount0 = scoreCount0 + currentCount0;
    currentCount0 = 0;
    if (scoreCount0 >= 100) {
      showCurrent(0);
      showScore(0);
      player0.classList.add('player--winner');
    } else {
      showCurrent(0);
      showScore(0);
      switchPlyaer();
    }
  } else {
    scoreCount1 = scoreCount1 + currentCount1;
    currentCount1 = 0;
    if (scoreCount1 >= 100) {
      showCurrent(1);
      showScore(1);
      player1.classList.add('player--winner');
    } else {
      showCurrent(1);
      showScore(1);
      switchPlyaer();
    }
  }
}

function switchPlyaer() {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

function reset() {
  activePlayer = 0;
  currentCount0 = 0;
  currentCount1 = 0;
  scoreCount0 = 0;
  scoreCount1 = 0;
  showCurrent(1);
  showScore(1);
  showCurrent(0);
  showScore(0);
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
}
