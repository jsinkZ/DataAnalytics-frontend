import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.module.scss'

const Header = () => {
	return (
		<header>
			<h2>
				Data Analytics app
				<sub>
					code by
					<a href='https://github.com/jsinkZ' target='_blank' rel='noreferrer'>
						{' '}
						jsink_
					</a>
				</sub>
				<p>
					<NavLink to='/office'>Office</NavLink>/<NavLink to='/physics'>Physics</NavLink>/
					<NavLink to='/millennials'>Gen Z vs Millennials</NavLink>
				</p>
			</h2>
		</header>
	)
}

export default Header
