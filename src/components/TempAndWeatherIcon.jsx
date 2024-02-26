import React from "react"
import PropTypes from "prop-types"
import Container from "react-bootstrap/Container"
import Temperature from "./Temperature"
import WeatherIcon from "./WeatherIcon"

/**
 * Temperature in celsius grouped with a weather icon
 */
const TempAndWeatherIcon = ({ temp, iconCode }) => {
	return (
		<Container className="d-flex flex-row-reverse align-items-center">
			<WeatherIcon iconCode={iconCode} />
			<Temperature temp={temp} fontSize="26pt" />
		</Container>
	)
}

TempAndWeatherIcon.propTypes = {
	temp: PropTypes.number,
	iconCode: PropTypes.string
}

export default TempAndWeatherIcon
