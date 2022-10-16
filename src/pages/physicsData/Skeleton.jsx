import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => {
	const speed = 0.75
	const style = {
		width: '70%',
		margin: '0 auto',
	}

	return (
		<div style={style}>
			<ContentLoader
				speed={speed}
				width={1200}
				height={500}
				viewBox='0 0 1200 500'
				backgroundColor='#f3f3f3'
				foregroundColor='#ecebeb'
			>
				<rect x='1' y='12' rx='0' ry='0' width='60%' height='26' />
				<rect x='1' y='55' rx='0' ry='0' width='60%' height='537' />
			</ContentLoader>
		</div>
	)
}

export default Skeleton
