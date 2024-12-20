import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { persistore, store } from './store/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import "./reset.css"
import "./root.css"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
