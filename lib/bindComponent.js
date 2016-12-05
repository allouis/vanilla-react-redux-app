var morphdom = require('morphdom')
var copyEvents = require('copy-event-attributes')

module.exports = bindComponent

function bindComponent (Component, el) {
  return function component (store) {
    store(function render (state, dispatch) {
      morphdom(el, Component(state, dispatch), {
        onBeforeMorphEl: copyEvents
      })
      store(render)
    })
  }
}
