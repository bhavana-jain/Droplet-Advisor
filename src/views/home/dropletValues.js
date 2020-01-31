import React from 'react';
import './home.css';
import './dropletValues.css';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
	duration: 3000,
	transitionDuration: 500,
	infinite: true,
	indicators: false,
	autoplay: false,
	arrows: false,
	onChange: (oldIndex, newIndex) => {
		console.log(`fade transition from ${oldIndex} to ${newIndex}`);
	}
}

const DropletValues = () => {
	return (
		<div className="slide-container">
			<Fade {...fadeProperties}>
				<div className="each-fade">
					<div className="image-container">
						<img src={require('../../images/Droplet-Banner-01.jpg')} />
					</div>
				</div>
				<div className="each-fade">
					<div className="image-container">
						<img src={require('../../images/Droplet-Banner-02.jpg')} />
					</div>

				</div>
				<div className="each-fade">
					<div className="image-container">
						<img src={require('../../images/Droplet-Banner-03.jpg')} />
					</div>

				</div>
			</Fade>
		</div>
	)
}
export default DropletValues;
