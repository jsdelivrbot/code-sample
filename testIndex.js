import mocha from 'utilities/mocha'

var utilities = require.context('./utilities', true, /\.test\.js$/)

utilities.keys().forEach(utilities)

mocha.run()
