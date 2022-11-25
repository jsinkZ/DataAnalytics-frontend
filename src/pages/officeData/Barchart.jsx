import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

import Skeleton from './Skeleton'
import colors from './../../assets/js/colors'

const BarChart = ({ data, categories, currentCategory }) => {
	const isLoading = data.length === 0
	const labels = data.map((item) => item.name)
	const categoriesToData = ['avg', 'median', 'min', 'max']

	const options = {
		plugins: {
			legend: {
				position: 'top',
			},
		},
		responsive: true,
		aspectRatio: 2,
	}

	const dataForBar = {
		labels,
		datasets: [
			{
				label: `${categories[currentCategory]} (Исходя из опроса)`,
				data: data.map((item) => item[`${categoriesToData[currentCategory]}PollCash`]),
				backgroundColor: colors.red,
			},

			{
				label: `${categories[currentCategory]} (Исходя из информации о доходах)`,
				data: data.map((item) => item[`${categoriesToData[currentCategory]}RevenueCash`]),
				backgroundColor: colors.purple,
			},
		],
	}

	ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

	return (
		<>
			{isLoading ? (
				<>
					<p> Loading... </p>
					<Skeleton />
				</>
			) : (
				<Bar options={options} data={dataForBar} width={10} height={4} />
			)}
		</>
	)
}

export default BarChart
