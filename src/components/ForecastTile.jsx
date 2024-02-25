import React from "react"
import PropTypes from "prop-types"

const ForecastTile = ({ temp, windSpeed, precipitation, humidity }) => {
	return (
		<div>
			<p>t {temp}</p>
			<p>ws {windSpeed}</p>
			<p>prec {precipitation}</p>
			<p>hum {humidity}</p>
		</div>
	)
}

ForecastTile.propTypes = {
	temp: PropTypes.number.isRequired,
	windSpeed: PropTypes.number.isRequired,
	precipitation: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	humidity: PropTypes.number.isRequired,
}

export default ForecastTile
