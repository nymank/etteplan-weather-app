import React from "react"
import PropTypes from "prop-types"
import Container from "react-bootstrap/Container"

/**
 * Display details specified by props with light text.
 */
const WeatherDetails = ({ windSpeed, humidity, precipitation }) => {
	return (
		<Container className="weather-details">
			<p className="small-light">Windspeed {windSpeed} m/s</p>
			<p className="small-light">Humidity {humidity} %</p>
			<p className="small-light">Precipitation (3h) {Number(precipitation)} mm</p>
		</Container>
	)
}

WeatherDetails.propTypes = {
	windSpeed: PropTypes.number,
	humidity: PropTypes.number,
	precipitation: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	])
}

export default WeatherDetails
