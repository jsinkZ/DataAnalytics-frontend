import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

const Doughnutchart = ({ data, title }) => {
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
