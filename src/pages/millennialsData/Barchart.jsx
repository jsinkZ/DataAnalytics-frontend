import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

import colors from './../../assets/js/colors'

const BarChart = ({ data, title }) => {
	const labels = ['Зумеры', 'Миллениалы']

	ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

	const options = {
		indexAxis: 'y',
		elements: {
			bar: {
				borderWidth: 2,
			},
		},
		responsive: true,
		plugins: {
			legend: {
				position: 'right',
			},
			title: {
				display: true,
				text: title,
			},
		},
	}

	const dataForBar = {
		labels,
		datasets: [
			{
				label: labels[0],
				data: [data[0], 0],
				borderColor: colors.purple,
				backgroundColor: colors.backgroundPurple,
			},
			{
				label: labels[1],
				data: [0, data[1]],
				borderColor: colors.green,
				backgroundColor: colors.backgroundGreen,
			},
		],
	}

	return <Bar options={options} data={dataForBar} width={10} height={4} />
}

export default BarChart
