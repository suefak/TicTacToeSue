'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = error => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran. Data is :', data)
}

const signOutFailure = error => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}

// let gameBoard = ['', '', '', '', '', '', '', '', '']
// const huPlayer = 'O'
// const aiPlayer = 'X'
//
// const winCombos = [
// [0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],
// [0, 4, 8],
// [6, 4, 2]
// ]
//
// const cells = document.querySelectorAll('.cell');
// startGame();
//
// function startGame () {
// document.querySelector('.endgame').style.display = 'none';
//   gameBoard = Array.from(Array(9).keys())
// for (let i = 0; i < cells.length; i++) {
// cells[i].innerText = '';
// cells[i].style.removeProperty('background-color');
// cells[i].addEventListener('click', turnClick, false);
// }
// }
//
// function turnClick (square) {
// turn(square.target.id, huPlayer)
// }
//
// function turn (squareId, player) {
// gameBoard[squareId] = player;
// .getElementById(squareId).innerText = player;
// // winning logic
// let gameWon = checkWin(gameBoard, player)
// if (gameWon) gameOver(gameWon)
// }
//
// function checkWin (board, player) {
// const plays = board.reduce((a, e, i) =>
// (e === player) ? a.concat(i) : a, []);
// let gameWon = null;
// for (let [index, win] of winCombos.entries()) {
// if (win.every(elem => plays.indexOf(elem) > -1)) {
// gameWon = {index: index, player: player};
// break
// }
// }
// return gameWon
// }
//
// function gameOver (gameWon) {
// for (let index of winCombos[gameWon.index]) {
// document.getElementById(index).style.backgroundColor =
// gameWon.player === huPlayer ? 'white' : 'red'
// }
// for (let i = 0; i < cells.length; i++) {
// cells[i].removeEventListener('click', turnClick, false);
// }
// declareWinner(gameWon.player == huPlayer ? 'You win!' : 'You lose')
// }
// function declareWinner(who) {
// document.querySelector('.endgame').style.display = 'block'
// document.querySelector('.endgame .text').innerText = who
// }
// function emptySquares () {
// return gameBoard.filter(s => typeof s === 'number')
// }
// function bestSpot () {
// return emptySquares()[0]
// }
//
// function checkTie () {
// if (emptySquares().length === 0) {
// for (let i = 0; i < cells.length; i++) {
// cells[i].style.backgroundColor = 'blue'
// cells[i].removeEventListener('click', turnClick, false)
// }
//     declareWinner('Tie Game!')
//     return true
//   }
//   return false
// }
