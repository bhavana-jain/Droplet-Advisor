import React from 'react';
import ReactDOM from 'react-dom';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import GetStarted from '../../components/getStarted';
import LazyLoad from 'react-lazyload';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './home.css';


class Home extends React.Component {
	responsive = {
		0: { items: 1 },
		1024: { items: 4 },
	}
	bannerResponsive = {
		1280: { items: 1 }
	}

	//	const handleOnDragStart = (e) => e.preventDefault()
	render() {
		return (
			<div>
				<div className="relative droplet-home-banner">
					<img src={require("../../images/finance-banner2.jpg")} />

					<Carousel emulateTouch showThumbs={false} showArrows={false}
						infiniteLoop={true} showStatus={false} autoPlay={true} interval={5000} className="droplet-value">
						<div className="droplet-value-list">

							<p>Trust that you will believe, at Droplet, <br /> in each of our endeavors, we will keep <br /> your needs and expectation first.</p>
						</div>
						<div className="droplet-value-list">
							<p>The Ants reflect discipline. When it shines, <br />they work hard with discipline so that they <br />can live off the rainy days with peace.</p>


						</div>
						<div className="droplet-value-list">

							<p>We deal in a product that is inherently <br />
								perceived risky. However, research has <br />
								proven that longevity negates risk.</p>
						</div>

					</Carousel>
				</div>
				{/* Our Services */}

				<div className="text-center services-bg">
					<div className="droplet-overview container">
						<h2 className="text-center"> Who We Are</h2>
						<p>At any point of time, there is 40% of population that is at work in our country. The average life span @ work in 30 years. At Droplet, we believe that every 30 Years, at least half of this workforce should become “financially independent”. However, Financial Independence is still a relatively unknown term in our country. Our Mission is to educate the masses about Financial Independence.</p>
						<button className="btn">Know More About Us</button>
						<div className="">
							<h2 className="text-center"> Our Valuable Services</h2>
							<ul className="services-list-block">
								<li className="services-block-wrap"></li>
								<li className="services-block-wrap"></li>
								<li className="services-block-wrap"></li>
							</ul>
						</div>
					</div>
				</div>
				<LazyLoad debounce={true} unmountIfInvisible={true}>
					<GetStarted />
				</LazyLoad>
			</div >
		)
	}
}

export default Home
