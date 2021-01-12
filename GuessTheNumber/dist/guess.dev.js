"use strict";

// let getRandomNumber = function (start, range) {
//     let getRandom = Math.floor((Math.random() * range) + start);
//     // si on veut que le nombre de dépasse pas un certain nombre il faut une boucle while
//     while (getRandom > range) {
//         getRandom = Math.floor((Math.random() * range) + start);
//     }
//     return getRandom;
// }
// console.log(getRandomNumber(0, 11));
var output = document.querySelector('h2');
var guess = document.getElementById('guess');
var playAgain = document.getElementById('reset');
var popUp = document.getElementById('pop-up');
var yesBtn = document.getElementById('yes');
var noBtn = document.getElementById('no'); // essai = 1;

var number = [Math.floor(Math.random() * 10)];
console.log(number);
guess.addEventListener('click', function guessNumber() {
  var input = document.querySelector('input').value;

  if (input == number) {
    output.textContent = "Bravo, tu as devin\xE9!!, c'\xE9tait le ".concat(number);
    output.style.backgroundColor = 'green';
    setTimeout(function () {
      popUp.style.visibility = 'visible';
    }, 1000);
  } else if (input < number) {
    output.textContent = 'Oulala! Trop bas, essaye encore!';
    output.style.backgroundColor = 'red';
  }

  ;

  if (input > number) {
    output.textContent = 'Ouf! Trop élevé, essaye encore!';
    output.style.backgroundColor = 'red';
  }
});
var essais = 0;

function afficherEssai() {
  var nbEssai = document.querySelector('h3');
  essais += 1;
  nbEssai.textContent = "le nombre d'essais est de : ".concat(essais);
}

;
playAgain.addEventListener('click', function () {
  location.reload();
});
yesBtn.addEventListener('click', function () {
  popUp.style.visibility = 'hidden';
  location.reload();
});
noBtn.addEventListener('click', function () {
  popUp.style.visibility = 'hidden';
  window.close();
});