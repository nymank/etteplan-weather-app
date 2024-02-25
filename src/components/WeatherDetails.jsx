import React from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap"


const WeatherDetails = ({ windSpeed, humidity, precipitation }) => {
	return (
		<Container className="weather-details">
			<p className="small-light" style={{ marginBottom: "0px" }}>Windspeed {windSpeed} m/s</p>
			<p className="small-light" style={{ marginBottom: "0px" }}>Humidity {humidity} %</p>
			<p className="small-light" style={{ marginBottom: "0px" }}>Precipitation (3h) {precipitation ? precipitation : 0} mm</p>
		</Container>
	)
}

WeatherDetails.propTypes = {
	windSpeed: PropTypes.string,
	humidity: PropTypes.number,
	precipitation: PropTypes.number
}

export default WeatherDetails
