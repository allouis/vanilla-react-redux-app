const bel = require('bel')
const setFilter = require('../actions/setFilter')
const List = require('./List')

module.exports = FilteredList

function FilteredList (state, dispatch) {
  const updateFilter = ev => dispatch(setFilter(ev.target.value))

  const { frameworks, filterBy } = state

  const filter = filterBy.toLowerCase().replace(/^(\s+)/, '').replace(/(\s+)$/, '')
  const items = frameworks.filter(f => f.toLowerCase().indexOf(filter) > -1)

  return (bel`
    <form>
      <input 
        value="${filterBy}" 
        type="text" 
        onkeyup=${updateFilter} 
        onchange=${updateFilter}>
      </input>
      ${List({items})}
    </form>
  `)
}
