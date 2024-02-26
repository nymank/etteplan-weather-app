import axios from "axios"

// Module for fetching weather data using openWeatherMap APIs

const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/3.0/onecall"
const FORECAST_API_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast"

/**
 * Get current weather https://openweathermap.org/api/one-call-3#current
 * @param {String} lat latitude
 * @param {String} lon longitude
 * @returns {Object} API response data
 */
const getWeather = (lat, lon) => {
	const URL = `${WEATHER_API_BASE_URL}?lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
	return axios.get(URL)
		.then(res => res.data)
		.catch(err => err.response)
}

/**
 * Get forecast data https://openweathermap.org/forecast5
 * @param {String} lat 
 * @param {String} lon 
 * @returns API response
 */
const getForecast = (lat, lon) => {
	const URL = `${FORECAST_API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
	return axios.get(URL)
		.then(res => res.data)
		.catch(err => err.response)
}

export default { getWeather, getForecast }