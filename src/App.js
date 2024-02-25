/* eslint-disable react/react-in-jsx-scope */

import "./style/App.css"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import WeatherContainer from "./components/WeatherContainer"

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
		<div className="App">
			<Container fluid className="justify-content-md-center" style={{ padding: 0, paddingBottom: "40px" }}>
				<Header title="Säätutka" />
				<WeatherContainer cities={cities} />
			</Container>
		</div>
	)
}

export default App
