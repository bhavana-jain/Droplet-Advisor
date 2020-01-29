import React from 'react';
import './home.css';
import './dropletValues.css'

class DropletValues extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="slides">
				<ul>
					<li><img src={require('../../images/Droplet-Banner-01.jpg')} />
						<div>Promo text #1</div>
					</li>
					<li><img src={require('../../images/Droplet-Banner-02.jpg')} alt="image02" />
						<div>Promo text #2</div>
					</li>
					<li><img src={require('../../images/Droplet-Banner-03.jpg')} alt="image03" />
						<div>Promo text #3</div>
					</li>
				</ul>
			</div>
		)
	}
}

export default DropletValues;
