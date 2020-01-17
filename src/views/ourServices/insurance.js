import React from 'react';
import ReactDOM from 'react-dom';
import './ourServices.css';
import GetStarted from '../../components/getStarted';
import LazyLoad from 'react-lazyload';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class insurance extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		{ document.title = "Insurance | Droplet Advisory" }
		return (
			<div>
				<ScrollAnimation animateIn="fadeIn" animateOnce={true} className="planning-bg">
				</ScrollAnimation>
				<div className="container">
					<div className="services-blocks text-center">
						<h2>Insurance</h2>
						<h3>Choose The Right One</h3>
						<p>We do not “Invest” in Insurance; we “use” them to protect you.</p>
						<p>We firmly believe that the only purpose of Insurance is “to make good the loss suffered”. As such, we believe that a person would need only two insurances to secure his financial life.</p>
					</div>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true} className="services-blocks">

						<img src={require("../../images/Insurance.jpg")} alt="Term Insurance" className="align-left" />

						<div className="services-description"><h3>Term Insurance</h3>	<p>Term Insurance is a type of life insurance policy that provides coverage for a certain period of time, or a specified “term” of years. If the insured dies during the period specified in the policy and the policy is active, or in force, then a death benefit will be paid.</p>
							<p>Term insurance is initially much less expensive when compared to permanent life insurance. Unlike most types of permanent insurance, term insurance has no cash value hence lacks the psychological pull. This is the prime reason; Term insurance remains comparatively a neglected product. Nevertheless Its one of the must have insurance for breadwinner of the family. </p>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={10} className="services-blocks">

						<img src={require("../../images/Health-Insurance.jpg")} alt="Health Insurance" className="align-right" />
						<div className="services-description">
							<h3>Health Insurance</h3>
							<p>Health Insurance – An unexpected medical expense remains the prime reason for the dents in one’s financial life.</p>
							<p>More often, we think that paying a only meagre % of our income to cover our medical expenses is waste of money and unneeded expense. However, financial life does not go with the Philosophy of “Once bitten, twice shy”. It goes like – “Once bitten, gone forever “. An untoward expense can make irreversible dents in one’s financial life. At Droplet, our deep faith is that one should have adequate and proper Health cover if at all one aspires to achieve financial freedom.
</p>
						</div>
					</ScrollAnimation>
					<LazyLoad debounce={true} unmountIfInvisible={true}>
						<GetStarted />
					</LazyLoad>
				</div>
			</div>
		)
	}
}

export default insurance;