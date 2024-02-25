# etteplan-weather-app
Weather application that shows weather data for the locations of Etteplan offices in Finland for the current day.

## Installation
The app can be installed and run with Docker or directly with node. First clone the application with `git clone`. Then build and run the application with one of the following:  

### Docker
1. Start Docker daemon (e.g. Docker desktop)  
- Install Docker: https://docs.docker.com/get-docker/  
2. Run on the command line:  
`cd <this-application-directory>`  
`docker build -t etteplan-weather-app .`  
`docker run etteplan-weather-app`  

### Without docker using node
1. Install nodeJS v18.17.1 or similiar  
2. Navigate to application directory and run  
`npm install && npm start`  

Node installation was tested only on Windows.  


