import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import weatherService from "../services/weatherService"
import "../style/weatherStyle.css"
import "../style/App.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import DateAndTimeStacked from "./DateAndTimeStacked"
import WeatherDetails from "./WeatherDetails"
import TempAndWeatherIcon from "./TempAndWeatherIcon"
import NameAndDesc from "./NameAndDesc"
import Error from "./Error"

const Weather = (props) => {

	const { city } = props

	const [temp, setTemp] = useState(null)
	const [windSpeed, setWindSpeed] = useState(null)
	const [description, setDescription] = useState(null)
	// https://openweathermap.org/weather-conditions#Icon-list
	const [iconCode, setIconCode] = useState(null)
	const [humidity, setHumidity] = useState(null)
	const [currentDate, setCurrentDate] = useState(null)
	const [currentTime, setCurrentTime] = useState(null)
	const [statusText, setStatusText] = useState(null)
	const [errorText, setErrorText] = useState(null)
	const [percipitation, setPercipitation] = useState(null)

	/**
	 * Get weather from weatherService
	 */
	const getWeather = () => {
		setStatusText("Fetching weather data...")
		weatherService
			.getWeather(
				city["lat"],
				city["lng"]
			)
			.then((weatherData) => {
				if( !weatherData || !weatherData.current ) {
					// in this case weather data should be an error obj
					setStatusText("")
					setErrorText(`Error: request for weather data failed (status: ${weatherData.status})`)
				} else {
					updateWeather(weatherData.current)
				}
			})
			.catch((err) => {
				setStatusText("")
				setErrorText("Error: request for weather data failed")
			})
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
		setCurrentTime(currentTime)
		setCurrentDate(currentDate)
	}



	useEffect(getWeather, [])

	/**
	 * @brief Set weather state variables based on weather data from API
	 * @param {Object} currWeatherData weather data that is returned by weatherService.getWeather https://openweathermap.org/api/one-call-3#history
	 */
	const updateWeather = (currWeatherData) => {
		if( !currWeatherData ) {
			setStatusText("Could not get weather for " + city.name)
			return
		}
		setTemp(Number(currWeatherData.temp).toFixed(0))
		setWindSpeed(Number(currWeatherData.wind_speed).toFixed(1))
		setStatusText(null)
		// capitalize first letter
		let desc = currWeatherData.weather[0].description
		desc = `${desc[0].toUpperCase()}${desc.substring(1, desc.length)}`
		setDescription(desc)
		setIconCode(currWeatherData.weather[0].icon)
		setHumidity(currWeatherData.humidity)
		setTime(currWeatherData.dt)
		const rainOrSnow = currWeatherData.rain ? currWeatherData.rain : currWeatherData.snow
		let percipitationCopy
		if ( rainOrSnow ) {
			percipitationCopy = rainOrSnow["3h"] ? rainOrSnow["3h"] : rainOrSnow["1h"]
		} else {
			percipitationCopy = 0
		}
		setPercipitation(percipitationCopy)

	}

	if( errorText ) {
		return(
			<Container fluid className="weather">
				<NameAndDesc name={city.name} description={description} />
				<Error errorText={errorText} />
			</Container>
		)
	}

	return (
		<Container fluid className="weather">
			{statusText ?
				<Container>
					<NameAndDesc name={city.name} description={description} />
					<p className="regular-text">{statusText}</p>
				</Container>
				:
				<>
					<Row>
						<Col>
							<NameAndDesc name={city.name} description={description} />
						</Col>
						<Col>
							<TempAndWeatherIcon temp={temp} iconCode={iconCode} />
						</Col>
					</Row>
					<Row>
						<Col>
							<DateAndTimeStacked currentDate={currentDate} currentTime={currentTime} />
						</Col>
						<Col>
							<WeatherDetails windSpeed={windSpeed} humidity={humidity} percipitation={percipitation} />
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
