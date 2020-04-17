import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class numInsuranceToBuy extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = 'How much insurance to buy';
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>How Much Insurance should one Buy ?</h2>
				<h6 className="blog-publish-info">By Admin | Sep 07, 2019| Uncategorized | 0 comments</h6>
				<img src="/images/Insurance Planning.jpg" alt="Insurance Planning blog banner" />
				<p>In our previous <a href="javascript:;">blog</a>, we gave an example where the assumed gentlemen had taken an Insurance of 1 crore. It is natural that most of would think why such an H U G E amount of insurance? Because most of us think of Insurance as "sum that will be paid to you by LIC on Maturity" and hence think such huge amount is only for ultra-rich people. Through this blog, we would like to clarify on this erroneous thinking. Also, let our readers know how much they should cover themselves with?</p>
				<p><strong>The Maths  -</strong> <br />This is how the average financial scorecard of Middle class looks like  - </p>
				<img src="/images/Mathds.jpg" className="img-center" alt="Average financial scorecard of Middle class" />
				<p>
					<strong>Part A</strong> - Sum of all the loans that we have comes to about 50 lacs.
				</p>

				<p>
					<strong>Part B</strong> - If we assume that "with no loans" &amp; "an Own house", Rs 25k monthly is fair enough to maintain and run life on good standard of living. If we want this income for the next 20 Years (time taken for your kid to grow and contribute to expenses.), then we need to make a one-time investment of 60 lacs.
				</p>

				<p>
					In Total - This amounts to ~ 1 crore. (Now you understand Why 1 Crore?)
				</p>
				<p>Now -  <span className="underline">How much cover should you take?</span>

					Simply put, it should be <span className="underline">20 years of your monthly expenses</span> + all your outstanding loans. It's that easy - Go figure it out yourself.</p>

				<p>
					Imagine, in case something happens to the breadwinner of the family, his /her partner will be left to deal with all the loans and also maintain a run rate of 25K per month. Won't it be too harsh on them?
				</p>

				<p>
					Parallelly imagine if something happens to the breadwinner and the family gets a payout of 1 crore, <strong>won't you have filled your duty towards your family while you are still there and while it is still possible?</strong>
				</p>


				<p>
					So stop giving excuses and get yourself insured right away!
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
export default numInsuranceToBuy;