import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App.jsx'
import { ContextProvider } from './contexts/ContextProvider'

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
// 		<ContextProvider>
// 			<App />
// 		</ContextProvider>
// 	</React.StrictMode>
// )
ReactDOM.render(
	<ContextProvider>
		<App/>
	</ContextProvider>,
	document.getElementById('root')
)