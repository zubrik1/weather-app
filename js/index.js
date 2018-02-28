import App from './app.js';

const init = new App();

init.render();























/*form.addEventListener('submit', ev => {
	const city = ev.target.elements.search.value.trim();

	if(!city.length) {
		getForecast(city).then(([today, week]) => {
			renderToday(today);
			renderWeek(week);
		});
	}
});


/*let params = {
	units: 'M',
	days: '1',
	city: ''
};

if (location.pathname !== '/') {
	params.city = decodeURIComponent(location.pathname.slice(1));
	// const data = JSON.parse(localStorage.getItem(key));
	// displayForecast(data);
	let cityWeather = new WeatherApi();
	cityWeather.getDailyForecast(params)
		.then(data => {
			displayForecast(data);
			addRecentCity(data);
		});
}

const searchField = document.getElementById('search');
searchField.onkeypress = onKeyPress;
const celius = document.getElementById('C');
celius.onclick = toggleScale.bind(null,'M');
const farenheit = document.getElementById('F');
farenheit.onclick = toggleScale.bind(null,'I');
const forecastPeriod = document.querySelector('.forecastPeriod');
forecastPeriod.onchange = togglePeriod;

/*if (location.hash) {
	params.city = location.hash; 
	let cityWeather = new WeatherApi();
	cityWeather.getDailyForecast(params)
		.then(data => {
			displayForecast(data);
			addRecentCity(data);
		});
}

function getForecast () {
	const text = document.getElementById('search');
	params.city = text.value;
	let state = {};
	history.pushState(state, 'city', text.value);
	let cityWeather = new WeatherApi();
	cityWeather.getDailyForecast(params)
		.then(data => {
			displayForecast(data);
			addRecentCity(data);
		});
}

window.addEventListener('popstate', function() {
	let historyCity = location.pathname.slice(1);
	let cityData = JSON.parse(localStorage.getItem(historyCity));
	displayForecast(cityData);
});

function addRecentCity(data){
	let forecast = JSON.stringify(data);	
	localStorage[`${params.city}`] = `${forecast}`;
	const recentCitiesBlock = document.querySelector('.recentCities');
	const cities = recentCitiesBlock.children;
	for (let i = 0; i < cities.length; i++) {
		if (cities[i].innerText.toLowerCase() === params.city.toLowerCase()) {
			return;
		} 
	}
	if(cities.length>=5) {
		for(let i = 0; i < cities.length - 1; i++){
			cities[i].innerText = cities[i+1].innerText;
		}
		cities[cities.length - 1].innerText = params.city;
		return;
	}
	const recentCity = document.createElement('a');
	recentCitiesBlock.appendChild(recentCity);
	recentCity.innerText = `${params.city}`;
	recentCity.className = 'recentItem';
	recentCity.onclick = (event) => {
		let cityData = JSON.parse(localStorage.getItem(event.target.innerText));
		displayForecast(cityData);
		
	};
}

function removeChilds () {
	const mainForecast = document.getElementById('mainForecast');
	while (mainForecast.firstChild) {
		mainForecast.removeChild(mainForecast.firstChild);
	}
}

function displayForecast (data) {
	removeChilds();

	const mainForecast = document.getElementById('mainForecast');
	
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
	date.innerText = new Date().toLocaleDateString();
	summary.appendChild(date);
	date.className  = 'date';

	const weatherIcon = document.createElement('img');
	weatherIcon.src = `img/icons/${data.weather.icon}.png`;
	summary.appendChild(weatherIcon);

	const avrTemperature = document.createElement('div');
	avrTemperature.innerText = Math.round(data.temp) + '°';
	summary.appendChild(avrTemperature);
	avrTemperature.className  = 'avrTemperature';

	const temperature = document.createElement('div');
	temperature.className  = 'temperature';
	summary.appendChild(temperature);  

	const minTemperature = document.createElement('div');
	const minTemperatureHeader = document.createElement('span');1;
	const minTemperatureData = document.createElement('span');
	minTemperatureHeader.innerText = 'min: ';
	minTemperatureData.innerText = Math.round(data.min_temp) + '°';
	minTemperature.appendChild(minTemperatureHeader);
	minTemperature.appendChild(minTemperatureData);
	temperature.appendChild(minTemperature);

	const maxTemperature = document.createElement('div');
	const maxTemperatureHeader = document.createElement('span');
	const maxTemperatureData = document.createElement('span');
	maxTemperatureHeader.innerText = 'max: ';
	maxTemperatureData.innerText = Math.round(data.max_temp) + '°';
	maxTemperature.appendChild(maxTemperatureHeader);
	maxTemperature.appendChild(maxTemperatureData);
	temperature.appendChild(maxTemperature);

	const description = document.createElement('h4');
	description.innerText = data.weather.description;
	summary.appendChild(description); 
	description.className  = 'description';
	return summary;
}

function generateDetails (data) {
	const details = document.createElement('div');
	details.className  = 'details'; 
    
	const pressure = document.createElement('div');
	pressure.innerText = data.pres + ' Pa';
	details.appendChild(pressure);

	const humidity = document.createElement('div');
	humidity.innerText = data.pop + '%';
	details.appendChild(humidity);
    
	const windSpeed = document.createElement('div');
	windSpeed.innerText = data.wind_spd + ' m/s';
	details.appendChild(windSpeed);  

	return details;
}

function onKeyPress (event) { 
	if (event.which === 13 || event.keyCode === 13) {
		getForecast();
		//event.target.value = '';
		return false;
	}	
	return true;
}

function toggleScale (scale) { 
	params.units = scale;
	getForecast();
}

function togglePeriod () { 
	params.days = document.querySelector('.forecastPeriod').value;
	getForecast();
}*/
