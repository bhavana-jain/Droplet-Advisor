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
					<div className="droplet-values">
						<ScrollAnimation animateIn="fadeIn" animateOnce={true} >
							<div className="droplet-value-trust"></div>
							<div className="droplet-value-content">
								<h2>Trust</h2>
								<p>The Child in the Air savors the moment. Because it has complete trusts that her mother would hold her up.
							 Likewise, we wish to win your trust so that you can enjoy the wonderful journey of Equity Investing.
								Trust that you will believe, at Droplet, in each of our endeavors, we will keep your needs and expectation first.
								</p>
							</div>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn" animateOnce={true} >

							<div className="droplet-value-content">
								<h2>Discipline</h2>
								<p>	The Ants reflect discipline. When it shines, they work hard with discipline so that they can live off the rainy days with peace.
We wish to inculcate the same discipline in your financial life.
We hope you will give it your best.</p>
							</div>
							<div className="droplet-value-discipline"></div>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn" animateOnce={true} >
							<div className="droplet-value-longevity">	</div>
							<div className="droplet-value-content">
								<h2>Longevity</h2>
								<p>A Banyan Tree lives for generations and just by staying put, it becomes so huge and abundant.
We deal in a product that is inherently perceived risky. However, research has proven that longevity negates risk.
We wish, just like the Banyan Tree, you would remain stay put in the game for a longer period. <br />
									Thus, help your money become a Banyan Tree of Wealth.</p>

							</div>
						</ScrollAnimation>

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