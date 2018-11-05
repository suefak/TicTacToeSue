'use strict'

const store = {
}

module.exports = store
const gameBoard = ['','','','','','','','']
const player1 = 'X';
const player2 = 'O';
const currentTurn = 1;
const movesMade = 0;
const winningCombos = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0 ,3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[6, 4, 2]
]

const col-md-3 box = document.querySelectorAll('.col-md-3 box');
// going to selectbeach element on page that has class of .col-md
startGame();

function startGame() {
  document.querySelector(".endgame").style.display = "none"
  // when the game starts, startGame function will run beginning
  // endgame will be set to none
  gameBoard = Array.from(Array(9).keys())
  // make array numbered from 0-8
  for (var i = 0; i < col-md-3 box.length; i++) {
    //to remove XOs frm board everytime game is restarted
    // go through
    col-md-3 box[i].innertext = '';
    // nothing in cell
  col-md-3 box[i].style.removeProperty('background-color');
    // when someone wins it will highlight whuch player won
    col-md-3 box[i].addEventListener('click', turnClick, false);
  }
}

function turnClick(square) {
  // pass in click event
  turn(square.target.id,player1)
}

function turn(squareId,player) {
  gameBoard[squareId] = playe1;
  // going to shower player whos turn it was
  document.getElementById(squareId).innerText = player1;
  // shows displayed that player just clicked
  // displays O
}
