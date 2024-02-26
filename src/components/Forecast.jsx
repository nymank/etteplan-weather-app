import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import weatherService from "../services/weatherService"
import ForecastTile from "./ForecastTile"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "../style/forecastStyle.css"
import Error from "./Error"

/**
 * Render 'tiles' forecast tiles for city. Forecast is fetched for every three hours.
 * @param {object} city lat, lng
 * @param {Number} tiles optional tile count
 */
const Forecast = ({ city, tiles }) => {

	const [forecast, setForecast] = useState([])
	const [error, setError] = useState("")

	const DEFAULT_TILES = 5

	// fetch forecast or use cache
	useEffect(() => {
		let cachedForecasts = sessionStorage.getItem("forecasts")
		cachedForecasts = cachedForecasts ? JSON.parse(cachedForecasts) : cachedForecasts
		const threeHoursInSecs = 60 * 60 * 3
		let forecastStartTimeDiff = 0
		if (cachedForecasts) {
			// calculate if cache is more than 3 hours old
			const first = cachedForecasts[0].dt_txt
			const dateparts = first.split(" ")[0].split("-").map(p => Number(p))
			const timeparts = first.split(" ")[1].split(":").map(p => Number(p))
			forecastStartTimeDiff = Date.UTC(dateparts[0], dateparts[1] - 1, dateparts[2], timeparts[0]) - Date.now()
		}
		if (!cachedForecasts || forecastStartTimeDiff / 1000 > threeHoursInSecs) {
			setError("")
			// no cached forecast or cached forecast start is over 3h ago, let's get a new one
			weatherService.getForecast(city.lat, city.lng)
				.then((data) => {
					if (!data || !data.list) {
						setError("Could not get forecast for " + city.name)
					} else if (data.list) {
						const first = data.list.slice(0, tiles)
						setForecast(first)
						sessionStorage.setItem("forecasts", JSON.stringify(first))
					} else {
						setError("Could not get forecast for " + city.name)
					}
				})
		} else {
			setForecast(cachedForecasts)
		}
	}, [])

	if (error) {
		return <Error errorText={error} />
	}

	if (!forecast) {
		return <p className="small-light">Fetching forecast </p>
	}

	if (!tiles) {
		tiles = DEFAULT_TILES
	}

	return (
		<Container>
			<Row>
				{forecast.slice(0, tiles).map((f) => {
					const timeparts = f.dt_txt.split(" ")[1].split(":")
					const time = `${timeparts[0]}:${timeparts[1]}`
					// if there is percipitation, it can be rain or snow. For forecasts API only 3h percipitation is available.
					const rainOrSnow = f.rain ? f.rain : f.snow
					const prec = rainOrSnow ? rainOrSnow["3h"] : 0
					return (
						<Col key={`${city.name}${time}`} className="forecast-col">
							<ForecastTile
								key={`${city.name}${time}`}
								temp={f.main.temp}
								windSpeed={f.wind.speed}
								humidity={f.main.humidity}
								time={time}
								precipitation={prec}
								iconCode={f.weather[0].icon}
							/>
						</Col>
					)
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
	tiles: PropTypes.number
}

export default Forecast
