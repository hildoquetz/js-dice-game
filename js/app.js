/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


CODE CHALLENGES

- Player loses his entire score when he rolls two 6 in a row, after that, it's the next player turn; 

- Add a input fild into the html where players can set the winning score; 

- Add another dice ( now, we are 2 dices );

*/


// Var Scope ----------------------------------------------------

var scores, roundScore, activePlayer, dice1, dece2, diceDOM, alertDOM, doubleSix, winnerScore;

diceDOM1 = document.querySelector( '.dice1' ); 
diceDOM2 = document.querySelector( '.dice2' );
alertDOM = document.querySelector( '.alert');

winnerScore = 100; // default start winner score

newGame();


// DOM ----------------------------------------------------

// row dices
document.querySelector( '.btn-roll' ).addEventListener( 'click', function() {
	
	// 1. Random number
	dice1 = Math.floor( Math.random() * 6 ) + 1;
	dice2 = Math.floor( Math.random() * 6 ) + 1;

	if( dice1 == 6) {
		doubleSix += 1; 
	}

	if( dice2 == 6) {
		doubleSix += 1; 
	}

	// 2. Display the result
	diceDOM1.style.display = 'block';
	diceDOM2.style.display = 'block';
	diceDOM1.src = 'img/dice-' + dice1 + '.png';
	diceDOM2.src = 'img/dice-' + dice2 + '.png';

	// 3. Update the round score if the rolled number is NOT equal 1;
	if( dice1 == 1 || dice2 == 1 ) {
		alertDOM.textContent = 'You take 1 !';
		nextPlayer();
	} else if ( doubleSix >= 2 ) {
		alertDOM.textContent = 'You have 2 results like 6 !';
		scores[activePlayer] = 0;
		document.querySelector( '#score-' + activePlayer ).textContent = scores[activePlayer];
		nextPlayer();
	} else {
		roundScore += ( dice1 + dice2 );
		document.querySelector( '#current-' + activePlayer ).textContent = roundScore;
	}
	

	// console log
	console.log( "The player: " + activePlayer );
	console.log( "Dice 1: " + dice1 );
	console.log( "Dice 2: " + dice2 );
	console.log( "doubleSix: " + doubleSix );
	console.log( "roundScore: " + roundScore );
	console.log( "Player score: " + scores[activePlayer] );
	console.log( "--------------------------------" );

});

// pick-up the current to global score
document.querySelector( '.btn-hold' ).addEventListener( 'click', function() {

	// add current score to global score 
	scores[activePlayer] += roundScore;

	// update ui
	document.querySelector( '#score-' + activePlayer ).textContent = scores[activePlayer];

	// check if the player win the game
	if( scores[activePlayer] >= winnerScore ) {
		diceHide();
		document.getElementById( 'name-' + activePlayer ).textContent = 'winner !';
		document.querySelector( '.player-' + activePlayer + '-panel' ).classList.add( 'winner' );
		document.querySelector( '.player-' + activePlayer + '-panel' ).classList.remove( 'active' );
		document.querySelector( '.btn-hold' ).style.display = 'none';
		document.querySelector( '.btn-roll' ).style.display = 'none';
		document.querySelector( '.btn-winner-score' ).style.display = 'none';
		alertDOM.style.color = 'green';
		alertDOM.textContent = 'You Win !';
	} else {
		nextPlayer();
	}
});

document.querySelector( '.btn-winner-score' ).addEventListener( 'click', function() {
	winnerScore = prompt( "What the winner score ?" );
	alertDOM.textContent = 'New Winner Score: ' + winnerScore;
	console.log( "New Winner score: " + winnerScore );
});

document.querySelector( '.btn-new' ).addEventListener( 'click', newGame );


// functions ----------------------------------------------------

function nextPlayer() {
	// change the active player with unary operator
	activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;

	// round and role score to zero 
	roundScore = 0;
	doubleSix = 0;

	// clean the result table
	document.getElementById( 'current-0' ).textContent = '0';
	document.getElementById( 'current-1' ).textContent = '0';

	// change the active class with toggle (if has the class, remove, else, add the class), better than remove and add;
	document.querySelector( '.player-0-panel' ).classList.toggle( 'active' );
	document.querySelector( '.player-1-panel' ).classList.toggle( 'active' );
	diceHide();
}

function newGame() {

	// clean variables
	roundScore = 0;
	scores = [0,0];
	activePlayer = 0;
	doubleSix = 0;

	diceHide();

	// scores to zero 
	document.getElementById( 'score-0' ).textContent = '0';
	document.getElementById( 'score-1' ).textContent = '0';
	document.getElementById( 'current-0' ).textContent = '0';
	document.getElementById( 'current-1' ).textContent = '0';

	// remove winner and add players name
	document.getElementById( 'name-0' ).classList.remove( 'winner' );
	document.getElementById( 'name-1' ).classList.remove( 'winner' );
	document.getElementById( 'name-0' ).textContent = 'Player 1';
	document.getElementById( 'name-1' ).textContent = 'Player 2';

	// prepare and set the active player
	document.querySelector( '.player-0-panel' ).classList.remove( 'active' );
	document.querySelector( '.player-1-panel' ).classList.remove( 'active' );
	document.querySelector( '.player-0-panel' ).classList.remove( 'winner' );
	document.querySelector( '.player-1-panel' ).classList.remove( 'winner' );
	document.querySelector( '.player-0-panel' ).classList.add( 'active' );

	// show the buttons
	document.querySelector( '.btn-hold' ).style.display = 'block';
	document.querySelector( '.btn-roll' ).style.display = 'block';
	document.querySelector( '.btn-winner-score' ).style.display = 'block'; 

	// the page log
	alertDOM.style.color = 'red';
	alertDOM.textContent = 'Let\'s play !';

}

function diceHide() {
	diceDOM1.style.display = 'none';
	diceDOM2.style.display = 'none';
}