import React from 'react'

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
			</h2>
		</header>
	)
}

export default Header
