
import '../css/normalize.css';
import '../css/main.css';
import LocationSearch from './components/LocationSearch.js';
import AmountOfDays from './components/SelectAmoutOfDays.js';
import Scale from './components/ChangeScale.js';
import WeatherApi from './services/api';
import WeekForecast from './components/WeekForecast';



class App {
	constructor(){
		this.host= document.querySelector('.main');
		this.state = {
			city: new URLSearchParams(window.location.search).get('city') || '',
			forecast: {},
			days: 2
		};
		this.onSearchSubmit = this.onSearchSubmit.bind(this);

		this.weatherApi = new WeatherApi();		

		this.locationSearch = new LocationSearch({
			city: this.state.city,
			onSubmit: this.onSearchSubmit,
		});

		this.changeScale = new Scale({
		});
		this.weekForecast = new WeekForecast({
			forecast: this.state.forecast,
			days: this.state.days
		});

		this.amountOfDays = new AmountOfDays({
			days: this.state.days
		});
	}

	updateState(nextState) {
		this.state = Object.assign({}, this.state, nextState);
		this.render();
	}
	onSearchSubmit(city){
		this.weatherApi.getDailyForecast({days: this.state.days, city })
			.then((forecast) => {
				this.updateState({ city, forecast });
			});
		console.log(this.state);
		history.pushState({}, 'city', `?city=${city}` );
	}
	render() {
		const { city, forecast, days } = this.state;
		
		this.host.innerHTML = '';
		this.host.append(	
			this.locationSearch.update({ city, onSubmit: this.onSearchSubmit}),
			this.amountOfDays.render(),
			this.changeScale.render(),
			this.weekForecast.update({ forecast, days, city })
		);
		console.log(this.host);

		return this.host;
	}	
}
export default App;







