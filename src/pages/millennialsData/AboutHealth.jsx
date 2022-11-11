import React from 'react'

import classes from './MillennialData.module.scss'
import BarChart from './Barchart'
import Doughnutchart from './Doughnutchart'

const AboutHealth = () => {
	const climateChange = [24, 25]
	const mentalHealth = [19, 20]
	const harassment = [17, 18]
	const workBadHealth = [12, 17]
	const burned = [12, 14]
	const development = [29, 29]
	const bigCEOandClimat = [15, 14]
	const govermentVsClimat = [11, 13]

	return (
		<>
			<div className={classes.dashboard}>
				<div className={classes.barWindow}>
					<BarChart data={climateChange} title='Отношение к климатическим изменениям, %' classes={classes} />
				</div>
				<div className={classes.dogWindow}>
					<Doughnutchart data={harassment} title='Отношение к домогательствам, %' />
				</div>
				<div className={classes.barWindow}>
					<BarChart data={mentalHealth} title='Ментальное здоровье, %' classes={classes} />
				</div>
				<div className={classes.barWindow}>
					<BarChart
						data={workBadHealth}
						title='Работа негативно сказывается на психике, %'
						classes={classes}
					/>
				</div>
				<div className={classes.dogWindow}>
					<Doughnutchart data={burned} title='Выгорания, %' />
				</div>
				<div className={classes.barWindow}>
					<BarChart data={development} title='Собственное стремление развиваться, %' classes={classes} />
				</div>
				<div className={classes.barWindow}>
					<BarChart
						data={bigCEOandClimat}
						title='Уверены, что большие компании решают проблемы климата, %'
						classes={classes}
					/>
				</div>
				<div className={classes.barWindow}>
					<BarChart
						data={govermentVsClimat}
						title='Уверены, что правительство борется с климатом %'
						classes={classes}
					/>
				</div>
			</div>
		</>
	)
}

export default AboutHealth
