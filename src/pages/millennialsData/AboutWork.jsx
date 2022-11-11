import React from 'react'

import classes from './MillennialData.module.scss'
import BarChart from './Barchart'
import Doughnutchart from './Doughnutchart'

const AboutWork = () => {
	const unemployment = [20, 21]
	const goodBalance = [32, 39]
	const easyQuit = [35, 32]
	const wannaLeave = [35, 32]
	const cantQuit = [26, 31]
	const fenSec = [30, 29]
	const dontWantWorkInOffice = [75, 76]

	return (
		<>
			<div className={classes.dashboard}>
				<div className={classes.barWindow}>
					<BarChart data={unemployment} title='Нетрудоустроены, %' classes={classes} />
				</div>
				<div className={classes.dogWindow}>
					<Doughnutchart data={goodBalance} title='Отношение к домогательствам, %' />
				</div>
				<div className={classes.barWindow}>
					<BarChart data={easyQuit} title='Готовы легко уволиться, %' classes={classes} />
				</div>
				<div className={classes.barWindow}>
					<BarChart data={wannaLeave} title='Желают уволиться, %' classes={classes} />
				</div>
				<div className={classes.dogWindow}>
					<Doughnutchart data={fenSec} title='Не чувствуют в финансовой безопасности, %' />
				</div>	
				<div className={classes.barWindow}>
					<BarChart data={cantQuit} title='Не могут уволиться по иным обстоятельствам, %' classes={classes} />
				</div>
				<div className={classes.barWindow}>
					<BarChart
						data={dontWantWorkInOffice}
						title='Не хотят работать полный день в офисе, %'
						classes={classes}
					/>
				</div>
			</div>
		</>
	)
}

export default AboutWork
