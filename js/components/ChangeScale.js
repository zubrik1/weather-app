import '../../css/scale.css';

class Scale {
	constructor() {
		this.props = {};
        
		this.host = document.createElement('div');
		this.host.classList.add('scale-container');

		this.host.addEventListener('change', this.handleScale);
	}
	updateState(nextState){
		this.state = Object.assign({}, this.state, nextState);
		this.render();
	}

	update(nextProps){
		this.props = nextProps;
		return this.render();
	}

	render() {
		this.host.innerHTML = `
		<select class="scale-container-select" title="Select units">
        	<option selected}>°C</option>
        	<option>°F</option>
      	</select> `;
        
		return this.host;
	}
}
export default Scale;
