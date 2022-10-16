import React, { useState } from 'react'
import Skeleton from './Skeleton'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

const BarChart = ({ data, classes }) => {
	const [currentCategory, setCurrentCategory] = useState(0)
	const isLoading = data.length === 0
	const labels = data.map((item) => item.name)
	const categories = ['Среднее', 'Медианное', 'Минимальное', 'Максимальное']
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

	const colors = {
		red: '#C17B7B',
		blue: '#7BB2C1',
		purple: '#987BC1',
		green: '#7BC1A4',
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
				<>
					<ul className={classes.categories}>
						{categories.map((category, index) => (
							<li key={index}>
								<span
									className={`${classes.chooseCategory} ${
										currentCategory === index ? classes.activeCategory : ''
									}`}
									onClick={() => setCurrentCategory(index)}
								>
									{category}
								</span>{' '}
								{index === categories.length - 1 ? ' ' : <span className={classes.categoriesSlash}> / </span>}
							</li>
						))}
					</ul>
					<Bar options={options} data={dataForBar} width={10} height={4} />
					<h2 className={classes.rotatePhone}>Для лучшего использования переверните телефон </h2>
				</>
			)}
		</>
	)
}

export default BarChart
