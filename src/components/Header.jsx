
import Container from "react-bootstrap/Container"
import React from "react"
import PropTypes from "prop-types"
import "../style/headerStyle.css"

const Header = (props) => {
	const { title } = props

	return (
		<Container fluid className="header">
			<p>{title}</p>
		</Container>
	)

}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header