module.exports = reduceFilter

function reduceFilter (state, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return Object.assign({}, state, {
        filterBy: action.by
      })
    default:
      return state
  }
}
