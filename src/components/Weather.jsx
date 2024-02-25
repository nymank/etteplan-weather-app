import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import weatherService from "../services/weatherService"
import "../style/weatherStyle.css"
import "../style/App.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

const Weather = (props) => {

	const { city } = props

	const [temp, setTemp] = useState(null)
	const [windSpeed, setWindSpeed] = useState(null)
	const [description, setDescription] = useState(null)
	const [isFetching, setIsFetching] = useState(true)
	// https://openweathermap.org/weather-conditions#Icon-list
	const [iconCode, setIconCode] = useState(null)
	const [humidity, setHumidity] = useState(null)
	const [currentTimeUnixUTC, setCurrentTimeUnixUTC] = useState(null)
	const [currentDate, setCurrentDate] = useState(null)
	const [currentTime, setCurrentTime] = useState(null)

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

	/**
	 * set time state variables
	 */
	const setTime = (timestamp) => {
		// convert Unix timestamp to milliseconds
		const milliseconds = timestamp * 1000
		const date = new Date(milliseconds)

		// Format the time (HH:MM)
		const hours = String(date.getHours()).padStart(2, "0")
		const minutes = String(date.getMinutes()).padStart(2, "0")
		const currentTime = `${hours}:${minutes}`

		// Format the date (Month Day)
		const day = date.getDate()
		const daySuffix =
			day === 1 || day === 21 || day === 31 ? "st" :
				day === 2 || day === 22 ? "nd" :
					day === 3 || day === 23 ? "rd" :
						"th"
		const options = { month: "long" }
		const currentDate = `${date.toLocaleDateString("en-US", options)} ${day}${daySuffix}`

		// Set the state variables
		setCurrentTimeUnixUTC(timestamp)
		setCurrentTime(currentTime)
		setCurrentDate(currentDate)
	}



	useEffect(getWeather, [])

	/**
	 * @brief Set weather state variables based on weather data from API
	 * @param {Object} currWeatherData weather data that is returned by weatherService.getWeather https://openweathermap.org/api/one-call-3#history
	 */
	const updateWeather = (currWeatherData) => {
		console.log(currWeatherData)
		setTemp(Number(currWeatherData.temp).toFixed(0))
		setWindSpeed(Number(currWeatherData.wind_speed).toFixed(1))
		setIsFetching(false)
		// capitalize first letter
		let desc = currWeatherData.weather[0].description
		desc = `${desc[0].toUpperCase()}${desc.substring(1, desc.length)}`
		setDescription(desc)
		setIconCode(currWeatherData.weather[0].icon)
		setHumidity(currWeatherData.humidity)
		setTime(currWeatherData.dt)
	}

	return (
		<Container fluid className="weather">
			{isFetching ?
				<Container>
					<Container className="city-name">
						<p className="regular-text" style={{ paddingTop: "15px", marginBottom: "0px" }}>{city.name}</p>
						<p className="small-light">{description}</p>
						<p>Fetching weather data...</p>
					</Container>
					<Container>
						<p style={{ textAlign: "left", fontSize: "15pt" }}>May 5th</p>
						<p className="small-light" style={{ textAlign: "left" }} >12:32</p>
					</Container>
				</Container>
				:
				<>
					<Row>
						<Col>
							<Container className="city-name">
								<p className="regular-text">{city.name}</p>
								<p className="small-light">{description}</p>
							</Container>
						</Col>
						<Col>
							<Container className="d-flex flex-row-reverse align-items-center">
								<p className="regular-text" style={{ fontSize: "26pt", textAlign: "right", width: "63px"}}>{temp} °C</p>
								<img
									src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
									alt=""
									width={80}
									height={80}
								/>

							</Container>
						</Col>
					</Row>
					<Row>
						<Col>
							<Container style={{ paddingTop: "20px" }}>
								<p style={{ textAlign: "left", fontSize: "15pt", marginBottom: "0px" }}>{currentDate}</p>
								<p className="small-light" style={{ textAlign: "left" }} >{currentTime}</p>
							</Container>
						</Col>
						<Col>
							<Container style={{ paddingTop: "20px" }}>
								<p className="small-light" style={{ textAlign: "right", marginBottom: "0px" }}>Windspeed {windSpeed} m/s</p>
								<p className="small-light" style={{ textAlign: "right", marginBottom: "0px" }}>Humidity {humidity} %</p>
							</Container>
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
