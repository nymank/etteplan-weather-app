import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import weatherService from "../services/weatherService"
import ForecastTile from "./ForecastTile"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "../style/forecastStyle.css"

const TEMPLATE_DATA =
{
	"cod": "200",
	"message": 0,
	"cnt": 40,
	"list": [
		{
			"dt": 1708948800,
			"main": {
				"temp": 0.38,
				"feels_like": -1.58,
				"temp_min": 0.38,
				"temp_max": 0.92,
				"pressure": 1012,
				"sea_level": 1012,
				"grnd_level": 999,
				"humidity": 99,
				"temp_kf": -0.54
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 1.67,
				"deg": 115,
				"gust": 2.73
			},
			"visibility": 4423,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2024-02-26 12:00:00"
		},
		{
			"dt": 1708959600,
			"snow": {
				"3h": 3.5
			},
			"main": {
				"temp": 0.41,
				"feels_like": 0.41,
				"temp_min": 0.41,
				"temp_max": 0.56,
				"pressure": 1013,
				"sea_level": 1013,
				"grnd_level": 999,
				"humidity": 99,
				"temp_kf": -0.15
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 1.27,
				"deg": 60,
				"gust": 1.94
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2024-02-26 15:00:00"
		},
		{
			"dt": 1708970400,
			"main": {
				"temp": 0.23,
				"feels_like": 0.23,
				"temp_min": 0.23,
				"temp_max": 0.23,
				"pressure": 1013,
				"sea_level": 1013,
				"grnd_level": 1000,
				"humidity": 99,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 0.62,
				"deg": 40,
				"gust": 0.63
			},
			"visibility": 10000,
			"pop": 0.05,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2024-02-26 18:00:00"
		},
		{
			"dt": 1708981200,
			"main": {
				"temp": 0.23,
				"feels_like": 0.23,
				"temp_min": 0.23,
				"temp_max": 0.23,
				"pressure": 1015,
				"sea_level": 1015,
				"grnd_level": 1001,
				"humidity": 99,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 0.67,
				"deg": 346,
				"gust": 0.64
			},
			"visibility": 10000,
			"pop": 0.28,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2024-02-26 21:00:00"
		},
		{
			"dt": 1708992000,
			"main": {
				"temp": -4.5,
				"feels_like": 0.11,
				"temp_min": 0.11,
				"temp_max": 0.11,
				"pressure": 1016,
				"sea_level": 1016,
				"grnd_level": 1002,
				"humidity": 98,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 1.23,
				"deg": 306,
				"gust": 2.42
			},
			"visibility": 10000,
			"pop": 0.17,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2024-02-27 00:00:00",
			"rain": {
				"3h": 0.26
			},
		}
	]
}




/**
 * Render 'tiles' forecast tiles for city
 * @param {object} city
 */
const Forecast = ({ city, tiles }) => {

	const [forecast, setForecast] = useState([])

	useEffect(() => {
		// weatherService.getForecast(city.lat, city.lng)
		// 	.then((data) => {
		// 		if (data.list) {
		// 			// updateForecast(data.list.slice(0, 5))
		// 			// updateForecast(data)
		// 		}
		// 	})
		updateForecast(TEMPLATE_DATA.list.slice(0, 5))
	}, [])

	const updateForecast = (forecastData) => {
		setForecast(forecastData)
	}

	if (!forecast) {
		return <p className="small-light">Fetching forecast </p>
	}

	return (
		<Container>
			<Row>
				{forecast.map((f, index) => {
					const timeparts = f.dt_txt.split(" ")[1].split(":")
					const time = `${timeparts[0]}:${timeparts[1]}`
					// if there is percipitation, it can be rain or snow. For forecasts only 3h
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
