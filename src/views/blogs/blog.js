import React from 'react';
import firebase from 'firebase';

import investorMistakes from './blog-details/the-common-mistakes-of-investor';
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
import chasingReturns from './blog-details/chasing-returns';
import numInsuranceToBuy from './blog-details/how-much-insurance-should-one-buy';
import insuranceNotInvestment from './blog-details/life-insurance-policy-guaranteed-part-i';
import directEquityInvesting from './blog-details/direct-equity-investing-ii';
import childsInterestInvest from './blog-details/how-to-spark-childs-interest-in';
import investorsInterestRate from './blog-details/investors-interest-rates';
import directEquityInvestingI from './blog-details/direct-equity-investing';
import prePayHomeLoan from './blog-details/pre-paying-your-home-loans-think-twice';
import dropletLoanPlus from './blog-details/a-100-interest-return-loan-scheme';
import healthWealthConnection from './blog-details/co-relation-of-health-and-wealth';
import stepToFinancial from './blog-details/1st-step-to-path-of-financial';
import mutualFundsWontMakeMoney from './blog-details/mutual-funds-wont-make-you-money-be';
import guaranteedIncome from './blog-details/earn-guaranteed-income-of-50kmonth-for';
import behaviour from './blog-details/the-behaviour';
import newBeginningOldWine from './blog-details/new-year-new-beginning-old-wine';
import startOrStopStockMarket from './blog-details/should-i-start-or-stop-my-stock-markets';
import willILoseMoney from './blog-details/will-i-lose-money';
import npsRealityCheck from './blog-details/nps-scheme-reality-check';
import moneyLessons from './blog-details/money-lessons';
import wealthCreators from './blog-details/wealth-creator-episode-5';
import maximumAmountMaxJuices from './blog-details/maximum-amount-maximum-juice-80c-spl';
import richDadPoorDad from './blog-details/rich-dad-poor-dad';
import lifeInsurancePolicy from './blog-details/life-insurance-policies-80c-savings';
import doMfEarnMoney from './blog-details/do-mutual-funds-make-money-find-out';
import costOfDelay from './blog-details/cost-of-delay';
import oldAgeStory from './blog-details/the-age-old-story';
import commonManUncommonInvestor from './blog-details/common-man-uncommon-investors-anil';
import arjunReddyStock from './blog-details/stock-name-arjun-reddy-ltd-stock';
import sagaciousYoungster from './blog-details/a-sagacious-youngster';
import underwearMillionaire from './blog-details/the-underwear-millionaire';
import wealthCreatorsEpi4 from './blog-details/wealth-creators-episode-4';
import understandingSharePrice from './blog-details/Understanding the Share Price - II';
import ruleOf15 from './blog-details/the-rule-of-15';
import underStandingSharePrice from './blog-details/understanding-share-price';
import wealthCreatorsiii from './blog-details/wealth-creators-episode-3';
import returnOnInvestment from './blog-details/making-18-return-on-your-investments';
import beingFinanciallyFit from './blog-details/being-financially-fit';
import limitedTerm from './blog-details/you-dont-know-your-term-but-for-sure';
import deferringYouthLuxury from './blog-details/deferring-luxury-vs-deferring-youth';
import savingsAccountOrLiquidFund from './blog-details/which-one-is-better-savings-account-or';
import wealthCreatorsEpi2 from './blog-details/wealth-creators-episode-2';
import eatYourMoney from './blog-details/i-eat-your-money-but-you-still-dont-care';
import goldMediaInvestors from './blog-details/gold-media-investors';
import goldInvestment from './blog-details/gold-investment';
import moneyFromGold from './blog-details/gold-how-much-money-do-i-actually-make';

const components = {
	investorMistakes: investorMistakes,
	goldMediaInvestors: goldMediaInvestors,
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
	needFinancialAdvisor: needFinancialAdvisor,
	chasingReturns: chasingReturns,
	numInsuranceToBuy: numInsuranceToBuy,
	insuranceNotInvestment: insuranceNotInvestment,
	directEquityInvesting: directEquityInvesting,
	childsInterestInvest: childsInterestInvest,
	investorsInterestRate: investorsInterestRate,
	directEquityInvestingI: directEquityInvestingI,
	prePayHomeLoan: prePayHomeLoan,
	dropletLoanPlus: dropletLoanPlus,
	healthWealthConnection: healthWealthConnection,
	stepToFinancial: stepToFinancial,
	mutualFundsWontMakeMoney: mutualFundsWontMakeMoney,
	guaranteedIncome: guaranteedIncome,
	behaviour: behaviour,
	newBeginningOldWine: newBeginningOldWine,
	startOrStopStockMarket: startOrStopStockMarket,
	willILoseMoney: willILoseMoney,
	npsRealityCheck: npsRealityCheck,
	moneyLessons: moneyLessons,
	wealthCreators: wealthCreators,
	maximumAmountMaxJuices: maximumAmountMaxJuices,
	richDadPoorDad: richDadPoorDad,
	lifeInsurancePolicy: lifeInsurancePolicy,
	doMfEarnMoney: doMfEarnMoney,
	costOfDelay: costOfDelay,
	oldAgeStory: oldAgeStory,
	commonManUncommonInvestor: commonManUncommonInvestor,
	arjunReddyStock: arjunReddyStock,
	sagaciousYoungster: sagaciousYoungster,
	underwearMillionaire: underwearMillionaire,
	wealthCreatorsEpi4: wealthCreatorsEpi4,
	understandingSharePrice: understandingSharePrice,
	ruleOf15: ruleOf15,
	underStandingSharePrice: underStandingSharePrice,
	wealthCreatorsiii: wealthCreatorsiii,
	returnOnInvestment: returnOnInvestment,
	beingFinanciallyFit: beingFinanciallyFit,
	limitedTerm: limitedTerm,
	deferringYouthLuxury: deferringYouthLuxury,
	savingsAccountOrLiquidFund: savingsAccountOrLiquidFund,
	wealthCreatorsEpi2: wealthCreatorsEpi2,
	eatYourMoney: eatYourMoney,
    goldInvestment: goldInvestment,
    moneyFromGold: moneyFromGold
};

class BlogDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tag: [],
            blogPage: '',
            infoReady: false
		}
	}
componentWillMount(){
      let blogname = window.location.pathname.split('/')[2];
        firebase.database().ref('allBlogs').once('value', (snap) => {

				let toComp = snap.child(blogname).val().compName;
                this.setState({
                    infoReady: true,
                    blogPage : toComp
                })

		});
}

	render() {

		return (
			<>
            { this.state.blogPage != "" && this.state.infoReady ? React.createElement(components[this.state.blogPage]) : "loading"}

			</>
		)
	}
}
export default BlogDetails;
