
import "./style/App.css"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import WeatherContainer from "./components/WeatherContainer"
import CitiesDropdown from "./components/CitiesDropdown"
import React, { useState } from "react"
import MobileTopBar from "./components/MobileTopBar"

/**
 * Weather radar app, that displays information about cities' current weather and forecast.
 */
function App() {
	const [cities, setCities] = useState([
		{
			"name": "Tampere",
			"lat": 61.4991,
			"lng": 23.7871
		},
		{
			"name": "Jyväskylä",
			"lat": 62.2415,
			"lng": 25.7209
		},
		{
			"name": "Kuopio",
			"lat": 62.8924,
			"lng": 27.677
		},
		{
			"name": "Espoo",
			"lat": 60.25,
			"lng": 24.6667
		}
	])

	return (
		<div className="App">
			<Container fluid className="justify-content-md-center" style={{ padding: 0, paddingBottom: "40px" }}>
				<MobileTopBar />
				<Header title="Säätutka" />
				<Container fluid style={{maxWidth: "512px"}}>
					<CitiesDropdown cities={cities} setCities={setCities} />
					{cities.map((city) => <WeatherContainer city={city} key={`${city.name}${city.lat+city.lng}`} /> )}
				</Container>
			</Container>
		</div>
	)
}

export default App
