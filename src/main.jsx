import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Import all styles
import './styles/main.css'
import './styles/home.css'
import './styles/about.css'
import './styles/services.css'
import './styles/contact.css'
import './styles/quote.css'
import './styles/careers.css'
import './styles/legal.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Final-Printolution">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
