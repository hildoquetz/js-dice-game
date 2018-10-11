# js-dice-game

A simple game make with js to roll dices and have fun! Not only, it's a DOM (Document Object Model) playground. 

This game has been developed as a lesson of [The Complete JavaScript Course](https://www.udemy.com/the-complete-javascript-course/), from 
[Jonas Schmedtmann](https://twitter.com/jonasschmedtman). 

#### You can check this game on [CodePen](https://codepen.io/hildoquetz/full/GYorJq/): https://codepen.io/hildoquetz/full/GYorJq/

## Roles 

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- And if the player roll a 6 two times, he lost your score round and after that, it's the next player turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game