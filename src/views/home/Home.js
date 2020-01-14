import React from 'react';
import ReactDOM from 'react-dom';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import { Parallax, Background } from 'react-parallax';

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
				<AliceCarousel mouseTrackingEnabled
					responsive={this.bannerResponsive}
					dotsDisabled={true}
					buttonsDisabled={true}>

					<div className="droplet-image-trust">
						<div>
							<p>Beware the investment activity that produces applause; the great moves are usually greeted by yawns.”
						</p>
							<i className="quote-by">- Warren Buffett</i>
						</div>
					</div>
					<div className="droplet-image-trust">
						<div>
							<p>It’s far better to buy a wonderful company at a fair price, than a fair company at a wonderful price.”

						</p>
							<i className="quote-by">- Warren Buffett</i>
						</div>
					</div>
					<div className="droplet-image-trust">
						<div>
							<p>Wall Street is the only place that people ride to in a Rolls Royce to get advice from those who take the subway.
						</p>
							<i className="quote-by">- Warren Buffett</i>
						</div>
					</div>
				</AliceCarousel>
				{/* Our Services */}
				<div className="services-bg">
					<div className="container">
						<h2 className="text-center"> Our Valuable Services</h2>
						<ul className="services-list-block">
							<li className="services-block-wrap"></li>
							<li className="services-block-wrap"></li>
							<li className="services-block-wrap"></li>
						</ul>
					</div>
				</div>
				{/* <AliceCarousel mouseTrackingEnabled
					responsive={this.responsive} >

					<div className="">
						<div className="team"></div>
					</div>
					<div className="">
						<div className="team"></div>
					</div>
					<div className="">
						<div className="team"></div>
					</div>
					<div className="">
						<div className="team"></div>
					</div>


				</AliceCarousel> */}
				<div className="container">
					<h2> The Droplet Team</h2>
					<ul className="droplet-team">
						<li>
							<div className="team" data-name="S"></div>
						</li>
						<li>
							<div className="team" data-name="P"></div>
						</li>
						<li>
							<div className="team" data-name="D"></div>
						</li>
						<li>
							<div className="team" data-name="R"></div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Home
