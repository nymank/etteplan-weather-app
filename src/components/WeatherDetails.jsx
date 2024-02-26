import React from "react"
import PropTypes from "prop-types"
import Container from "react-bootstrap/Container"


const WeatherDetails = ({ windSpeed, humidity, precipitation }) => {
	return (
		<Container className="weather-details">
			<p className="small-light">Windspeed {windSpeed} m/s</p>
			<p className="small-light">Humidity {humidity} %</p>
			<p className="small-light">Precipitation (3h) {Number(precipitation)} mm</p>
		</Container>
	)
}

/*
style={{ marginBottom: "0px" }
style={{ marginBottom: "0px" }
style={{ marginBottom: "0px" }

*/

WeatherDetails.propTypes = {
	windSpeed: PropTypes.string,
	humidity: PropTypes.number,
	precipitation: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	])
}

export default WeatherDetails
