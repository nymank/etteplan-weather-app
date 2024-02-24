import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import weatherService from "../services/weatherService"
import "../style/weatherStyle.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

const Weather = (props) => {

	const { city } = props

	const [temp, setTemp] = useState(null)
	const [windSpeed, setWindSpeed] = useState(null)
	const [description, setDescription] = useState(null)
	const [isFetching, setIsFetching] = useState(true)
	const [iconCode, setIconCode] = useState(null)

	/**
	 * Get weather from weatherService
	 */
	const getWeather = () => {
		setIsFetching(true)
		weatherService
			.getWeather(
				city["lat"],
				city["lng"]
			)
			.then((weatherData) => updateWeather(weatherData.current))
			.catch((err) => console.error(err))
	}

	useEffect(getWeather, [])

	/**
	 * @brief Set weather state variables based on weather data from API
	 * @param {Object} currWeatherData weather data that is returned by weatherService.getWeather https://openweathermap.org/api/one-call-3#history
	 */
	const updateWeather = (currWeatherData) => {
		setTemp(currWeatherData.temp)
		setWindSpeed(currWeatherData.wind_speed)
		setIsFetching(false)
		setIconCode(
			convertIconCode(
				currWeatherData.weather[0].description,
				currWeatherData.dt < currWeatherData.sunset
			)
		)
		// capitalize first letter
		let desc = currWeatherData.weather[0].description
		desc = `${desc[0].toUpperCase()}${desc.substring(1, desc.length)}`
		setDescription(desc)
	}

	/**
	 * @brief Get the day or night icon code part from https://openweathermap.org/weather-conditions#Icon-list
	 * @param {String} description short description
	 * @param {Boolean} isDay whether to return day or night version of icon code
	 * @returns {String} icon code based on description
	 */
	const convertIconCode = (description, isDay) => {
		const nORd = isDay ? "d" : "n"
		switch (description) {
			case "clear sky":
				return `01${nORd}`
			case "few clouds":
				return `02${nORd}`
			case "scattered clouds":
				return `03${nORd}`
			case "broken clouds":
				return `04${nORd}`
			case "shower rain":
				return `09${nORd}`
			case "rain":
				return `10${nORd}`
			case "thunderstorm":
				return `11${nORd}`
			case "snow":
				return `13${nORd}`
			case "light snow":
				return `13${nORd}`
			case "mist":
				return `50${nORd}`
			default:
				return ""
		}
	}

	return (
		<Container fluid className="weather">
			{isFetching ?
				<p>Fetching weather data...</p>
				:
				<>
					<Row>
						<Col>
							<Container className="city-name">
								<p className="regular-text" style={{ paddingTop: "15px" }}>{city.name}</p>
								<p className="small-light">{description}</p>
							</Container>
						</Col>
						<Col>
							<Row>
								<Col>
									<Container>
										<img
											src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
											alt=""
											style={{ textAlign: "right" }}
										/>
									</Container>
								</Col>
								<Col>
									<p style={{ fontSize: "26pt", textAlign: "left", color: "#262626" }}>{temp} °C</p>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col>
							<Container>
								<p style={{ textAlign: "left", fontSize: "15pt" }} className="regular-text">May 5th</p>
								<p style={{ textAlign: "left" }} className="small-light">12:32</p>
							</Container>
						</Col>
						<Col>
							<p style={{ textAlign: "right" }} className="small-light">Windspeed {windSpeed} m/s</p>
							<p style={{ textAlign: "right" }} className="small-light">Windspeed {windSpeed} m/s</p>
						</Col>
					</Row>
				</>
			}
		</Container>
	)
}

Weather.propTypes = {
	city: PropTypes.shape({
		name: PropTypes.string.isRequired,
		lat: PropTypes.number.isRequired,
		lng: PropTypes.number.isRequired,
	}).isRequired,
}

export default Weather
