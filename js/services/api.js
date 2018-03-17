const API_KEY = 'f9f5be445c0d46deb0b59cf7c958fbc2';//'e9e78010e9a848668b42b57bbc099bca; f9f5be445c0d46deb0b59cf7c958fbc2' Weatherbit API key
const API_URL = 'https://api.weatherbit.io/v2.0';

export default class WeatherApi {

	constructor(){}

	getCurrentWeather(params) {
		return this.sendRequest(this.buildUrl('current', params));
	}
	getHourlyForecast(params) {
		return this.sendRequest(this.buildUrl('forecast/hourly', params));
	}
	getDailyForecast(params) {
		return this.sendRequest(this.buildUrl('forecast/daily', params));
	}
	sendRequest(url) {
		return fetch(url)
			.then(res => res.json());
	}
	buildUrl(method, params) {
		const getParams = Object.entries(params)
			.map(([key, value]) => (`${key}=${value}`))
			.join('&');
		return `${API_URL}/${method}?${getParams}&unit=M&key=${API_KEY}`;
	}
}


