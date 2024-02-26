import React, { useEffect } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { BsWifi, BsBatteryFull } from "react-icons/bs"
import "../style/headerStyle.css"

const MobileTopBar = () => {

	return (
		<Container fluid className="mobile-top-bar">
			<div className="left-section">
				<p>Scetch</p>
				<BsWifi />
				<p>.....</p>
			</div>
			<div className="right-section">
				<BsBatteryFull />
				<p>{getCurrentTime()}</p>
			</div>
		</Container>
	)
}

function getCurrentTime() {
	const currentTime = new Date()
	return currentTime.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	})
}

export default MobileTopBar
