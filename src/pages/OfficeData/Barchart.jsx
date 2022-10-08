import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

const BarChart = ({ data }) => {
	const companies = data.map((item) => item.name)

	ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

	const options = {
		plugins: {
			legend: {
				position: 'top',
			},
		},
	}

	const labels = companies

	const datas = {
		labels,
		datasets: [
			{
				label: 'Минимум (Исходя из опроса)',
				data: data.map((item) => item.minPollCash),
				backgroundColor: 'rgb(152,123,193)',
			},
			{
				label: 'Максимум (Исходя из информации о доходах)',
				data: data.map((item) => item.minRevenueCash),
				backgroundColor: 'rgb(123,193,164)',
			},
		],
	}

	return <Bar options={options} data={datas} width={10} height={4} />
}

export default BarChart
