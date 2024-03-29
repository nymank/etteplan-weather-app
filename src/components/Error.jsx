import React from "react"
import PropTypes from "prop-types"

/**
 * Generic error text component
 */
const Error = ({ errorText }) => {
	return (
		<p className="error">{errorText}</p>
	)
}

Error.propTypes = {
	errorText: PropTypes.string.isRequired
}

export default Error
