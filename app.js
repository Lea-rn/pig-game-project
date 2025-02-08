"use strict";

let score0 = document.getElementById("score-0");
let score1 = document.getElementById("score-1");
// let score1 = document.querySelector("#score-1");
//// ui ===> user interface

const diceImg = document.querySelector(".dice");
//// buttons :
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");

//// element adi ==== .textContent
///// input ===== .value
////// taswira ==== .src

///// start conditions :
// score0.textContent = 0;
// score1.textContent = 0;
// diceImg.classList.add("hidden"); /// .add , .remove , .toggle
// let compteur = 0;
// let activePlayer = 0; //1
// let scores = [0, 0]; //// [10,0]
// let isPlaying = true;
let compteur, activePlayer, scores, isPlaying;

function reset() {
  score0.textContent = 0;
  score1.textContent = 0;
  diceImg.classList.add("hidden");
  compteur = 0;
  activePlayer = 0;
  scores = [0, 0];
  isPlaying = true;
  player0.classList.add("active");
  player1.classList.remove("active");
  player0.classList.remove("winner");
  player1.classList.remove("winner");
  document.getElementById(`current-score-0`).textContent = 0;
  document.getElementById(`current-score-1`).textContent = 0;
}
reset();

function switchPlayer() {
  compteur = 0;
  document.getElementById(`current-score-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("active");
  player1.classList.toggle("active");
}

roll.addEventListener("click", function () {
  if (isPlaying) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1; ///1 ====> 6   2
    diceImg.src = `dice-${diceNumber}.png`;

    diceImg.classList.remove("hidden"); //// a3tina num men 1 ==> 6 w bayena el img ...

    if (diceNumber !== 1) {
      compteur += diceNumber;
      document.getElementById(`current-score-${activePlayer}`).textContent =
        compteur;
      // document.getElementById("current-score-0").textContent = compteur ;
    } else {
      switchPlayer();
    }
  }
});

//// hold button functionnality ::

hold.addEventListener("click", function () {
  if (isPlaying) {
    scores[activePlayer] += compteur;
    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      isPlaying = false;
      document.querySelector(`.player-${activePlayer}`).classList.add("winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("active");
    } else {
      switchPlayer();
    }
  }
});

//// new game functionnality  :::

document.querySelector(".new-game").addEventListener("click", reset);
