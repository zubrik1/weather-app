import '../../css/scale.css';

class Scale {
	constructor() {
		this.props = {};
        
		this.host = document.createElement('div');
		this.host.classList.add('scale-container');

		//this.host.addEventListener('click', this.handleScale);
	}
	
	update(nextProps){
		this.props = nextProps;
		console.log(this.props);
		return this.render();
	}
    
	render() {
		this.host.innerHTML = `
            <input type="radio" name="toggleScale" id="C" value="metric" class="input-hide" checked></input>
            <label for="C">°C</label> 
            <input type="radio" name="toggleScale" id="F" value="imperial" class="input-hide"></input>            
            <label for="F">°F</label> `;
        
		return this.host;
	}


}
export default Scale;
