import React from 'react';
import GetStarted from '../../components/getStarted';
import LazyLoad from 'react-lazyload';
import ServicesList from './services';
import DropletValues from './dropletValues';
import { Animated } from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink } from 'react-router-dom';
import './home.css';
import TrendingBlogs from '../blogs/topBlogs';
import Blogs from '../blogs/blogs';
import Slide from 'react-reveal/Slide';




class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<DropletValues />
				{/* Our Services */}

				<div className="text-center services-bg">
					<div className="droplet-overview container">
						<ScrollAnimation animateIn="fadeIn">
							<h1 className="text-center section-title">Who We Are</h1>
							<p>At any point of time, there is 40% of population that is at work in our country. The average life span @ work in 30 years. At Droplet, we believe that every 30 Years, at least half of this workforce should become “financially independent”. However, Financial Independence is still a relatively unknown term in our country. Our Mission is to educate the masses about Financial Independence.</p>
							<button className="btn">Know More About Us</button>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn">
							<div className="services-overview">
								<h1 className="text-center"> <span style={{ "color": "#000" }}>We provide all kind of </span>
									<Animated animationIn="fadeInLeft" animationInDelay={1500} isVisible={true}>
										<span>business, Advisory &amp; financial Support
    </span>
									</Animated>
								</h1>
								<ScrollAnimation animateIn="fadeIn" delay={200}>
									<ServicesList />
								</ScrollAnimation>
							</div>
						</ScrollAnimation>

					</div>

				</div>
				<ScrollAnimation animateIn="fadeIn">
					<div className="container text-center bottom-spacer">
						<h1 className="section-title">Our Blogs</h1>
						<div className="blogs-home">
							<TrendingBlogs /></div>
						<NavLink to='/blog' className="btn">View All Blogs</NavLink>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeIn">
					<GetStarted />
				</ScrollAnimation>
			</div>
		)
	}
}

export default Home
