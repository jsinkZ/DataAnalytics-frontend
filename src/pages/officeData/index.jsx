import React, { useEffect, useState } from 'react'
import axios from 'axios'

import classes from './OfficeData.module.scss'
import BarChart from './Barchart'
import { serverAddress } from './../../config'
import Categories from './../../components/Categories'

const OfficeData = () => {
	const [data, setData] = useState([])
	const [currentCategory, setCurrentCategory] = useState(0)
	const categories = ['Среднее', 'Медианное', 'Минимальное', 'Максимальное']

	useEffect(() => {
		axios.get(`${serverAddress}/companiesReady`).then((res) => setData(res.data))
	}, [])

	return (
		<>
			<h2>
				Витрина
				<code> Barchart </code>
				по данным НСИ (доходы)
			</h2>
			<Categories
				classes={classes}
				categories={categories}
				currentCategory={currentCategory}
				setCurrentCategory={setCurrentCategory}
			/>
			<div className={classes.barWindow}>
				<BarChart
					data={data}
					classes={classes}
					categories={categories}
					currentCategory={currentCategory}
					setCurrentCategory={setCurrentCategory}
				/>
			</div>
		</>
	)
}

export default OfficeData
