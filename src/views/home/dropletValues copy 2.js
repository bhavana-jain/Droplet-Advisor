import React from 'react';
import './home.css';
import './dropletValues.css';
import { Fade } from 'react-slideshow-image';

class DropletValues extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			slideIndex: 0
		}

	}
	componentDidMount() {
		this.setState({
			loaded: true

		})

	}





	render() {

		return (
			<>
				<div className="image-container">
					<div className="image-wrap">
						<img src={require('../../images/Droplet-Banner-01.jpg')} />
						<div className="image-text">
							<h1>Trust</h1>
							<p>Trust that you will believe, at Droplet,
in each of our endeavors, we will keep
your needs and expectation first.</p>
						</div>
					</div>
					<div className="image-wrap">
						<img src={require('../../images/Droplet-Banner-02.jpg')} />
						<div className="image-text">
							<h1>Discipline</h1>
							<p>The Ants reflect discipline. When it shines,
they work hard with discipline so that they
can live off the rainy days with peace. 

</p>
						</div>
					</div>
					<div className="image-wrap">
						<img src={require('../../images/Droplet-Banner-03.jpg')} />
						<div className="image-text">
							<h1>Longevity</h1>
							<p>We deal in a product that is inherently
perceived risky. However, research has
proven that longevity negates risk.

</p>
						</div>
					</div>

				</div>			</>
		)
	}
}
export default DropletValues;
