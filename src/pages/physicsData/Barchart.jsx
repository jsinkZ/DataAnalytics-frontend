import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

import Skeleton from './Skeleton'

const BarChart = ({ colors, data, labels, isLoading, currentCategory, classes }) => {
	const masses = Object.entries(!isLoading ? data?.gases?.[currentCategory] : {}).map((item) => item[1][2])

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
				label: `Масса исходя из эксперемента, кг`,
				data: masses.map((item) => item[0]),
				backgroundColor: colors.red,
			},

			{
				label: `Масса по расчетам, кг`,
				data: masses.map((item) => item[1]),
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
