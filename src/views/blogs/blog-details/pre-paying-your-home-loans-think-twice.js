import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class prePayHomeLoan extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "Prepaying home loans ? think twice"
	}
	render() {
		return (
			<div className="container blogs-wrap">
				<h2 className="blog-details-title"><span>Pre-paying</span> your <span>Home Loans? Think Twice!</span></h2>
				<h6 className="blog-publish-info">By Admin | July 21, 2019 | Uncategorized | 0 comments</h6>
				<img src="/images/homeloan.jpg" alt="Home loan blog banner" className="img-center" />
				<p>A lot of us might be thinking about making part payments against our home loans. We suggest you look at the below table of savings before you take any such decisions - </p>
				<img src="/images/savings.jpg" alt="Savings" className="img-center" />
				<p>
					For those not adept with numbers/tables, lets us clarify in simple sentences.
				</p>
				<ol>
					<li>
						If we prepay 1 lac of our home loan at the beginning of each year for 5 years. Our Total "Interest Savings" come to about INR 5 lacs for a period of 15 years.
					</li>
					<li>
						If instead of prepaying the home loan, we choose to invest the same in an equity mutual fund, then a fund returning 12.5% per annum, would help us create a corpus of 20 lacs.</li>

					<li>
						If instead of prepaying the home loan, we choose to invest the same in an equity mutual fund, then a fund returning 10% per annum, would help us create a corpus of 15 lacs.</li>
				</ol>
				<p>
					Before we complete - here are the few reasons why recommend delaying the Pre-Payment of the home loan -
				</p>
				<ol>

					<li>
						The Prepayment can be used to create your retirement corpus.
 </li>

					<li>
						Locking up your savings in your home loan delays the compounding of your money.
 </li>

					<li>
						By Prepaying home loan, you will lose the tax benefits in later years when your earnings will more. You will be sold another house in the name of tax saving.
 </li>

				</ol>
				<p>Again the above is indicative, Pls get in touch with your financial planner before making any financial decisions. </p>
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
export default prePayHomeLoan;