const bel = require('bel')

module.exports = List

function List (state) {
  const { items } = state
  return (bel`
    <ul>
    ${
      items.map(item => bel`
        <li> ${item} </li>
      `)
    }
    </ul>
  `)
}
