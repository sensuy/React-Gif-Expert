import React from 'react'
import PropTypes from 'prop-types'

const GifFrid = ({category}) => {
	return (
		<div>
			<h3> { category } </h3>
		</div>
	)
}

GifFrid.propTypes = {
	category: PropTypes.string.isRequired
}

export default GifFrid
