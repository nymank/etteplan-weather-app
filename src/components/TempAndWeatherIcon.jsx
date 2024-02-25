import React from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap" // Assuming you're using react-bootstrap for the Container component
import Temperature from "./Temperature" // Assuming the Temperature component is in a separate file
import WeatherIcon from "./WeatherIcon" // Assuming the WeatherIcon component is in a separate file

const TempAndWeatherIcon = ({ temp, iconCode }) => {
	return (
		<Container className="d-flex flex-row-reverse align-items-center">
			<WeatherIcon iconCode={iconCode} />
			<Temperature temp={temp} />
		</Container>
	)
}

TempAndWeatherIcon.propTypes = {
	temp: PropTypes.string,
	iconCode: PropTypes.string
}

export default TempAndWeatherIcon
