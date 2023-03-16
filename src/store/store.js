import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'
// import thunk from 'redux-thunk'

import { rootReducer } from './root-reducer'

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['cart'],
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter(
   Boolean
)

const composedEnhancer =
   (process.env.NODE_ENV === 'development' &&
      window &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
