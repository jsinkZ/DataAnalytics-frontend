import React, { useState } from 'react'

import AboutHealth from './AboutHealth'
import AboutMoney from './AboutMoney'
import AboutWork from './AboutWork'
import Categories from './../../components/Categories'

import classes from './MillennialData.module.scss'

const MillennialsData = () => {
	const [currentCategory, setCurrentCategory] = useState(0)
	const categories = ['Деньги', 'Здоровье/Природа', 'Работа']

	// everywhere in About<category>.jsx component
	// [0] is gen Z
	// [1] is mill

	const renderPageCategory = () => {
		switch (currentCategory) {
			case 0:
				return <AboutMoney />
			case 1:
				return <AboutHealth />
			case 2:
				return <AboutWork />
			default:
				return <AboutMoney />
		}
	}

	return (
		<>
			<h2>ЧЕМ ЖИВУТ ЗУММЕРЫ И МИЛЛЕНИАЛЫ ?</h2>
			<Categories
				classes={classes}
				categories={categories}
				currentCategory={currentCategory}
				setCurrentCategory={setCurrentCategory}
			/>
			{renderPageCategory()}
		</>
	)
}

export default MillennialsData
