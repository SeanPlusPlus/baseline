import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import App from './components/App'

const middleware = [thunkMiddleware]

const mock = (() => ({
  data: { uuid: 'hello' },
}))

const store = createStore(
  mock,
  applyMiddleware(...middleware),
)

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Index />, div)
  ReactDOM.unmountComponentAtNode(div)
})
