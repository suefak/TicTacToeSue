'use strict'

let apiUrl
const apiUrls = {
<<<<<<< HEAD
  production:https: 'https://aqueous-atoll-85096.herokuapp.com',
  development: 'https://tic-tac-toe-wdi.herokuapp.com/'
=======
  production: 'https://tic-tac-toe-wdi.herokuapp.com/',
  development: 'https://aqueous-atoll-85096.herokuapp.com'
>>>>>>> development
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
