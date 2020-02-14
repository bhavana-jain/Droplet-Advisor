import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, useParams } from 'react-router-dom';

import RealtyReality from './RealtyReality';
import tiffenForKid from './blog-details/tiffenForKid';
import losingFewCrores from './blog-details/losing-few-crores';
import securingFuture from './blog-details/securingFuture';
import mfEarnMoney from './blog-details/ow-do-mutual-fund-earn-money';
import employeePublicProvidentFund from './blog-details/employees-provident-fund-epf-public-provident-fund-ppf';
import taxSaverInvestor from './blog-details/are-you-a-tax-saver-or-tax-investor';

const components = {
	RealtyReality: RealtyReality,
	tiffenForKid: tiffenForKid,
	losingFewCrores: losingFewCrores,
	securingFuture: securingFuture,
	mfEarnMoney: mfEarnMoney,
	employeePublicProvidentFund: employeePublicProvidentFund,
	taxSaverInvestor: taxSaverInvestor
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
