import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import firebaseConfig from '../firebaseConfig'
import { initializeApp } from 'firebase/app'
import { BrowserRouter } from 'react-router-dom'

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
