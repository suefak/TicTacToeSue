
'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')


$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})

// const playerOne = 'X'
// const computer_token = 'Y'
//
// $(document).ready(function() {
//   const grid = [
//     ['', '', '',]
//     ['', '', '',
//     ['', '', '',],
//
//
//   $('.table').click(function () {
//     $(this).html(playerOne);
//   })
