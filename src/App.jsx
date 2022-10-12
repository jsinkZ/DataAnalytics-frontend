import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.scss'
import Header from './components/Header'
import OfficeData from './pages/OfficeData'

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<OfficeData />} />
			</Routes>
		</div>
	)
}

export default App

//  "web-vitals": "^2.1.4"