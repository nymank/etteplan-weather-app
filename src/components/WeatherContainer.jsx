
import Container from "react-bootstrap/Container"
import React from "react"
import PropTypes from "prop-types"
import Weather from "./Weather"

const WeatherContainer = (props) => {
	const { cities } = props

	return (
		<Container style={{maxWidth: "518px"}}>
			{/*cities.map((city) => <Weather city={city} key={city.name} />)*/}
			<Weather city={cities[0]} />
		</Container>
	)

}


WeatherContainer.propTypes = {
	cities: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			lat: PropTypes.number.isRequired,
			lng: PropTypes.number.isRequired,
		}).isRequired
	).isRequired,
}

export default WeatherContainer