import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class dropletLoanPlus extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "100% interest return loan scheme"
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2 className="blog-details-title">A <span>100% Interest Return loan Scheme</span> - <span>Droplets Home Loan+</span></h2>
				<h6 className="blog-publish-info">By Admin | July 18, 2019 | Uncategorized | 0 comments</h6>
				<img src="/images/Home-Loan-Repayment.jpg" alt="Home Loan repay blog banner" className="img-center" />
				<p>
					We know so many people that have a home loan. How much ever they try to, they still pay a minimum of 40% to 90% of principal as Interest to the lender. We delved about this and wanted to give our readers a plan that helps them reclaim the interest portion.
				</p>

				<p>
					We have normally noticed that most of the home bought are about 40 lacs. WIth 20% down payment, the loan amount comes to 32 lacs. On a loan taken for 15 years at 8.6%, the EMI works out to be INR 31,700. If the loan is duly completed in 15 years, the total interest paid is 25 lacs. Now we have to do plan to get this 25 lacs back.
</p>
				<img src="/images/Loan Calcl.jpg" alt="loan calculator" className="img-center" />
				<p>But the plan is good only if there is no extra payout that the borrower has to make. So we suggest that you extend the loan tenure to 20 years. This will save you 3,700 per month in EMI. Next, Invest the EMI savings in a good equity fund for 20 years. Let's see what happens now.
</p>
				<img src="/images/Loan Calc02.jpg" alt="Droplet loan calculator" className="img-center" />
				<p>
					As one can see by simply managing one's investments better, One cannot only own a home but create a corpus equal to the Interest paid. We can use such a corpus as our retirement fund.
				</p>

				<p>
					We request that one should consider any investment plan with their financial advisors so as to employ the best strategy for one's hard-earned money.
				</p>
				<ul className="blogs-tags">
					{this.props.alltag.map((tag) =>
						<li className="blogs-tag-link"><NavLink
							to={{
								pathname: '/blog',
								state: { tagName: tag }
							}}>
							{tag} <br />
						</NavLink></li>
					)}
				</ul>

				<BlogComment />
			</div>
		)
	}
}
export default dropletLoanPlus;