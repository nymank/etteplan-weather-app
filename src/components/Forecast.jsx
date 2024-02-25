import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import weatherService from "../services/weatherService"
import ForecastTile from "./ForecastTile"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const Forecast = ({ city }) => {

	const [forecast, setForecast] = useState(null)

	useEffect(() => {
		weatherService.getForecast(city.lat, city.lng)
			.then((data) => {
				updateForecast(data.list.slice(0, 5))
			})
	}, [])

	const updateForecast = (forecastData) => {
		console.log(forecastData)
		setForecast(forecastData)
	}

	if (!forecast) {
		return <p className="small-light">Fetching forecast </p>
	}

	return (
		<Container>
			<Row>
				{forecast.map((f, index) => {
					<Col>
						<ForecastTile key={index} temp={f.main.temp} windSpeed={f.wind.speed} humidity={f.main.humidity} />
					</Col>
				})}
			</Row>
		</Container>
	)
}

Forecast.propTypes = {
	city: PropTypes.shape({
		name: PropTypes.string.isRequired,
		lat: PropTypes.number.isRequired,
		lng: PropTypes.number.isRequired,
	}).isRequired,
}

export default Forecast
