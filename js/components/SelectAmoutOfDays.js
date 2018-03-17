import '../../css/amount_of_days.css';

class AmountOfDays {
	constructor() {
		this.props = {};

		this.handleChange = this.handleChange.bind(this);

		this.host = document.createElement('div');
		this.host.classList.add('days-container');

		this.host.addEventListener('change', this.handleChange);
	}
	updateState(nextState){
		this.state = Object.assign({}, this.state, nextState);
		this.render();
	}
	
	update(nextProps){
		this.props = nextProps;
		//console.log(this.props);
		return this.render();
	}

	handleChange(ev) {
		const amountOfDays = ev.target.value;
		this.props.onChange(amountOfDays);
	}

	getCheckedValue (value) {	
		if(value === +this.props.days){
			return 'checked';
		}	
	}
    
	render() { 

		this.host.innerHTML = `
            <input type="radio" name="selectDay" id="current" value = "1" class="input-hide" ${this.getCheckedValue(1)}></input>
            <label for="current">Current</label> 
            <input type="radio" name="selectDay" id="4" value = "4" class="input-hide" ${this.getCheckedValue(4)}></input>            
            <label for="4">4 Days</label>
            <input type="radio" name="selectDay" id="8" value = "8" class="input-hide" ${this.getCheckedValue(8)}></input>
            <label for="8">8 Days</label> 
            <input type="radio" name="selectDay" id="16" value = "16" class="input-hide" ${this.getCheckedValue(16)}></input>
			<label for="16">16 Days</label>  
		`;
            
        
		return this.host;
	}


}
export default AmountOfDays;
