import React from "react"
import PropTypes from "prop-types"
import WeatherIcon from "./WeatherIcon"
import Temperature from "./Temperature"
import "../style/forecastStyle.css"

/**
 * Tile that shows forecast based on props.
 * @props see propTypes
 * @returns 
 */
const ForecastTile = ({ temp, windSpeed, precipitation, humidity, time, iconCode }) => {
	return (
		<div className="forecast-tile">
			<p className="small-light">{time}</p>
			<WeatherIcon iconCode={iconCode} />
			<Temperature fontSize="15pt" temp={Number(temp.toFixed(0))} />
			<div className="forecast-details">
				<p className="small-light" style={{ fontSize: "10pt" }}>{windSpeed} m/s</p>
				<p className="small-light" style={{ fontSize: "10pt" }}>{precipitation} mm</p>
				<p className="small-light" style={{ fontSize: "10pt" }}>{humidity} %</p>
			</div>
		</div>
	)
}

ForecastTile.propTypes = {
	temp: PropTypes.number.isRequired,
	windSpeed: PropTypes.number.isRequired,
	precipitation: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	humidity: PropTypes.number.isRequired,
	time: PropTypes.string.isRequired,
	iconCode: PropTypes.string.isRequired
}

export default ForecastTile
