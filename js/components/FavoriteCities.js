import '../../css/favorite.css';

export default class FavoriteCities{
	constructor() {
		this.props = {};
        
		this.host = document.createElement('div');
		this.host.classList.add('favorite-cities');
	}
	
	update(nextProps){
		this.props = nextProps;
		//console.log(this.props);
		return this.render();
	}

	addRecentCities(city){
		const list = this.state.recentCities;
		for (let i = 0; i < list.length; i++) {
			if (list[i].toLowerCase() === city.toLowerCase()) {
				return;
			} 
		}
		list.push(city);
		localStorage.setItem('recentCities', JSON.stringify(list));
	}

	render() {
		const {}  = this.props;
		this.host.innerHTML = `        
        <header class = 'favorite'>  
            <h4 class = 'favoriteTitle'> Favorite cities</h4>
		</header>
		<div class = 'favorite-container'>  
			<a>city</a>
			<button class ='deleteFavoriteBtn'> <i class="fas fa-ban"></i></button>
		</div>
		<div class = 'favorite-container'>  
			<a>city</a>
			<button class ='deleteFavoriteBtn'> <i class="fas fa-ban"></i></button>
		</div>
       `;
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
