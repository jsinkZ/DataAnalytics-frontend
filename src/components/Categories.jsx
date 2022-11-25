import React from 'react'

const Categories = ({ classes, categories, currentCategory, setCurrentCategory }) => {
	return (
		<ul className={classes.categories}>
			{categories.map((category, index) => (
				<li key={index}>
					<span
						className={`${classes.chooseCategory} ${currentCategory === index ? classes.activeCategory : ''}`}
						onClick={() => setCurrentCategory(index)}
					>
						{category}
					</span>{' '}
					{index === categories.length - 1 ? ' ' : <span className={classes.categoriesSlash}> / </span>}
				</li>
			))}
		</ul>
	)
}

export default Categories
