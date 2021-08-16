import { combineReducers, createStore} from 'redux'
import CalculatorReducer from './Calculator/Calculator.reducer'
import ProductsReducer from './Products/Products.reducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    calculator: CalculatorReducer,
    products : ProductsReducer
})
const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)

 
let store = createStore(persistedReducer)
let persistor = persistStore(store)
export { store, persistor }
// const store = createStore(rootReducer)

// export default store