import Container from "react-bootstrap/Container"
import React from "react"
import PropTypes from "prop-types"
import Weather from "./Weather"
import Forecast from "./Forecast"

/**
 * Container that renders current weather and forecast for city.
 * @param {Object} city {name, lat, lng}
 */
const WeatherContainer = ({ city }) => {

	return (
		<Container style={{ maxWidth: "518px" }}>
			<Weather city={city} />
			<Forecast city={city} tiles={5} />
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