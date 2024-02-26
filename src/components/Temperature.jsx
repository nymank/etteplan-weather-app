import React from "react"
import PropTypes from "prop-types"
import "../style/App.css"

/**
 * Temperature text
 */
const Temperature = ({ temp, fontSize }) => {
	return (
		<p className="regular-text"
			style={{ fontSize: fontSize, textAlign: "right", width: "63px" }}>
			{temp ? temp : temp * -1} °C {/* in case temp is '-0' make it 0 */}
		</p>
	)
}

Temperature.propTypes = {
	temp: PropTypes.number,
	fontSize: PropTypes.string
}

export default Temperature
