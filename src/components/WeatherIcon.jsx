import React from "react"
import PropTypes from "prop-types"

const WeatherIcon = ({ iconCode }) => {

	return (
		iconCode ?
			<img
				src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
				alt=""
				width={67}
				height={67}
			/>
			:
			<></>
	)
}

WeatherIcon.propTypes = {
	iconCode: PropTypes.string
}

export default WeatherIcon
