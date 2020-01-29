import React from 'react';
import GetStarted from '../../components/getStarted';
import LazyLoad from 'react-lazyload';
import ServicesList from './services';
import DropletValues from './dropletValues';
import Blogs from '../blogs/blogs'
import { Animated } from "react-animated-css";
import { NavLink } from 'react-router-dom';

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
				{/* Our Services */}

				<div className="text-center services-bg">
					<div className="droplet-overview container">
						<h1 className="text-center"> Who We Are</h1>
						<p>At any point of time, there is 40% of population that is at work in our country. The average life span @ work in 30 years. At Droplet, we believe that every 30 Years, at least half of this workforce should become “financially independent”. However, Financial Independence is still a relatively unknown term in our country. Our Mission is to educate the masses about Financial Independence.</p>
						<button className="btn">Know More About Us</button>
						<LazyLoad debounce={true} className="services-overview">
							<h1 className="text-center"> <span style={{ "color": "#000" }}>We provide all kind of </span>
								<Animated animationIn="fadeInLeft" animationInDelay={1500} isVisible={true}>
									<span>business, Advisory &amp; financial Support
    </span>
								</Animated>

							</h1>
							<ServicesList />
						</LazyLoad>

					</div>

				</div>
				<div className="container text-center bottom-spacer">
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
