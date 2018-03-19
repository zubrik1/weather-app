import '../../css/recent.css';

export default class RecentCities{
	constructor() {
		this.props = {};
		
		this.handleClick = this.handleClick.bind(this);
		// this.addRecentCities = this.addRecentCities.bind(this);
		
		this.host = document.createElement('ul');
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
		if(ev.target.className === 'recentItem') {
			const cityClick = ev.target.innerHTML;
			console.log(ev);
			this.props.onClick(cityClick);
		}
	}
	

	render() {
		const {recentCities}  = this.props;
		this.host.innerHTML = recentCities.map((city) => {
			return `<li class='recentItem'>${city}</li>`;
		}).join('');

		return this.host;
	}

}







