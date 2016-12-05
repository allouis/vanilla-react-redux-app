const createStore = require('./lib/createStore')
const reducer = require('./reducer')

const initialState = {
  frameworks: ['React', 'Angular', 'Vue', 'Ember'],
  filterBy: ''
}

module.exports = createStore(reducer, initialState)
