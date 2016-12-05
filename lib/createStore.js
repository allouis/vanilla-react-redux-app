module.exports = createStore

function createStore (reducer, initialState) {
  var state = initialState
  var buffer = [state]
  var _cb

  function getState (cb) {
    _cb = null
    if (buffer.length) return cb(buffer.splice(0, 1)[0], dispatch)
    _cb = cb
  }

  function dispatch (action) {
    state = reducer(state, action)
    buffer.push(state)
    if (_cb) {
      getState(_cb)
    }
  }

  return getState
}
