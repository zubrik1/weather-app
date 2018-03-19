import '../../css/favorite.css';

export default class FavoriteCities{
	constructor() {
		this.props = {};
        
		this.host = document.createElement('ul');
		this.host.classList.add('favorite-cities');
		
		this.handleClick = this.handleClick.bind(this);
		this.host.addEventListener('click', this.handleClick);
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

	handleClick(ev) {
		this.props.onClick(ev);
	}


	render() {
		const {favoriteCities}  = this.props;
		this.host.innerHTML = `        
            <h4 class = 'favoriteTitle'> Favorite cities</h4>
		`;
		this.host.innerHTML += favoriteCities.map((city)=>{
			return `<li class = 'favorite-container'>  
			<a class ='favoriteItem'>${city}</a>
			<button class ='deleteFavoriteBtn'></button>
			</div>`;
		}).join(' ');

		return this.host;
	}
    
//<button class ='addFavoriteBtn'><i class="far fa-star"></i></button>


}







// function addRecentCity(data){
// 	let forecast = JSON.stringify(data);	
// 	localStorage[`${params.city}`] = `${forecast}`;
// 	const recentCitiesBlock = document.querySelector('.recentCities');
// 	const cities = recentCitiesBlock.children;
// 	for (let i = 0; i < cities.length; i++) {
// 		if (cities[i].innerText.toLowerCase() === params.city.toLowerCase()) {
// 			return;
// 		} 
// 	}
// 	if(cities.length>=5) {
// 		for(let i = 0; i < cities.length - 1; i++){
// 			cities[i].innerText = cities[i+1].innerText;
// 		}
// 		cities[cities.length - 1].innerText = params.city;
// 		return;
// 	}
// 	const recentCity = document.createElement('a');
// 	recentCitiesBlock.appendChild(recentCity);
// 	recentCity.innerText = `${params.city}`;
// 	recentCity.className = 'recentItem';
// 	recentCity.onclick = (event) => {
// 		let cityData = JSON.parse(localStorage.getItem(event.target.innerText));
// 		displayForecast(cityData);
		
// 	};
// }
