import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './reset.css'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientID = process.env.VITE_GOOGLE_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={clientID}>
    <React.StrictMode>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
)
