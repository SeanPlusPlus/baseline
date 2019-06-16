/* eslint react/jsx-filename-extension: 0 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/configureStore'
import App from './components/App'
import './index.css'
import * as serviceWorker from './utils/serviceWorker'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
