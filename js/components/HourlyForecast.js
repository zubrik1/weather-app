// import WeatherApi from '../services/api.js';
import '../../css/hourly_view.css';

export default class HourlyForecast {
	constructor() {
		this.props = {};

		this.host = document.createElement('div');
		this.host.classList.add('hourlyForecast-container');
	}
	
	update(nextProps){
		this.props = nextProps;
		//console.log(this.props);
		return this.render();
	}

	render() {
		const forecast = this.props.hourlyForecast;
		if(Object.keys(forecast).length === 0){
			return this.host.innerHTML = '';
		}
		const items = forecast.data.slice(2, 10).map((data) => {
			return `
				<div class='hourlyForecastItem'>
					<div class = 'hour'> ${(data.datetime).slice(-2)}:00</div>	
					<div class='hourlySummary'>											
						<div class = 'hourlyTemperature'>
							<h2 class = 'hourlyTemperature'> ${Math.round(data.temp)}° </h2>
							<img src = 'img/icons/${data.weather.icon}.png'>
						</div>
						<h4 class ='hourlyDescription'>${data.weather.description}</h4>							
					</div>
					<div class='hourlyDetails'>
						<div class = 'horlyDetailItem'>
							<div><i class="fas fa-tint"></i></div>
							<div> ${data.pop} %</div>
						</div>
						<div class = 'horlyDetailItem'>
							<div> <i class="fab fa-fly"></i></div>
							<div> ${data.wind_spd} m/s </div>
						</div>
						
					</div>
				</div>
			`;
		}).join('');

		this.host.innerHTML = `
			<div class='mainForecast'>
				${items}
			</div>
		`;
		
		return this.host;
	}
}

