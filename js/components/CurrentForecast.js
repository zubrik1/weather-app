// import WeatherApi from '../services/api.js';
import '../../css/week_view.css';

export default class WeekForecast {
	constructor() {
		this.props = {};

		this.host = document.createElement('div');
		this.host.classList.add('forecast-container');
	}
	
	update(nextProps){
		this.props = nextProps;
		//console.log(this.props);
		return this.render();
	}

	render() {
		const forecast = this.props.forecast;
		if(Object.keys(forecast).length === 0){
			return this.host.innerHTML = '';
		}
		const items = forecast.data.slice(0, this.props.days).map((data) => {
			return `
				<div class='mainForecastItem'>
					<div class='summary'>
						<div class = 'date'>
							<h2 class = 'dayOfDate'> ${new Date(data.datetime).toLocaleString('en-US', {weekday: 'long' })}</h2>
							<div class = 'dateFull'> ${new Date(data.datetime).toLocaleString('en-US', {year: 'numeric', month: 'short', day: 'numeric' })}</div>
						</div>
						<div class = 'temperature'>
							<h2 class = 'avrTemperature'> ${Math.round(data.temp)}° </h2>
							<img src = 'img/icons/${data.weather.icon}.png'>
						</div>
						<div class = 'minMax'>
							<div class ='minTemperature'>
								<span>min:  </span>
								<span>${Math.round(data.min_temp)}° | </span>
							</div>
							<div class = 'maxTemperature'>
								<span>| max: </span>
								<span>${Math.round(data.max_temp)}°</span>
							</div>
						</div>
						<h4>${data.weather.description}</h4>
					</div>
					<div class='details'>
						<div class = 'detailItem'>
							<span><i class="fas fa-tint"></i></span>
							<span>  Humidity:</span>
							<span> ${data.pop} %</span>
						</div>
						<div class = 'detailItem'>
							<span><i class="fas fa-umbrella"></i></i></span>
							<span>Precipitation:</span>
							<span> ${data.precip} mm</span>
						</div>
						<div class = 'detailItem'>
							<span> <i class="fab fa-fly"></i></span>
							<span> Wind: </span>
							<span> ${data.wind_spd} m/s </span>
							<span> ${data.wind_cdir_full}</span>
						</div>
						<div class = 'detailItem'>
							<span> <i class="fas fa-thermometer-half"></i></span>
							<span> Pressure:</span>
							<span> ${data.pres} mb</span>
						</div>
						<div class = 'detailItem'>
							<span><i class="fas fa-eye"></i></span>
							<span> Visisbility:</span>
							<span> ${data.vis} km</span>
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

