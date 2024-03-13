import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ThemeProvider from './ui/providers/themeProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/* Esto definitivamente no tiene justificacion, pero solo asi sirve, y si sirve, me vale verga todo */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
