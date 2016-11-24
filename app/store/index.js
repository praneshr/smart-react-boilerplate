import { applyMiddleware, compose, createStore } from 'redux'

import reducers from '../reducers/'
import thunk from 'redux-thunk'

export default function configureStore() {
  const store = createStore(reducers, compose(
    applyMiddleware(thunk),
  ))
  if (module.hot) {
    module.hot.accept('../reducers/', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
}
