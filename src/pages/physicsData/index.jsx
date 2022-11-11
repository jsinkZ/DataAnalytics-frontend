import React, { useEffect, useState } from 'react'
import axios from 'axios'

import classes from './PhysicsData.module.scss'
import { serverAddress } from '../../config'
import BarChart from './Barchart'
import Table from './Table'
import Linechart from './Linechart'

const PhysicsData = () => {
	const [data, setData] = useState([])
	const isLoading = data.gases === undefined
	const categories = Object.keys(!isLoading ? data.gases : {})
	const [currentCategory, setCurrentCategory] = useState('Пропан')
	const labels = Object.entries(!isLoading ? data?.gases?.[currentCategory] : {}).map((item) => item[0])

	const colors = {
		red: '#C17B7B',
		backgroundRed: '#C18E8E',
		pink: '#FF6384',
		backgroundPink: '#FFB0C1',
		blue: '#7BB2C1',
		backgroundBlue: '#99D0F5',
		purple: '#987BC1',
		backgroundPurple: '#AEA1C1',
		green: '#7BC1A4',
		backgroundGreen: '#97C1AF',
	}

	useEffect(() => {
		axios.get(`${serverAddress}/gasesReady`).then((res) => setData(res.data))
	}, [])

	return (
		<main>
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
				data={data.dispersions}
				isLoading={isLoading}
				currentCategory={currentCategory}
				classes={classes}
			/>
			<h2>
				Витрина
				<code> barchart </code>
				по данным газов (датчики)
			</h2>
			<div className={classes.barWindow}>
				<BarChart
					colors={colors}
					data={data}
					labels={labels}
					isLoading={isLoading}
					categories={categories}
					currentCategory={currentCategory}
					setCurrentCategory={setCurrentCategory}
					classes={classes}
				/>
			</div>
			<h2>
				Витрина
				<code> linechart </code>
				по данным газов (датчики)
			</h2>
			<div className={classes.barWindow}>
				<Linechart
					colors={colors}
					data={data}
					labels={labels}
					isLoading={isLoading}
					currentCategory={currentCategory}
					classes={classes}
				/>
				<h2 className={classes.rotatePhone}>Для лучшего использования переверните телефон </h2>
			</div>
		</main>
	)
}

export default PhysicsData
