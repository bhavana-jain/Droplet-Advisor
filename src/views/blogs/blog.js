import React from 'react';

import RealtyReality from './RealtyReality';
import tiffenForKid from './blog-details/tiffenForKid';
import losingFewCrores from './blog-details/losing-few-crores';
import securingFuture from './blog-details/securingFuture';
import mfEarnMoney from './blog-details/ow-do-mutual-fund-earn-money';
import employeePublicProvidentFund from './blog-details/employees-provident-fund-epf-public-provident-fund-ppf';
import taxSaverInvestor from './blog-details/are-you-a-tax-saver-or-tax-investor';
import nonPerfomingSaving from './blog-details/nps-non-performing-saving';
import unlimitedPeriodOffer from './blog-details/unlimited-period-offer-home-loans-at-50-discount';
import savingsYouCant from './blog-details/savings-you-cant';
import titanStory from './blog-details/a-titan-story';
import goldenPlan from './blog-details/a-golden-plan';
import ggpConclusion from './blog-details/GGP-the-conclusion';
import greedGainPain from './blog-details/greed-gain-pain';
import greedGainPainSeries from './blog-details/greed-gain-pain-series';
import happyNewYear from './blog-details/happy-new-year';
import horsesForCourses from './blog-details/horses-for-courses';
import investmentsUpDown from './blog-details/investments-go-up-or-down';
import unionBudget from './blog-details/union-budget-2020';
import budget2020 from './blog-details/budget-2020';
import creditcard from './blog-details/paying-minimum-balance-on-credit-cards';
import happyNewYear2020 from './blog-details/happy-new-year-2020';
import needFinancialAdvisor from './blog-details/do-you-really-need-financial-advisor';

const components = {
	RealtyReality: RealtyReality,
	tiffenForKid: tiffenForKid,
	losingFewCrores: losingFewCrores,
	securingFuture: securingFuture,
	mfEarnMoney: mfEarnMoney,
	employeePublicProvidentFund: employeePublicProvidentFund,
	taxSaverInvestor: taxSaverInvestor,
	nonPerfomingSaving: nonPerfomingSaving,
	unlimitedPeriodOffer: unlimitedPeriodOffer,
	savingsYouCant: savingsYouCant,
	titanStory: titanStory,
	goldenPlan: goldenPlan,
	ggpConclusion: ggpConclusion,
	greedGainPain: greedGainPain,
	greedGainPainSeries: greedGainPainSeries,
	happyNewYear: happyNewYear,
	horsesForCourses: horsesForCourses,
	investmentsUpDown: investmentsUpDown,
	unionBudget: unionBudget,
	budget2020: budget2020,
	creditcard: creditcard,
	happyNewYear2020: happyNewYear2020,
	needFinancialAdvisor: needFinancialAdvisor
};

class BlogDetails extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {

	}
	render() {
		console.log(this.props.location.state);
		return (
			<>
				{
					this.props.location && this.props.location.state && this.props.location.state != "" && components[this.props.location.state] ? React.createElement(components[this.props.location.state]) : <div>NoDetails</div>
				}
			</>
		)
	}
}
export default BlogDetails;
