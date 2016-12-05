var createStore = require('./lib/createStore')
var reducer = require('./reducer')

var initialState = {
  frameworks: ['React', 'Angular', 'Vue', 'Ember'],
  filterBy: ''
}

module.exports = createStore(reducer, initialState)
