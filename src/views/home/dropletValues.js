import React from 'react';
import './home.css';


class DropletValues extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class='slider relative'>
				<div className="slider-bg-images">
					<img src={require('../../images/banner-stock.png')} />
					<img src={require('../../images/Droplet-Banner-01.jpg')} className="slide1" />
					<img src={require('../../images/Droplet-Banner-02.jpg')} />
					<img src={require('../../images/banner-stock.png')} />
					<img src={require('../../images/Droplet-Banner-03.jpg')} className="slide3" />
					<img src={require('../../images/Droplet-Banner-01.jpg')} className="slide1" />
					<img src={require('../../images/banner-stock.png')} />
					<img src={require('../../images/Droplet-Banner-02.jpg')} className="slide2" />
					<img src={require('../../images/Droplet-Banner-01.jpg')} />
					<img src={require('../../images/Droplet-Banner-02.jpg')} className="slide2" />

				</div>
				<div className="slider-content">
					<div class='slide1'>
						<h2>Trust</h2>
						<p>Trust that you will believe, at Droplet,  in each of our endeavors, we will keep  your needs and expectation first.</p>
					</div>
					<div class='slide2'>
						<h2>Discipline</h2>
						<p>The Ants reflect discipline. When it shines, they work hard with discipline so that they can live off the rainy days with peace.</p>
					</div>
					<div class='slide3'>
						<h2>Longevity</h2>
						<p>We deal in a product that is inherently
							perceived risky. However, research has
							proven that longevity negates risk.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default DropletValues;
