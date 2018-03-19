import '../../css/scale.css';

class Scale {
	constructor() {
		this.props = {};
		
		this.handleChange = this.handleChange.bind(this);

		this.host = document.createElement('div');
		this.host.classList.add('scale-container');

		this.host.addEventListener('change', this.handleChange);
	}
	updateState(nextState){
		this.state = Object.assign({}, this.state, nextState);
		this.render();
	}

	update(nextProps){
		this.props = nextProps;
		return this.render();
	}

	handleChange(ev) {
		this.props.onChange(ev);
	}

	render() {
		const {isCelsius} = this.props;
		this.host.innerHTML = `
		<select class="scale-container-select" title="Select units">
        	<option ${isCelsius ? 'selected': ''}>°C</option>
        	<option ${isCelsius ? '': 'selected'}>°F</option>
      	</select> `;
        
		return this.host;
	}
}
export default Scale;
