
import '../css/normalize.css';
import '../css/main.css';
import LocationSearch from './components/LocationSearch.js';
import AmountOfDays from './components/SelectAmoutOfDays.js';
import Scale from './components/ChangeScale.js';
import WeatherApi from './services/api';
import WeekForecast from './components/WeekForecast';
import TodayForecast from './components/TodayForecast';

class App {
	constructor(){
		this.host= document.querySelector('.main');
		this.state = {
			city: new URLSearchParams(window.location.search).get('city') || '',
			forecast: {},
			hourlyForecast: {},
			days: 16,
			//scale: isCelius;
		};
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.onAmountDaysChange = this.onAmountDaysChange.bind(this);

		this.weatherApi = new WeatherApi();		

		this.locationSearch = new LocationSearch({
			city: this.state.city,
			onSubmit: this.onSearchSubmit,
			
		});

		this.todayForecast= new TodayForecast({
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
			onChange: this.onAmountDaysChange,
		});
		this.getData(this.state.city);
	}

	updateState(nextState) {
		this.state = Object.assign({}, this.state, nextState);
		this.render();
	}

	onSearchSubmit(city) {
		this.getData(city);
	}

	getData (city) {
		if (this.state.days === '1') {
			Promise.all([
				this.weatherApi.getHourlyForecast({ days: this.state.days, city }),
				this.weatherApi.getCurrentWeather({ days: this.state.days, city })
			])
				.then(([ hourlyForecast, forecast ]) => {
					forecast.data[0].datetime = forecast.data[0].datetime.slice(0, -3);
					this.updateState({ hourlyForecast, forecast });
				});
		}
		this.weatherApi.getDailyForecast({days: this.state.days, city })
			.then((forecast) => {
				this.updateState({ city, forecast });
			});
		history.pushState({}, 'city', `?city=${city}` );
	}


	onAmountDaysChange (days){
		this.updateState({ days });
	}

	render() {
		const { city, forecast, days, hourlyForecast } = this.state;
		console.log(this.state);
		this.host.innerHTML = '';
		this.host.append(	
			this.locationSearch.update({ city, onSubmit: this.onSearchSubmit}),
			this.amountOfDays.update({days,  onChange: this.onAmountDaysChange} ),
			this.changeScale.render(),
			this.weekForecast.update({ forecast, days, city })
		);
		if (this.state.days === '1') {
			this.host.append(this.todayForecast.update({ hourlyForecast }));
		}
		console.log(this.host);

		return this.host;
	}	
}
export default App;







