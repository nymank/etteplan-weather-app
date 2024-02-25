import axios from "axios"

const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/3.0/onecall"
const PERCIPITATION_API_BASE_URL = "http://history.openweathermap.org/data/2.5/history/accumulated_precipitation"

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
 * Get accumulated percipitation over a period between start and end. https://openweathermap.org/api/accumulated-parameters#precip
 * @param {Number} start Start date (unix time, UTC time zone), e.g. start=1586853378
 * @param {Number} end End date (unix time, UTC time zone), e.g. end=1589445367
 * @param {String} lat latitude
 * @param {String} lng longitude
 * @returns {Object} API response data
 */
const getAccPercipitation = (start, end, lat, lng) => {
	const URL = `${PERCIPITATION_API_BASE_URL}?lat=${lat}&lon=${lng}&start=${start}&end=${end}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
	return axios.get(URL)
		.then(res => res.data)
		.catch(err => err.response)
}

export default { getWeather, getAccPercipitation }