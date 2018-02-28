class LocationSearch {
	constructor() {
		this.props = {};
		this.state = {
			isValid: true,
		};
		this.handleSubmit = this.handleSubmit.bind(this);

		this.host = document.createElement('div');
		this.host.classList.add('search-container');

		this.host.addEventListener('submit', this.handleSubmit);
	}

	updateState(nextState){
		this.state = Object.assign({}, this.state, nextState);
		this.render();
	}

	update(nextProps){
		this.props = nextProps;
		console.log(this.props);
		return this.render();
	}

	handleSubmit(ev) {
		ev.preventDefault();

		const city = ev.target.elements.search.value.trim();

		if(!city.length) {
			this.updateState({isValid: false});
		}else{
			this.props.onSubmit(city);
		}
	}

	render() {
		const { isValid } = this.state;
		const { city } = this.props;
		this.host.innerHTML = `
            <form class =${isValid ? '"weather-form"' : '"weather-form -invalid"'}>
                <input name = 'search' required class = 'search-field' autofocus 
				placeholder="Enter the city that needs a hero... or forecast" value=${city}>
				<button class='weather-search submit-button'>F</button>
				<button class='weather-search location-button'>L</button>
            </form>`;

		return this.host;
	}

}
export default LocationSearch;