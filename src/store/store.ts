import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from "redux-persist/lib/storage"
import { reducerTable } from './slice/Table'


const rootReducers = combineReducers({
    table:reducerTable,
})
const persistConfig = {
    key: 'root',
    storage,
  }
const persistReducers = persistReducer(persistConfig,rootReducers)

export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
})


export const persistore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch