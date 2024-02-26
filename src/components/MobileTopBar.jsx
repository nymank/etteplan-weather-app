import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import { BsWifi, BsBatteryFull } from "react-icons/bs"
import "../style/mobileTopBarStyle.css"

/**
 * Top bar with wifi, battery-%, time etc. that is displayed only on mobile screen size devices.
 * 
 */
const MobileTopBar = () => {
	const [currentTime, setCurrentTime] = useState(null)
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		getCurrentTime()
		setInterval(getCurrentTime, 5000)
	}, [])

	const getCurrentTime = () => {
		const cTime = new Date()
		setCurrentTime(cTime.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		}))
	}

	useEffect(() => {
		function handleResize() {
			setIsVisible(window.innerWidth <= 1200)
		}

		handleResize() // Check initially
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	if (!isVisible) return null
	return (
		<Container fluid className="mobile-top-bar">
			<div className="left-section">
				<p>Scetch</p>
				<BsWifi />
				<p style={{ fontSize: "12pt" }}>•••••</p>
			</div>
			<div className="right-section">
				<BsBatteryFull />
				<p>{currentTime}</p>
			</div>
		</Container>
	)
}

export default MobileTopBar
