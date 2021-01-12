// let getRandomNumber = function (start, range) {
    //     let getRandom = Math.floor((Math.random() * range) + start);
    //     // si on veut que le nombre de dépasse pas un certain nombre il faut une boucle while
    
    //     while (getRandom > range) {
        //         getRandom = Math.floor((Math.random() * range) + start);
        //     }
        //     return getRandom;
        // }
        // console.log(getRandomNumber(0, 11));
        
        
        
        let output = document.querySelector('h2');
        let guess = document.getElementById('guess');
        let playAgain = document.getElementById('reset')
        let popUp = document.getElementById('pop-up');
        let yesBtn = document.getElementById('yes');
        let noBtn = document.getElementById('no');

// essai = 1;



let number = [Math.floor(Math.random() * 10)];
console.log(number);

guess.addEventListener('click', function guessNumber() {
    let input = document.querySelector('input').value;
    if (input == number){
        output.textContent = `Bravo, tu as deviné!!, c'était le ${number}`;
        output.style.backgroundColor = 'green';
        setTimeout(() => {
            popUp.style.visibility = 'visible'
        }, 1000);    
       

    } else if (input < number){
        output.textContent = 'Oulala! Trop bas, essaye encore!';
        output.style.backgroundColor = 'red';

    };
    if (input > number) {
        output.textContent = 'Ouf! Trop élevé, essaye encore!';
        output.style.backgroundColor = 'red';


    }
});

let essais = 0;

function afficherEssai () {
    let nbEssai = document.querySelector('h3');
    essais += 1;   
    nbEssai.textContent = `le nombre d'essais est de : ${essais}`;
};

playAgain.addEventListener('click',() => { 
    location.reload();
});




yesBtn.addEventListener('click', () =>{
    popUp.style.visibility = 'hidden';
    location.reload();
});

noBtn.addEventListener('click', () => {
    popUp.style.visibility = 'hidden';
    window.close();
});