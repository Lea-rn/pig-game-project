let score0 = document.getElementById("score-0");
let score1 = document.getElementById("score-1");

const diceImg = document.querySelector(".dice");
const roll = document.querySelector(".roll"); ///// boutton
const player0 = document.querySelector(".player-1")
const player1 = document.querySelector(".player-2")


//// element adi ==== .textContent
///// input ===== .value
////// taswira ==== .src

///// start conditions :
score0.textContent = 0;
score1.textContent = 0;
diceImg.classList.add("hidden");
let compteur = 0;
let activePlayer = 0 ; //1

roll.addEventListener("click", function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1; ///1 ====> 6
  console.log(diceNumber);
  diceImg.src = `dice-${diceNumber}.png`;

  diceImg.classList.remove("hidden");

  if (diceNumber !== 1) {
    compteur += diceNumber;           
    document.getElementById(`current-score-${activePlayer}`).textContent = compteur ;
    // document.getElementById("current-score-0").textContent = compteur ;

  }

  else {
    compteur = 0 ;
    document.getElementById(`current-score-${activePlayer}`).textContent = 0 ; 
    activePlayer = activePlayer === 0 ? 1 : 0 ; 
     player0.classList.toggle("active")
     player1.classList.toggle("active")

  }
});
