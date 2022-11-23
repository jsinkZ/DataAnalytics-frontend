import React, { useEffect, useState } from 'react'
import axios from 'axios'

import classes from './OfficeData.module.scss'
import { serverAddress } from '../../config'
import BarChart from './Barchart'

const OfficeData = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get(`${serverAddress}/companiesReady`).then((res) => {
			setData(res.data)
		})
	}, [])

	return (
		<main>
			<h2>
				Витрина
				<code> Barchart </code>
				по данным НСИ
			</h2>
			<div className={classes.barWindow}>
				<BarChart data={data} classes={classes} />
			</div>
		</main>
	)
}

export default OfficeData
