import React from 'react';
import './home.css';
import './dropletValues.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class DropletValues extends React.Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 3000,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true
		};
		return (
			<div>
				<Slider {...settings}>
					<div>
						<img src={require('../../images/Droplet-Banner-01.jpg')} />
						<div className="image-text">
							<div>
								<h1>Trust</h1>
								<p>Trust that you will believe, at Droplet,
	in each of our endeavors, we will keep
your needs and expectation first.</p>
							</div>
						</div>
					</div>
					<div>
						<img src={require('../../images/Droplet-Banner-02.jpg')} />
						<div className="image-text">
							<div>
								<h1>Discipline</h1>
								<p>The Ants reflect discipline. When it shines,
	they work hard with discipline so that they
	can live off the rainy days with peace.

</p>
							</div>
						</div>
					</div>
					<div>
						<img src={require('../../images/Droplet-Banner-03.jpg')} />
						<div className="image-text">
							<div>
								<h1>Longevity</h1>
								<p>We deal in a product that is inherently
	perceived risky. However, research has
	proven that longevity negates risk.

</p>
							</div>
						</div>

					</div>
				</Slider>
			</div>
		);
	}
}