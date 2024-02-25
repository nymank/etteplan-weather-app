import React from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap" // Assuming you're using react-bootstrap for the Container component

const NameAndDesc = ({ name, description }) => {
	return (
		<Container className="city-name">
			<p className="regular-text">{name}</p>
			<p className="small-light">{description}</p>
		</Container>
	)
}

NameAndDesc.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string
}

export default NameAndDesc
