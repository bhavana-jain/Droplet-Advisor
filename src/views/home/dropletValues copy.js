import React from 'react';
import './home.css';
import './dropletValues.css';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
	duration: 3000,
	transitionDuration: 500,
	infinite: true,
	indicators: false,
	autoplay: true,
	arrows: false,
	onChange: (oldIndex, newIndex) => {
		console.log(`fade transition from ${oldIndex} to ${newIndex}`);
	}
}
let allText = document.getElementsByClassName('image-text');
Array.from(allText).forEach(function (element) {
	alert(element);
});
const DropletValues = () => {
	return (
		<div className="slide-container">
			<Fade {...fadeProperties}>
				<div className="each-fade">
					<div className="image-container">
						<img src={require('../../images/Droplet-Banner-01.jpg')} />
					</div>
					<div className="image-text">some text here</div>
				</div>
				<div className="each-fade">
					<div className="image-container">
						<img src={require('../../images/Droplet-Banner-02.jpg')} />
					</div>
					<div className="image-text">some text here 2</div>
				</div>
				<div className="each-fade">
					<div className="image-container">
						<img src={require('../../images/Droplet-Banner-03.jpg')} />
					</div>
					<div className="image-text">some 3 text here</div>
				</div>
			</Fade>
		</div>
	)
}
export default DropletValues;
