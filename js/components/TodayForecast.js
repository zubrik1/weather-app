export default class WeekForecast {
	constructor() {
		this.props = {};
		// this.state = {
		// 	days: 3
		// };
		this.host = document.createElement('div');

		//this.host.addEventListener('click', this.handleScale);
	}
	
	update(nextProps){
		this.props = nextProps;
		console.log(this.props);
		return this.render();
	}

	render() {
		const forecast = this.props.forecast;
		console.log(forecast);
		const mainItem =  `
		<div class='mainForecastItem'>
			<div class='summary'>
				<div class = 'date'>
					<h2 class = 'dayOfDate'> getDate.toLocaleString('en-US', {weekday: 'long' });</h2>
					<div class = 'dateFull'>getDate.toLocaleString('en-US', {year: 'numeric', month: 'short', day: 'numeric' });</div>
				</div>
				<div class = 'temperature'>
					<h2 class = 'avrTemperature'> Math.round(data.temp) + '°'</h2>
					<img src = 'img/icons/forecast.data.weather.icon.png'>
				</div>
				<div class = 'minMax'>
					<div class ='minTemperature'>
						<span>min:  </span>
						<span>Math.round(data.min_temp) + '°' + ' |'</span>
					</div>
					<div class = 'maxTemperature'>
						<span>'| ' + 'max: ' </span>
						<span>Math.round(forecast.data.max_temp) + '°'</span>
					</div>
				</div>
				<h4>data.weather.description</h4>
			</div>
			<div class='details'>
				<div class = 'detailItem'>
					<span> <i class="fas fa-tint"></i></span>
					<span> Humidity:</span>
					<span> data.pop + '%'</span>
				</div>
				<div class = 'detailItem'>
					<span> <i class="fas fa-umbrella"></i></i></span>
					<span> Precipitation:</span>
					<span> data.precip + ' mm'</span>
				</div>
				
				<div class = 'detailItem'>
					<span> <i class="fab fa-fly"></i></span>
					<span> Wind: </span>
					<span> data.wind_spd + 'm/s '</span>
					<span> data.wind_cdir_full</span>
				</div>

				<div class = 'detailItem'>
					<span> <i class="fas fa-thermometer-half"></i></span>
					<span> Pressure:</span>
					<span> data.pres + ' mb'</span>
				</div>

				<div class = 'detailItem'>
					<span><i class="fas fa-eye"></i></span>
					<span> Visisbility:</span>
					<span> data.vis + ' km'</span>
				</div>
			</div>
		</div>
		<div class = 'hoursForecast'></div>
		`;
		this.host.innerHTML = `
		<div class='mainForecast'>
			${mainItem}
		</div>`;
		console.log(this.props);
		return this.host;
	}
}

































