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
					<BarChart data={livingCost} title='Стоимость жизни (сколько денег нужно), %' classes={classes} />
				</div>
				<div className={classes.dogWindow}>
					<Doughnutchart data={badSalary} title='Маленькая (плохая) зарплата по их меркам, %' />
				</div>
				<div className={classes.barWindow}>
					<BarChart data={notEnoughMoney} title='Не хватает денег на нужды, %' classes={classes} />
				</div>
				<div className={classes.barWindow}>
					<BarChart data={goodSalary} title='Довольны собственным заработком, %' classes={classes} />
				</div>
				<div className={classes.barWindow}>
					<BarChart data={addEarnings} title='Имеют дополнительный заработок, %' classes={classes} />
				</div>
			</div>
		</>
	)
}

export default AboutMoney
