import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import colors from './../../assets/js/colors'

const Doughnutchart = ({ data, title }) => {
	const labels = ['Зумеры', 'Миллениалы']

	ChartJS.register(ArcElement, Tooltip, Legend)

	const dataForDog = {
		labels,
		datasets: [
			{
				label: '% из голосов',
				data: data,
				backgroundColor: [colors.backgroundPurple, colors.backgroundGreen],
				borderColor: [colors.purple, colors.green],
				borderWidth: 1,
			},
		],
	}

	return (
		<>
			<h1> {title} </h1>
			<Doughnut data={dataForDog} />
		</>
	)
}

export default Doughnutchart
