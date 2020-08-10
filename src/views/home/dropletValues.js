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
			fade: true,
			autoPlay: true
		};
		return (
			<div>
				<Slider {...settings}>
					<div>
						{/* <div className="values-banner-1"></div> */}
						<img src='/images/Droplet-Banner-01.jpg' />
						<div className="image-text">
							<div>
								<h1>Trust</h1>
								<ul>
									<li>
										The Child in the Air savors the moment. Because it has complete trusts that her mother would hold her up.</li>
									<li>Likewise, we wish to win your trust so that you can enjoy the wonderful journey of Equity Investing.</li>
									<li>Trust that you will believe, at Droplet, in each of our endeavors, we will keep your needs and expectation first.</li>
								</ul>

							</div>
						</div>
						<div className="image-text-mobile">
							Trust that Droplet's each endeavors will be to meet your expectations.

						</div>
					</div>
					<div>
						<img src='/images/Droplet-Banner-02.jpg' />
						<div className="image-text">
							<div>
								<h1>Discipline</h1>
								<ul>
									<li>
										The Ants reflect discipline. When it shines, they work hard with discipline so that they can live off the rainy days with peace.
							</li>
									<li>We wish to inculcate the same discipline in your financial life.</li>
									<li>We hope you will give it your best.</li>
								</ul>
							</div>
						</div>
							<div className="image-text-mobile">
							Trust that Droplet's each endeavors will be to meet your expectations.

						</div>

					</div>
					<div>
						<img src='/images/Droplet-Banner-03.jpg' />
						<div className="image-text">
							<div>
								<h1>Longevity</h1>
								<ul>
									<li>A Banyan Tree lives for generations and just by staying put, it becomes so huge and abundant.</li>
									<li>
										We deal in a product that is inherently perceived risky. However, research has proven that longevity negates risk.
									</li>
									<li>
										We wish, just like the Banyan Tree, you would remain stay put in the game for a longer period.
									</li>
									<li>
										Thus, help your money become a Banyan Tree of Wealth.
									</li>

								</ul>
							</div>
						</div>
	<div className="image-text-mobile">
							Trust beliebe Droplet's each endeavors will be to meet your expectations.

						</div>

					</div>
				</Slider>
			</div>
		);
	}
}
