/* eslint-disable react/react-in-jsx-scope */

import "./App.css"
import Weather from "./components/Weather"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
	const cities = [
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
	]

	return (
		<Container fluid className="App" style={{padding: "0px"}}>
			<Container fluid className="header">
				<p>Säätutka</p>
			</Container>
			<Container fluid>
				{/* cities.map((city) => <Weather city={city} key={city.name} />) */}
				<Weather city={cities[0]} />
			</Container>

		</Container>
	)
}

export default App
