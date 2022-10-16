import React from 'react'
import { Line } from 'react-chartjs-2'
import {
	Chart,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'

import Skeleton from './Skeleton'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const Linechart = ({ colors, data, labels, currentCategory, isLoading, classes }) => {
	const massesDiff = Object.entries(!isLoading ? data?.gases?.[currentCategory] : {}).map(
		(item) => item[1][3]
	)

	const options = {
		responsive: true,
		interaction: {
			mode: 'index',
			intersect: false,
		},
		stacked: false,
		scales: {
			y: {
				type: 'linear',
				display: true,
				position: 'left',
			},
			y1: {
				type: 'linear',
				display: true,
				position: 'right',
				grid: {
					drawOnChartArea: false,
				},
			},
		},
	}

	const dataForLine = {
		labels,
		datasets: [
			{
				label: 'Абсолютное отклонение',
				data: massesDiff.map((item) => item[0]),
				borderColor: colors.pink,
				backgroundColor: colors.backgroundPink,
				yAxisID: 'y',
			},
			{
				label: 'Процентное отклонение',
				data: massesDiff.map((item) => item[1]),
				borderColor: colors.blue,
				backgroundColor: colors.backgroundBlue,
				yAxisID: 'y1',
			},
		],
	}

	return (
		<>
			{isLoading ? (
				<>
					<p> Loading... </p>
					<Skeleton />
				</>
			) : (
				<Line options={options} data={dataForLine} />
			)}
		</>
	)
}

export default Linechart
