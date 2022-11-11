import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

const BarChart = ({ data, title, classes }) => {
	const labels = ['Зумерки', 'Миллениалы']
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
	const colorsNames = [colors.red, colors.pink, colors.blue, colors.purple, colors.green]
	const colorsBackgroundNames = [
		colors.backgroundRed,
		colors.backgroundPink,
		colors.backgroundBlue,
		colors.backgroundPurple,
		colors.backgroundGreen,
	]

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

	console.log(colorsBackgroundNames[Math.floor(Math.random() * 5)])
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
