'use strict';

// // Selecting elements
// const score1 = document.querySelector('#score--0');
// const score2 = document.getElementById('score--1');
// const dice = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const current1 = document.getElementById('current--0');
// const current2 = document.getElementById('current--1');
// const player1 = document.querySelector('.player--0');
// const player2 = document.querySelector('.player--1');
// // Starting conditions
// score1.textContent = 0;
// score2.textContent = 0;
// dice.classList.add('hidden');

// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   // Generating a random dice roll
//   let randomDice = Math.trunc(Math.random() * 6) + 1;
//   //   Display dice
//   dice.classList.remove('hidden');
//   dice.src = `./dice-${randomDice}.png`;

//   // Checking for rolled 1
//   if (randomDice != 1) {
//     // Add dice to current score
//     currentScore += randomDice;
//     document.getElementById(`current--${activePlayer}`).textContent =
//       currentScore;
//   } else {
//     // Switching player
//     document.getElementById(`current--${activePlayer}`).textContent = 0;

//     currentScore = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;

//     player1.classList.toggle('player--active');
//     player2.classList.toggle('player--active');
//   }
// });

// Selecting elements
const score1 = document.querySelector('#score--0');
const score2 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

// Starting conditions
score1.textContent = 0;
score2.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  // Switching player
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

const init = function () {
  dice.classList.add('hidden');

  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;

  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');

  document.getElementById(`name--${activePlayer}`).textContent = `Player ${
    activePlayer + 1
  }`;

  player2.classList.remove('player--active');
  player1.classList.add('player--active');

  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generating a random dice roll
    let randomDice = Math.trunc(Math.random() * 6) + 1;
    //   Display dice
    dice.classList.remove('hidden');
    dice.src = `./dice-${randomDice}.png`;

    // Checking for rolled 1
    if (randomDice != 1) {
      // Add dice to current score
      currentScore += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switching player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if player's score is >= 100
    if (scores[activePlayer] >= 10) {
      dice.classList.add('hidden');
      playing = false;

      document.getElementById(`name--${activePlayer}`).textContent = `Player ${
        activePlayer + 1
      } Win`;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switching player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
