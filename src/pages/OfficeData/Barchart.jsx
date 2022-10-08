import React, { useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

const BarChart = ({ data, classes }) => {
	const labels = data.map((item) => item.name)
	const categories = ['Среднее', 'Медианное', 'Минимальное', 'Максимальное']
	const categoriesToData = ['avg', 'median', 'min', 'max']
	const [currentCategory, setCurrentCategory] = useState(0)

	const options = {
		plugins: {
			legend: {
				position: 'top',
			},
		},
	}

	const colors = {
		red: '#C17B7B',
		blue: '#7BB2C1',
		purple: '#987BC1',
		green: '#7BC1A4',
	}

	const datas = {
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
			<ul className={classes.categories}>
				{categories.map((category, index) => (
					<li key={index}>
						<span className={classes.chooseCategory} onClick={() => setCurrentCategory(index)}>
							{category}
						</span>{' '}
						{index === categories.length - 1 ? ' ' : '/'}
					</li>
				))}
			</ul>
			<Bar options={options} data={datas} width={10} height={4} />
		</>
	)
}

export default BarChart
