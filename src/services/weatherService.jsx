import axios from "axios"

const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/3.0/onecall"

const getWeather = (lat, lon) => {

	const URL = `${WEATHER_API_BASE_URL}?lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
	return axios.get(URL)
		.then(res => res.data)
		.catch(err => err.response)
}

export default { getWeather }