import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.ts(2584)
    <App />
  </React.StrictMode>,
)
