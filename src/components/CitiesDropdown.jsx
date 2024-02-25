/* eslint-disable react/prop-types */
import Dropdown from "react-bootstrap/Dropdown"
import Container from "react-bootstrap/Container"
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import "../style/App.css"

const CitiesDropdown = ({ cities, setCities }) => {

	const DEFAULT_DD_TITLE = "Kaikki kaupungit"
	const [selectedCity, setSelectedCity] = useState(DEFAULT_DD_TITLE)
	const [allCities, setAllCities] = useState([])

	const handleSelection = (name) => {
		setCities(allCities.filter((c) => c.name === name))
		setSelectedCity(name)
	}

	// set all city names for dropdown
	useEffect(() => {
		setAllCities(cities)
	}, [])

	const resetDD = () => {
		setSelectedCity(DEFAULT_DD_TITLE)
		setCities(allCities)
	}

	return (
		<Container style={{ maxWidth: "518px" }}>
			<Dropdown style={{ marginTop: "20px" }}>
				<Dropdown.Toggle
					id="dropdown-basic"
					className="city-dd-toggle"
					variant="light"
					style={{
						display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%",
						textAlign: "left", backgroundColor: "white", border: "solid 1px #E6E6E6", padding: "15px"
					}}
				>
					<span style={{ flexGrow: 1 }}>{selectedCity}</span>
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{/* Default title, DD item */}
					<Dropdown.Item style={{ textAlign: "left", width: "100%" }} onClick={resetDD}>{DEFAULT_DD_TITLE}</Dropdown.Item>
					{/* Rest of the Dropdown items. Using lat + lng for unique key prop */}
					{allCities.map((city) => <Dropdown.Item style={{ width: "100%" }} key={String(city.lng)+String(city.lat)}
						onClick={() => handleSelection(city.name)}>{city.name}</Dropdown.Item>)}
				</Dropdown.Menu>
			</Dropdown>
		</Container>
	)
}

CitiesDropdown.propTypes = {
	cities: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			lat: PropTypes.number,
			lng: PropTypes.number,
		}).isRequired
	).isRequired,
	setCities: PropTypes.func.isRequired
}
export default CitiesDropdown