import Container from "react-bootstrap/Container"
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Weather from "./Weather"
import Forecast from "./Forecast"
import weatherService from "../services/weatherService"

const WeatherContainer = (props) => {
	const { city } = props

	const [forecast, setForecast] = useState(null)



	return (
		<Container style={{ maxWidth: "518px" }}>
			<Weather city={city}/>
			<Forecast city={city} />
		</Container>
	)

}


WeatherContainer.propTypes = {
	city:
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			lat: PropTypes.number.isRequired,
			lng: PropTypes.number.isRequired,
		}).isRequired
}

export default WeatherContainer