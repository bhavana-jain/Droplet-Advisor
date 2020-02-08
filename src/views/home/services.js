import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';


let card;
class ServicesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shouldFlip: false
		}
		this.flip = this.flip.bind(this);
		this.unflip = this.unflip.bind(this);
	}

	flip = (e) => {
		console.log(e);
		this.setState({
			shouldFlip: true
		})
	}
	unflip() {
		this.setState({
			shouldFlip: false
		})
	}
	componentDidMount() {
		card = document.getElementsByClassName('card');
		Array.from(card).forEach(function (element) {
			element.addEventListener('click', function () {
				// Array.from(card).forEach(function (element) {
				// 	element.classList.remove('is-flipped');
				// });
				element.classList.toggle('is-flipped');
			});
		})


	}
	render() {
		return (
			<div>
				<div className="scene scene--card container">
					<div className="card">
						<div className="card__face card__face--front">
							<h4 className="services-title">Financial Planning</h4>
							<div className="services-info">
								<div className="financial-planning-icon"></div>
								<h3>Acheive Your Goals </h3>
							</div>
						</div>
						<div className="card__face card__face--back">
							<p>Financial planning is planning your finances right that is the key of financial planning.</p>
							<NavLink to='/our-services/financialplanning' className="btn">Learn More</NavLink>
						</div>

					</div>
					<div className="card">
						<div className="card__face card__face--front">
							<h4 className="services-title bg-green">Mutual Funds</h4>
							<div className="services-info">
								<div className="mf-icon"></div>
								<h3>Expert Guidance</h3>
							</div>
						</div>
						<div className="card__face card__face--back bg-green">
							<p>We don't sell Mutual Funds, We merely recommend them upon assessing ones risk profile.</p>
							<NavLink to='/our-services/mutualFunds' className="btn">Learn More</NavLink>
						</div>

					</div>
					<div className="card">
						<div className="card__face card__face--front">
							<h4 className="services-title bg-violet">Insurance</h4>
							<div className="services-info">
								<div className="insurance-icon"></div>
							</div>
						</div>
						<div className="card__face card__face--back bg-violet">
							<p>We don't "Invest" in insurance. We "use" them to protect you.</p>
							<NavLink to='/our-services/insurance' className="btn">Learn More</NavLink>
						</div>

					</div>
				</div>

			</div >
		)
	}
}

export default ServicesList;
