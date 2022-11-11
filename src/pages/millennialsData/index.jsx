import React, { useState } from 'react'
import AboutHealth from './AboutHealth'
import AboutMoney from './AboutMoney'
import AboutWork from './AboutWork'

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
		<main>
			<h2>ЧЕМ ЖИВУТ ЗУММЕРЫ И МИЛЛЕНИАЛЫ ?</h2>
			<ul className={classes.categories}>
				{categories.map((category, index) => (
					<li key={index}>
						<span
							className={`${classes.chooseCategory} ${
								currentCategory === index ? classes.activeCategory : ''
							}`}
							onClick={() => setCurrentCategory(index)}
						>
							{category}
						</span>{' '}
						{index === categories.length - 1 ? ' ' : <span className={classes.categoriesSlash}> / </span>}
					</li>
				))}
			</ul>
			{renderPageCategory()}
			<h2 className={classes.rotatePhone}>Для лучшего использования переверните телефон </h2>
		</main>
	)
}

export default MillennialsData
