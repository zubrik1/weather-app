class LocationSearch {
	constructor() {
		this.props = {};
		this.state = {
			isValid: true,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleBatClick = this.handleBatClick.bind(this);
		
		this.host = document.createElement('div');
		this.host.classList.add('search-container');

		this.btn = document.createElement('button');
		this.btn.classList.add('weather-search');
		this.btn.classList.add('bat-button');
		

		this.host.addEventListener('submit', this.handleSubmit);
		this.host.addEventListener('click', this.handleBatClick);
	}

	updateState(nextState){
		this.state = Object.assign({}, this.state, nextState);
		this.render();
	}

	update(nextProps){
		this.props = nextProps;
		return this.render();
	}

	handleSubmit(ev) {
		ev.preventDefault();

		const city = ev.target.elements.search.value.trim();

		if(!city.length) {
			this.updateState({isValid: false});
		}
		else{
			this.props.onSubmit(city);
		}
	}

	handleBatClick(ev) {
		
		if(ev.target.className === 'weather-search bat-button'){//eslint-disable-line
			this.props.onClick();
		}
	}

	render() {
		const { isValid } = this.state;
		const { city } = this.props;
		this.host.innerHTML='';

		this.host.append(this.btn);
		
		this.host.innerHTML += 
		`
			<form class =${isValid ? '"weather-form"' : '"weather-form -invalid"'}>
				<input name = 'search' required class = 'search-field' autofocus 
				placeholder="Enter the city that needs a hero... or forecast" value=${city}>				
				<button type = 'submit' class='weather-search submit-button'><i class="fas fa-search"></i></button>
				
            </form>`;

		return this.host;
	}

}
export default LocationSearch;
