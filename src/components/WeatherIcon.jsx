import React from "react"
import PropTypes from "prop-types"

/**
 * Render a weather icon based on iconCode, see https://openweathermap.org/weather-conditions#Icon-list
 */
const WeatherIcon = ({ iconCode }) => {
	if (!iconCode) return <></>
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
