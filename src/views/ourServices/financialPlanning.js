import React from 'react';
import ReactDOM from 'react-dom';
import './ourServices.css';
import GetStarted from '../../components/getStarted';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import LazyLoad from 'react-lazyload';

class financialPlanning extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "Financial Planning | Droplet Wealth Advisor"
	}
	render() {

		return (
			<div>
				<ScrollAnimation animateIn="fadeIn" animateOnce={true} className="planning-bg">
				</ScrollAnimation>
				<div className='container'>
					<div className="services-blocks text-center">

						<h1>Financial Planning</h1>
						<h3>Achieve Your Goals</h3>
						<p>Financial planning is planning your finances right that is the key of financial planning.</p>
						<h3>Why Financial Planning Is Important?</h3>
						<p>As Allen Lakein says ‘Failing to plan is planning to fail’. Fulfilling the future needs and improving the standard of living depends on the plans you make today. So what’s your plan for future? Are you considering the factors that can shake your financial plans? Let us look at some of the key points to consider while drafting a plan –
</p>
					</div>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true} className="services-blocks">

						<img src={require("../../images/Financial-Services-01.jpg")} alt="Trust Yourself" className="align-left" />
						<div className="services-description">
							<h3>Be True To Yourself And Your Advisor</h3>	<p>Make sure you do not hide any of your income or expenses and investments if any to your family members as well as your advisor. Being open to your advisor will help him understand your financial priorities.
						</p>
							<p>Have a monthly budget in place and start to track down all your expenses; this will help your advisor to identify where you spend unnecessarily and how better he can help you in realigning your
		current investments and deploying your savings for better returns
		based on your risk profile.
</p></div>

					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true} delay="10" className="services-blocks">
						<img src={require("../../images/Financial-Services-02.jpg")}
							alt="Managing/Assessing Risk" className="align-right" />
						<div className="services-description"><h3>Managing/Assessing Risk </h3>	<p>Not all your fingers are of same size. Similarly, every individuals risk appetite differs based on various factors such as existing commitments, requirements, income, and age and so on.
					</p>
							<p>The risk can be categorized as aggressive, moderate, and conservative and there are few who are not sure of the risk at all.
					</p>
							<p>Assessing one’s risk profile is the most important point to look at.
</p></div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true} delay="10" className="services-blocks">
						<img src={require("../../images/Financial-Services-03.jpg")}
							alt="Identifying Goals" className="align-left" />

						<div className="services-description">
							<h3>Identifying Goals</h3>
							<p>Every plan is aligned to a goal (Child’s Education, World Trip, Wedding, own house, Car, retirement and so on).
					</p>
							<p>Once a goal is identified, it should not be looked or aligned to today’s value. Remember, inflation eats out your purchasing power slowly, so a goal should be looked at future value.
					</p>
							<p>Only then, we will get to know the right amount of value to save towards the goal and invest.
</p></div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true} delay="10" className="services-blocks">

						<img src={require("../../images/Financial-Services-04.jpg")}
							alt="Asset Allocation" className="align-right" />

						<div className="services-description"><h3>Asset Allocation</h3>
							<p>Do not put all your eggs in one basket. Diversification is very important and it varies among individuals based on their risk profiling.
					</p>
							<p>In Indian context, almost 90% of our assets are tied towards real estate, gold, and 10% towards useless insurance schemes and endowment policies.
					</p>
							<p>What if I tell you that the said asset classes have not provided inflation beating returns in the long run? Have a basket of assets and invest accordingly.
</p>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true} delay="10" className="services-blocks">
						<img src={require("../../images/Financial-Services-05.jpg")}
							alt="Identifying Goals" className="align-left" />

						<div className="services-description">
							<h3>Monitoring Your Plan</h3>
							<p>Never think that once a plan is in place it is all set and done. No, it is not. Financial planning is all about constant monitoring of your financials (not necessarily your investments) but how far are we in achieving your goals and how better should we go about it.
					</p>
							<p>At times our goals might change or there could be change in the valuation of our goals based on the rising prices.
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

export default financialPlanning;