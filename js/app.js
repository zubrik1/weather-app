import '../css/normalize.css';
import '../css/main.css';
import LocationSearch from './components/LocationSearch.js';
import AmountOfDays from './components/SelectAmoutOfDays.js';
import Scale from './components/ChangeScale.js';
import WeatherApi from './services/api';
import WeekForecast from './components/WeekForecast';
import HourlyForecast from './components/HourlyForecast';
import RecentCities from './components/RecentCities';
import FavoriteCities from './components/FavoriteCities';

class App {
	constructor(){
		this.host= document.querySelector('.main');
		this.main = document.createElement('div');
		this.main.classList.add('forecast-block');
		this.favorite = document.createElement('div');
		this.favorite.classList.add('favorite-block');
		this.tools = document.createElement('div');
		this.tools.classList.add('tools-block');
	
		this.state = {
			city: new URLSearchParams(window.location.search).get('city') || ' ',
			recentCities: JSON.parse(localStorage.getItem('recentCities')) || [],
			favoriteCities: JSON.parse(localStorage.getItem('favoriteCities')) || [],
			forecast: {},
			hourlyForecast: {},
			days: 1,

			//scale: isCelius;
		};
	
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.onAmountDaysChange = this.onAmountDaysChange.bind(this);
		this.onRecentClick = this.onRecentClick.bind(this);
		//this.addRecentCitiesSubmit = this.addRecentCitiesSubmit.bind(this);
		
		
		this.weatherApi = new WeatherApi();		

		this.locationSearch = new LocationSearch({
			city: this.state.city,
			onSubmit: this.onSearchSubmit,
		});

		this.hourlyForecast= new HourlyForecast({
			hourlyForecast: this.state.hourlyForecast
		});

		this.changeScale = new Scale({
		});
		this.weekForecast = new WeekForecast({
			forecast: this.state.forecast,
			days: this.state.days
		});

		this.amountOfDays = new AmountOfDays({
			days: this.state.days,
			city: this.state.city,
			onChange: this.onAmountDaysChange,
		});
		this.recentCities = new RecentCities({
			recentCities: this.state.recentCities,
			city: this.state.city,
			onClick: this.onRecentClick,
			
		});
		this.favoriteCities = new FavoriteCities({
			city: this.state.city,
			forecast: this.state.forecast,
		});
		//this.getData(this.state.city);
	}

	updateState(nextState) {
		this.state = Object.assign({}, this.state, nextState);
		this.render();
	}

	onSearchSubmit(city) {
		this.getData(city);
		this.addRecentCities(city);
	}

	addRecentCities(city){		
		const list = Object.assign({}, this.state.recentCities);
		for (let i = 0; i < list.length; i++) {
			if (list[i].toLowerCase() === city.toLowerCase()) {
				return;
			} 
		}
		if(list.length>=5) {
			for(let i = 0; i < list.length - 1; i++){
				list[i] = list[i+1];
			}
			list[list.length - 1] = city;
			return;
		}
		list.push(city);
		localStorage.setItem('recentCities', JSON.stringify(list));
		this.updateState({recentCities: list});
	}

	getData (city) {
		if (this.state.days == 1 ) { //eslint-disable-line
			this.weatherApi.getCurrentWeather({ city })			
				.then(( forecast ) => {
					forecast.data[0].datetime = forecast.data[0].datetime.slice(0, -3);
					this.updateState({ city, forecast});
				});
				
			this.weatherApi.getHourlyForecast({ city })
				.then((hourlyForecast ) => {
					this.updateState({ city, hourlyForecast});
				});
				
		} else{
			this.weatherApi.getDailyForecast({days: this.state.days, city })
				.then((forecast) => {
					this.updateState({ city, forecast });
				});
		}
		//history.pushState({}, 'city', `?city=${city}` );
	}


	onAmountDaysChange (days){
		this.updateState({ days });
		this.getData(this.state.city, days);
	}
	onRecentClick(city){
		this.updateState({ city });
		this.getData(city);
	}
	

	render() {
		const { city, forecast, days, hourlyForecast, recentCities } = this.state;
		
		this.host.innerHTML = '';
		this.host.append(this.favorite);
		this.host.append(this.main);
		

		this.favorite.append(
			this.favoriteCities.update({city})			
		);	

		this.main.append(
			this.locationSearch.update({ city, onSubmit: this.onSearchSubmit}),	
			this.recentCities.update({city, recentCities, onClick: this.onRecentClick}),
			this.tools,
			this.weekForecast.update({ forecast, days, city })
		);
		if (this.state.days == 1 ) { //eslint-disable-line
			this.main.append(this.hourlyForecast.update({ hourlyForecast, days, city }));
		} else {
			const container = document.querySelector('.hourlyForecast-container');
			if (container) {
				container.remove();
			}
		}
		this.tools.append(
			this.amountOfDays.update({days, city, onChange: this.onAmountDaysChange}),
			this.changeScale.render(),
		);
		return this.host;
	}	
}
export default App;


