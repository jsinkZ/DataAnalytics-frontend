import React from 'react'

import classes from './MillennialData.module.scss'
import BarChart from './Barchart'
import Doughnutchart from './Doughnutchart'

const AboutMoney = () => {
	const livingCost = [29, 36]
	const badSalary = [22, 27]
	const notEnoughMoney = [46, 47]
	const goodSalary = [24, 27]
	const addEarnings = [43, 33]

	return (
		<>
			<div className={classes.dashboard}>
				<div className={classes.barWindow}>
					<BarChart data={livingCost} title='Стоимость жизни, %' classes={classes} />
				</div>
				<div className={classes.dogWindow}>
					<Doughnutchart data={badSalary} title='Маленькая (плохая) зарплата, %' />
				</div>
				<div className={classes.barWindow}>
					<BarChart data={notEnoughMoney} title='Не хватает денег на нужны, %' classes={classes} />
				</div>
				<div className={classes.barWindow}>
					<BarChart data={goodSalary} title='Хороший заработок, %' classes={classes} />
				</div>
				<div className={classes.barWindow}>
					<BarChart data={addEarnings} title='Дополнительные заработок, %' classes={classes} />
				</div>
			</div>
		</>
	)
}

export default AboutMoney
