const bel = require('bel')
const FilteredList = require('./FilteredList')

module.exports = App

function App (state, dispatch) {
  return (bel`
    <section>
      <header>
        <h1>Welcome to JavaScript</h1>
      </header>
      <article>
        ${FilteredList(state, dispatch)}
      </article>
    </section>
  `)
}
