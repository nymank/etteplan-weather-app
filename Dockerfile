FROM node:18-alpine
WORKDIR /etteplan-weather/
COPY public/ /etteplan-weather/public
COPY src/ /etteplan-weather/src
COPY .env /etteplan-weather/
COPY package.json /etteplan-weather/
RUN npm install
CMD ["npm", "start"]
