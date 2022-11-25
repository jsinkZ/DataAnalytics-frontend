import React from 'react'

import Skeleton from './Skeleton'

const Table = ({ data, currentCategory, isLoading, classes }) => {
	return (
		<>
			{isLoading ? (
				<>
					<p> Loading... </p>
					<Skeleton />
				</>
			) : (
				<table>
					<tr>
						<td> </td>
						<td> Дисперсия </td>
						<td> Стандартное отклонение </td>
					</tr>
					<tr>
						<td> Температура </td>
						<td className={classes.tdValue}> {data?.[currentCategory]?.disp[0]} </td>
						<td className={classes.tdValue}> {data?.[currentCategory]?.var[0]} </td>
					</tr>
					<tr>
						<td> Давление </td>
						<td className={classes.tdValue}> {data?.[currentCategory]?.disp[1]} </td>
						<td className={classes.tdValue}> {data?.[currentCategory]?.var[1]} </td>
					</tr>
					<tr>
						<td> Масса </td>
						<td className={classes.tdValue}> {data?.[currentCategory]?.disp[2]} </td>
						<td className={classes.tdValue}> {data?.[currentCategory]?.var[2]} </td>
					</tr>
				</table>
			)}
		</>
	)
}

export default Table
