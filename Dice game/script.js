'use strict';
const rollbtn = document.querySelector('.btn--roll');
const holdbtn = document.querySelector('.btn--hold');
const newbtn = document.querySelector('.btn--new');
// const diceEl = document.getElementsByClassName('dice'); it gives array
const diceEl = document.querySelector('.dice');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore1El = document.querySelector('#current--0');
const currentScore2El = document.querySelector('#current--1');
const turn1 = document.querySelector('.player--0');
const turn2 = document.querySelector('.player--1');
let score = 0;
let gameParameter = 0;
// let score0 = score0El.textContent;
// let score1 = score1El.textContent;
const exchnage1 = function ()
{
    turn1.classList.remove('player--active');
    turn2.classList.add('player--active');
};
const exchange2 = function ()
{
    turn2.classList.remove('player--active');
    turn1.classList.add('player--active');
}
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function ()
{
    if (turn1.classList.contains('player--active'))
    {
        score = 0;
        score0El.textContent = Number (score0El.textContent) + score;
        currentScore1El.textContent = 0;
        exchnage1();
    }

    else if (turn2.classList.contains('player--active'))
    {
        score=0;
        score1El.textContent = Number (score1El.textContent) + score;
        currentScore2El.textContent = 0;
        exchange2();
    }
}

const winner = function ()
{
    if (Number (score0El.textContent) >= 100 && turn1.classList.contains('player--active'))
    {
        turn1.classList.add('player--winner');
        ++ gameParameter;
        diceEl.classList.add('hidden');
        // console.log(gameParameter);
    }   
    else if (Number (score1El.textContent) >= 100 && turn2.classList.contains('player--active'))
    {
        turn2.classList.add('player--winner');
        ++ gameParameter;
        diceEl.classList.add('hidden');
        // console.log(gameParameter);
    }
}

//rolling dice functionality


    rollbtn.addEventListener('click',function()
{
    //1.genrate a random dice roll 
    //2. display the dice
    //3. check for the rolled 1: if true then switch to next player
    // console.log(gameParameter);   
    if (gameParameter === 0)
    {
        const dice = Math.trunc((Math.random() * 6) + 1);
    console.log(typeof dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice === 1)
    {
       
       switchPlayer();
    }

    else
    {
        // console.log("hello 1");
        if (turn1.classList.contains('player--active'))
        {
            score = score + dice;
            currentScore1El.textContent = score;
            // score0El.textContent = Number (score0El.textContent) + dice;
        }
        else if (turn2.classList.contains('player--active'))
        {
            score = score + dice;
            currentScore2El.textContent = score;
            // score1El.textContent = Number (score1El.textContent) + dice;
        }
        
        
    }

    }
});


holdbtn.addEventListener('click', function()
{
    if (gameParameter === 0)
    {
        if (turn1.classList.contains('player--active'))
    {
        score0El.textContent = Number (score0El.textContent) + score;
        score = 0;
        currentScore1El.textContent = 0;
        winner ();
        exchnage1();
    }

    else if (turn2.classList.contains('player--active'))
    {
        score1El.textContent = Number (score1El.textContent) + score;
        score=0;
        currentScore2El.textContent = 0;
        winner();
        exchange2();
    }
    }
});



newbtn.addEventListener('click', function()
{
    score = 0;
    currentScore1El.textContent = 0;
    currentScore2El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    turn1.classList.remove('player--winner');
    turn2.classList.remove('player--winner');
    exchange2();
    gameParameter = 0;
    diceEl.classList.remove('hidden');

});