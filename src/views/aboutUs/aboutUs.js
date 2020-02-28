import React from 'react';
import './aboutUs.css';
import GetStarted from '../../components/getStarted';
import ScrollAnimation from 'react-animate-on-scroll';
import OurTeam from './ourTeam';
import Testimonials from './testimonials';

class AboutUs extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div className="container">
					<div className="text-center">
						<h1 className="section-title">Our Story</h1>
						<p>At any point of time, there is 40% of population that is at work in our country. The average life span @ work in 30 years. At Droplet, we believe that every 30 Years, at least half of this workforce should become “financially independent”. However, Financial Independence is still a relatively unknown term in our country. Our Mission is to educate the masses about Financial Independence.</p>
					</div>
					<ScrollAnimation animateIn="fadeIn" className="droplet-team">
						<OurTeam />
					</ScrollAnimation>

				</div>
				<Testimonials />
				<GetStarted />
			</div>
		)
	}
}

export default AboutUs;