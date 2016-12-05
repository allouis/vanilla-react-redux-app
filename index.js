const App = require('./components/App')
const store = require('./store')
const bindComponent = require('./lib/bindComponent')

const container = document.createElement('section')
document.body.appendChild(container)

const app = bindComponent(App, container)

app(store)
