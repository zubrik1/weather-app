import '../../css/recent.css';

export default class RecentCities{
	constructor() {
		this.props = {};
		
		this.handleClick = this.handleClick.bind(this);
		// this.addRecentCities = this.addRecentCities.bind(this);
		
		this.host = document.createElement('div');
		this.host.classList.add('recent-cities');

		this.host.addEventListener('click', this.handleClick);
		
		//console.log(this.props);
	}
		
	update(nextProps){
		this.props = nextProps;
		console.log(this.props);
		return this.render();
	}

	handleClick(ev) {
		const cityClick = ev.target.text;
		this.props.onClick(cityClick);
	}
	

	render() {
		const {recentCities}  = this.props;
		this.host.innerHTML = recentCities.map((city) => {
			return `<a>${city}</a>`;
		}).join('');

		return this.host;
	}

}







