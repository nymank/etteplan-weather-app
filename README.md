# Weather app
Weather application that shows weather data for the locations of Etteplan offices in Finland for the current day. Current weather and forecast is displayed.  
Created using ReactJS, react-bootstrap and https://openweathermap.org/api by Kalle Nyman 2024.  

## Installation
First clone the repository with `git clone`. The weather API key should be specified in a .env file at the project root like this:  
`REACT_APP_WEATHER_API_KEY="key-here"`  

Then build and run the application with either Node or Docker:  

### Node
1. Install nodeJS v18.17.1 or similiar  
2. Navigate to application directory and run  
`npm install && npm start`  

### Docker

1. Start Docker daemon (e.g. Docker desktop)
- Docker can be installed here: https://docs.docker.com/get-docker/
2. Run on the command line:
- `cd this-application-directory`
- `docker image build -t weather-app:latest .`
Building takes a while, something like 2-3 minutes.  
- `docker run -dp 3000:3000 weather-app:latest`
3. Open browser and navigate to http://localhost:3000  

The container can be stopped with  
`docker stop container-id`  


## Tests

To run automated Selenium IDE tests for the app:
1. Install Selenium (IDE) https://www.selenium.dev/selenium-ide/docs/en/introduction/getting-started#installation
2. Run selenium tests located in ./selenium-tests/etteplan-weather-app.side
- this can be done with the Browser IDE or CLI