import React from "react"
import PropTypes from "prop-types"

const Temperature = ({ temp }) => {
	return (
		<p className="regular-text" style={{ fontSize: "26pt", textAlign: "right", width: "63px" }}>{temp} °C</p>
	)
}

Temperature.propTypes = {
	temp: PropTypes.string
}

export default Temperature
