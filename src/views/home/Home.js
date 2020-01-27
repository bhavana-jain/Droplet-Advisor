import React from 'react';
import GetStarted from '../../components/getStarted';
import LazyLoad from 'react-lazyload';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ServicesList from './services';
import DropletValues from './dropletValues';
import Blogs from '../blogs/blogs'
import { Animated } from "react-animated-css";
import { NavLink } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';

import './home.css';


class Home extends React.Component {
	constructor(props) {
		super(props);

	}
	//	const handleOnDragStart = (e) => e.preventDefault()
	render() {
		return (
			<div>
				<DropletValues />
				{/* <div className="relative droplet-home-banner">
					<img src={require("../../images/finance-banner2.jpg")} />

					<Carousel emulateTouch showThumbs={false} showArrows={false} infiniteLoop={true}
						showStatus={false} autoPlay={true} interval={5000}
						onChange={this.renderContent} className="droplet-value">
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
				</div> */}
				{/* Our Services */}

				<div className="text-center services-bg">
					<div className="droplet-overview container">
						<h1 className="text-center"> Who We Are</h1>
						<p>At any point of time, there is 40% of population that is at work in our country. The average life span @ work in 30 years. At Droplet, we believe that every 30 Years, at least half of this workforce should become “financially independent”. However, Financial Independence is still a relatively unknown term in our country. Our Mission is to educate the masses about Financial Independence.</p>
						<button className="btn">Know More About Us</button>
						<LazyLoad debounce={true} unmountIfInvisible={true} className="services-overview">
							<h1 className="text-center"> <span style={{ "color": "#000" }}>We provide all kind of </span>
								<Animated animationIn="fadeInLeft" animationInDelay={3000} isVisible={true}>
									<span>business, Advisory &amp; financial Support
    </span>
								</Animated>

							</h1>
							<ServicesList />
						</LazyLoad>

					</div>

				</div>
				<div className="container text-center">
					<h1>Our Blogs </h1>
					<div className="blogs-home"><Blogs /></div>
					<NavLink to='/blog' className="btn">View All Blogs</NavLink>
				</div>
				<LazyLoad debounce={true} unmountIfInvisible={true}>
					<GetStarted />
				</LazyLoad>
			</div >
		)
	}
}

export default Home
