import React from 'react'
import ReactDOM from 'react-dom/client'
import { ItemsPage } from './components/pages/ItemsPage'
import { Routing } from './routes/Routing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
)