/*import WeatherApi from '../services/api.js';
import '../../css/view.css';


let params = {
	units: 'M',
	days: '1',
	city: 'lviv'
};

export function getForecast () {
	let cityWeather = new WeatherApi();
	cityWeather.getDailyForecast(params)
		.then(data => {
			displayForecast(data);
			console.log(data);
		});
}

function displayForecast (data) {
	
	const main = document.querySelector('.main');
	const mainForecast = document.createElement('div');
	main.appendChild(mainForecast);
	mainForecast.className= 'mainForecast';

	data.data.forEach((day) => {
		const mainForecastItem = document.createElement('div');
		mainForecast.appendChild(mainForecastItem);
		mainForecastItem.className= 'mainForecastItem';
        
		const summary = generateSummary(day);
		mainForecastItem.appendChild(summary);
       

		const details = generateDetails(day);
		mainForecastItem.appendChild(details);
	});
}

function generateSummary (data) {
	const summary = document.createElement('div');
	summary.className  = 'summary';

	const date = document.createElement('div');
	const dayOfDate = document.createElement('div');
	const dateFull = document.createElement('div');
	let getDate = new Date(data.datetime);
	dayOfDate.innerText =  getDate.toLocaleString('en-US', {weekday: 'long' });
	dateFull.innerText =  getDate.toLocaleString('en-US', {year: 'numeric', month: 'short', day: 'numeric' });
	date.appendChild(dayOfDate);
	dayOfDate.className ='dayOfDate';
	summary.appendChild(dateFull);
	dateFull.className ='dateFull';
	date.className ='date';
	
	const temperature = document.createElement('div');
	temperature.className  = 'temperature';
	summary.appendChild(temperature); 

	const weatherIcon = document.createElement('img');
	weatherIcon.src = `img/icons/${data.weather.icon}.png`;
	temperature.appendChild(weatherIcon);	
    
	const avrTemperature = document.createElement('h2');
	avrTemperature.innerText = Math.round(data.temp) + '°';
	temperature.appendChild(avrTemperature);
	avrTemperature.className  = 'avrTemperature';
    
	const temperatureMixMax = document.createElement('div');
	temperatureMixMax.className  = 'minMax';
	temperature.appendChild(temperatureMixMax);

	const minTemperature = document.createElement('div');
	const minTemperatureHeader = document.createElement('span');1;
	const minTemperatureData = document.createElement('span');
	minTemperatureHeader.innerText = 'min: ';
	minTemperatureData.innerText = Math.round(data.min_temp) + '°';
	minTemperature.appendChild(minTemperatureHeader);
	minTemperature.appendChild(minTemperatureData);
	temperatureMixMax.appendChild(minTemperature);

	const maxTemperature = document.createElement('div');
	const maxTemperatureHeader = document.createElement('span');
	const maxTemperatureData = document.createElement('span');
	maxTemperatureHeader.innerText = 'max: ';
	maxTemperatureData.innerText = Math.round(data.max_temp) + '°';
	maxTemperature.appendChild(maxTemperatureHeader);
	maxTemperature.appendChild(maxTemperatureData);
	temperatureMixMax.appendChild(maxTemperature);

	const description = document.createElement('h4');
	description.innerText = data.weather.description;
	summary.appendChild(description); 
	description.className  = 'description';
	return summary;
}

function generateDetails (data) {
	const details = document.createElement('div');
	details.className  = 'details'; 
    
	const humidity = document.createElement('div');
	const humidityIcon = document.createElement('div');
	const humidityHeader = document.createElement('div');
	const humidityData = document.createElement('div');
	humidityIcon.innerHTML = '<i class="fas fa-tint"></i>';
	humidityHeader.innerText = 'Humidity';
	humidityData.innerText = data.pop + '%';
	humidity.appendChild(humidityIcon);
	humidity.appendChild(humidityHeader);
	humidity.appendChild(humidityData);
	details.appendChild(humidity);
	
	const precipitation = document.createElement('div');
	const precipIcon = document.createElement('div');
	const precipHeader = document.createElement('div');
	const precipData = document.createElement('div');
	precipIcon.innerHTML = '<i class="fas fa-umbrella"></i>';
	precipHeader.innerText = 'Precipitation';
	precipData.innerText = data.precip + ' mm';
	precipitation.appendChild(precipIcon);
	precipitation.appendChild(precipHeader);
	precipitation.appendChild(precipData);
	details.appendChild(precipitation);
    
	const windData = document.createElement('div');
	const windIcon = document.createElement('div');
	const windHeader = document.createElement('div');
	const windSpeed = document.createElement('span');
	const windDirection = document.createElement('span');
	windIcon.innerHTML = '<i class="fab fa-fly"></i>';
	windHeader.innerText = 'Wind';
	windSpeed.innerText = data.wind_spd + 'm/s ';
	windDirection.innerText = data.wind_cdir;
	windData.appendChild(windIcon);
	windData.appendChild(windHeader);
	windData.appendChild(windSpeed);
	windData.appendChild(windDirection);
	details.appendChild(windData);  

	const pressure = document.createElement('div');
	const pressureIcon = document.createElement('div');
	const pressureHeader = document.createElement('div');
	const pressureData = document.createElement('div');
	pressureIcon.innerHTML = '<i class="fas fa-thermometer-half"></i>';
	pressureHeader.innerText = 'Pressure';
	pressureData.innerText = data.pres + ' mb';
	pressure.appendChild(pressureIcon);
	pressure.appendChild(pressureHeader);
	pressure.appendChild(pressureData);
	details.appendChild(pressure);
    
	const visibility = document.createElement('div');
	const visibIcon= document.createElement('div');
	const visibHeader = document.createElement('div');
	const visibData = document.createElement('div');
	visibIcon.innerHTML = '<i class="fas fa-eye"></i>';
	visibHeader.innerText = 'Visisbility';
	visibData.innerText = data.vis + ' km';
	visibility.appendChild(visibIcon);
	visibility.appendChild(visibHeader);
	visibility.appendChild(visibData);
	details.appendChild(visibility);

	return details;
}

    
//const city = document.createElement('div');
//city.innerText = data.;
//summary.appendChild(city);
//city.className  = 'cityTitle';

/*const weatherIcon = document.createElement('img');
	weatherIcon.src = `img/icons/${data.weather.icon}.png`;
	summary.appendChild(weatherIcon);

	const temperature = document.createElement('div');
	temperature.className  = 'temperature';
	summary.appendChild(temperature);
    
	const avrTemperature = document.createElement('h2');
	avrTemperature.innerText = Math.round(data.temp) + '°';
	temperature.appendChild(avrTemperature);
	avrTemperature.className  = 'avrTemperature';
    
	const temperatureMixMax = document.createElement('div');
	temperatureMixMax.className  = 'minMax';
	temperature.appendChild(temperatureMixMax);

	const minTemperature = document.createElement('div');
	const minTemperatureHeader = document.createElement('span');1;
	const minTemperatureData = document.createElement('span');
	minTemperatureHeader.innerText = 'min: ';
	minTemperatureData.innerText = Math.round(data.min_temp) + '°';
	minTemperature.appendChild(minTemperatureHeader);
	minTemperature.appendChild(minTemperatureData);
	temperatureMixMax.appendChild(minTemperature);

	const maxTemperature = document.createElement('div');
	const maxTemperatureHeader = document.createElement('span');
	const maxTemperatureData = document.createElement('span');
	maxTemperatureHeader.innerText = 'max: ';
	maxTemperatureData.innerText = Math.round(data.max_temp) + '°';
	maxTemperature.appendChild(maxTemperatureHeader);
	maxTemperature.appendChild(maxTemperatureData);
	temperatureMixMax.appendChild(maxTemperature);

	const description = document.createElement('h4');
	description.innerText = data.weather.description;
	summary.appendChild(description); 
	description.className  = 'description';
	return summary;
}

function generateDetails (data) {
	const details = document.createElement('div');
	details.className  = 'details'; 
    
	const humidity = document.createElement('div');
	const humidityHeader = document.createElement('span');
	const humidityData = document.createElement('span');
	humidityHeader.innerText = 'Humidity: ';
	humidityData.innerText = data.pop + '%';
	humidity.appendChild(humidityHeader);
	humidity.appendChild(humidityData);
	details.appendChild(humidity);
	
	const precipitation = document.createElement('div');
	const precipHeader = document.createElement('span');
	const precipData = document.createElement('span');
	precipHeader.innerText = 'Precipitation: ';
	precipData.innerText = data.precip + ' mm';
	precipitation.appendChild(precipHeader);
	precipitation.appendChild(precipData);
	details.appendChild(precipitation);
    
	const windData = document.createElement('div');
	const windHeader = document.createElement('span');
	const windSpeed = document.createElement('span');
	const windDirection = document.createElement('span');
	windHeader.innerText = 'Wind: ';
	windSpeed.innerText = data.wind_spd + 'm/s ';
	windDirection.innerText = data.wind_cdir;
	windData.appendChild(windHeader);
	windData.appendChild(windSpeed);
	windData.appendChild(windDirection);
	details.appendChild(windData);  

	const pressure = document.createElement('div');
	const pressureHeader = document.createElement('span');
	const pressureData = document.createElement('span');
	pressureHeader.innerText = 'Pressure: ';
	pressureData.innerText = data.pres + ' Pa';
	pressure.appendChild(pressureHeader);
	pressure.appendChild(pressureData);
	details.appendChild(pressure);
    
	const visibility = document.createElement('div');
	const visibHeader = document.createElement('span');
	const visibData = document.createElement('span');
	visibHeader.innerText = 'Visibility: ';
	visibData.innerText = data.vis + ' km';
	visibility.appendChild(visibHeader);
	visibility.appendChild(visibData);
	details.appendChild(visibility);

	return details;
}*/
