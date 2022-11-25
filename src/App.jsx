import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.scss'
import Header from './components/Header/Header'
import MillennialsData from './pages/millennialsData'
import OfficeData from './pages/officeData'
import PhysicsData from './pages/physicsData'

const App = () => {
	return (
		<div className='App'>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<OfficeData />} />
					<Route path='/office' element={<OfficeData />} />
					<Route path='/physics' element={<PhysicsData />} />
					<Route path='/millennials' element={<MillennialsData />} />
				</Routes>
				<h2 className='rotatePhone'>Для лучшего использования переверните телефон </h2>
			</main>
		</div>
	)
}

export default App
