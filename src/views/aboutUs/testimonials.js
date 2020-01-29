import React from 'react';
import './aboutUs.css';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


class Testimonials extends React.Component {
	constructor(props) {
		super(props);


	}
	responsive = {
		0: { items: 1 },
		1024: { items: 3 },
	}

	render() {
		return (
			<div className="testimonial-bg">
				<div className="container">
					<h1 className="text-center">What our Clients Say</h1>
					<AliceCarousel mouseTrackingEnabled responsive={this.responsive} buttonsDisabled={true}>
						<div>
							<p className="client-review">
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
							<div className="client-name">
								Bibin Mathew <br /> Creative Director
							</div>
						</div>
						<div>
							<p className="client-review">
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
							<div className="client-name">
								Bibin Mathew <br /> Creative Director
							</div>
						</div>
						<div>
							<p className="client-review">
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
							<div className="client-name">
								Bibin Mathew <br /> Creative Director
							</div>
						</div>
						<div>
							<p className="client-review">
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
							<div className="client-name">
								Bibin Mathew <br /> Creative Director
							</div>
						</div>
					</AliceCarousel>

				</div>
			</div>
		)
	}
}

export default Testimonials;