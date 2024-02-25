import React from "react"
import Container from "react-bootstrap/Container"
import PropTypes from "prop-types"



const DateAndTimeStacked = (props) => {
	const {currentDate, currentTime} = props
	return (
		<Container style={{ paddingTop: "20px", minWidth: "160px" }}>
			<p style={{ textAlign: "left", fontSize: "15pt", marginBottom: "0px" }}>{currentDate}</p>
			<p className="small-light" style={{ textAlign: "left" }} >{currentTime}</p>
		</Container>
	)
}


DateAndTimeStacked.propTypes = {
	currentDate: PropTypes.string,
	currentTime: PropTypes.string
}

export default DateAndTimeStacked