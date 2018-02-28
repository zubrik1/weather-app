import '../../css/amount_of_days.css';

class AmountOfDays {
	constructor() {
		this.props = {};
        
		this.host = document.createElement('div');
		this.host.classList.add('days-container');

		//this.host.addEventListener('click', this.handleScale);
	}
	
	update(nextProps){
		this.props = nextProps;
		console.log(this.props);
		return this.render();
	}

	// onRadioButtonChange (event) {
	// 	this.props.onRadioButtonChange();
	// }
    
	render() {
		this.host.innerHTML = `
            <input type="radio" name="selectDay" id="current" class="input-hide" checked></input>
            <label for="current">Current</label> 
            <input type="radio" name="selectDay" id="4"  class="input-hide"></input>            
            <label for="4">4 Days</label>
            <input type="radio" name="selectDay" id="7"  class="input-hide"></input>
            <label for="7">7 Days</label> 
            <input type="radio" name="selectDay" id="14" class="input-hide"></input>
            <label for="14">14 Days</label>  `;
            
        
		return this.host;
	}


}
export default AmountOfDays;
