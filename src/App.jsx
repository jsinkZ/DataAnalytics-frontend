import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.scss'
import Header from './components/Header'
import MillennialsData from './pages/millennialsData'
import OfficeData from './pages/officeData'
import PhysicsData from './pages/physicsData'

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<OfficeData />} />
				<Route path='/office' element={<OfficeData />} />
				<Route path='/physics' element={<PhysicsData />} />
				<Route path='/millennials' element={<MillennialsData />} />
			</Routes>
		</div>
	)
}

export default App
