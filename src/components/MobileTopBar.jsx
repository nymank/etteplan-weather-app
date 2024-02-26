import React, { useEffect } from "react"
import Container from "react-bootstrap/Container"
import { BsWifi, BsBatteryFull } from "react-icons/bs"
import "../style/mobileTopBarStyle.css"


const MobileTopBar = () => {

	return (
		<Container fluid className="mobile-top-bar">
			<div className="left-section">
				<p>Scetch</p>
				<BsWifi />
				<p style={{fontSize: "12pt"}}>•••••</p>
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
