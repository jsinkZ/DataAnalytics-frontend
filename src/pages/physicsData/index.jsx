import React, { useEffect, useState } from 'react'
import axios from 'axios'

import classes from './PhysicsData.module.scss'
import Table from './Table'
import BarChart from './Barchart'
import Linechart from './Linechart'
import { serverAddress } from './../../config'

const PhysicsData = () => {
	const [data, setData] = useState([])
	const isLoading = data.gases === undefined
	const categories = Object.keys(!isLoading ? data.gases : {})
	const [currentCategory, setCurrentCategory] = useState('Пропан')
	const labels = Object.entries(!isLoading ? data?.gases?.[currentCategory] : {}).map((item) => item[0])

	useEffect(() => {
		axios.get(`${serverAddress}/gasesReady`).then((res) => setData(res.data))
	}, [])

	return (
		<>
			<ul className={classes.categories}>
				{categories.map((category, index) => (
					<li key={index}>
						<span
							className={`${classes.chooseCategory} ${
								currentCategory === category ? classes.activeCategory : ''
							}`}
							onClick={() => setCurrentCategory(category)}
						>
							{category}
						</span>{' '}
						{index === categories.length - 1 ? ' ' : <span className={classes.categoriesSlash}> / </span>}
					</li>
				))}
			</ul>
			<Table
				classes={classes}
				data={data.dispersions}
				isLoading={isLoading}
				currentCategory={currentCategory}
			/>
			<h2>
				Витрина
				<code> barchart </code>
				по данным газов (датчики)
			</h2>
			<div className={classes.barWindow}>
				<BarChart
					data={data}
					labels={labels}
					isLoading={isLoading}
					categories={categories}
					currentCategory={currentCategory}
					setCurrentCategory={setCurrentCategory}
				/>
			</div>
			<h2>
				Витрина
				<code> linechart </code>
				по данным газов (датчики)
			</h2>
			<div className={classes.barWindow}>
				<Linechart data={data} labels={labels} isLoading={isLoading} currentCategory={currentCategory} />
			</div>
		</>
	)
}

export default PhysicsData
