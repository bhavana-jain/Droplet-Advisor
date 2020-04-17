import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class mfEarnMoney extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "Mutual funds earn you money"
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>Mutual Funds earn you Money</h2>
				<h6 className="blog-publish-info">By Admin | Dec 24, 2017 | Uncategorized | 0 comments</h6>
				<img src={require("../../../images/blogs/How-do-Mutual-Funds-earn-you-Money-1080x675.jpg")}
					alt="How-do-Mutual-Funds-earn-you-Money-1080x675" />

				<p>We are both excited and nervous to share the fact that many of our readers have come back to us asking about Equity Investment through Mutual funds. Excited because our readers are getting involved and being informed about this wonderful instrument of saving. Nervous if we will be able to deliver the knowledge in best digestible way.  We are going to educate how the Mutual Funds (MFs) work in terms of returns they earn. Because there are linked to markets, the returns that MFs give is not a straight line like below –
				</p>
				<img src={require("../../../images/blogs/Normal-returns.jpg")}
					alt="Normal returns statistics" className="img-center" />
				<p><strong>But like an graph below, where the returns go up and down all the time. More like this –</strong></p>
				<img src={require("../../../images/blogs/MF-Graph.jpg")}
					alt="Mutual Fund statistics" className="img-center" />
				<p>If you see both the <strong className="underline">charts end at 150</strong> but one is simple-straight line while the other is with ups and downs, this up and down is what is <span className="underline">perceived as “Risk”</span>. More on that later! Now we hope you will understand that your monies will not keep going up all the time but there will periods that will have no returns or Negative returns too but eventually MFs turn out to be winners in the end!</p>
				<p>Enough of fiction, Let us now take a real example of a Mutual Fund and see how it performs, I have taken <strong>Sundaram Select Midcap Fund</strong> for this purpose. Why this fund? Because it comes from the reputed TVS family, which has companies like TVS Motors, Sundaram Fasteners, TVS Tyres, Sundaram finance and many more under its belt, all of which have created huge wealth for its investors. Therefore, it is prudent we give our money to such businesspersons who have <strong className="underline">pedigree of performance and quality</strong>.</p>
				<p>Sundaram Select Midcap fund was launched in 2002 and <span className="underline">has given returns of 29% since then</span>. Well, let us first understand what a 29% return would do to your money. Below is the comparison of Rs 1,00,000 deposited in FD at launch of this fund and deposit of Rs 1,00,000 in this fund.

				</p>
				<img src={require("../../../images/blogs/FDvsSSMC.jpg")}
					alt="FDV Vs SSMC" className="img-center" />
				<p>If you are smart, you will understand that you would have earned an excess return of Rs 41,94,000 by simply choosing the right instrument of saving!</p>
				<p>However, the returns earned were not smooth and investor would have gone through a lot of “ups and downs”, <strong>volatility</strong> in other words. For want of data, we can only project the returns of this fund since 2007. From 2007 until today only two major “BAD”events happened that affected the market returns

				</p>
				<ul>
					<li><strong>2008</strong> financial crisis</li>
					<li>The list of Scams(2G Scam, Coal Scam, Adarsh Scam) that affected corporate India, which peaked out in <strong>2011</strong> (and ended with Kejriwal forming AAP -just for fun).
</li>
				</ul>
				<p><strong>Below graph shows the Yearly returns that this fund gave –</strong></p>
				<img src={require("../../../images/blogs/SSMC.jpg")}
					alt="SSMC" className="img-center" />
				<h4>You would notice that this fund:</h4>
				<ul>
					<li>lost as much as Rs 58 for every Rs 100 invested in 2008
</li>
					<li>lost as much as Rs 23 for every Rs 100 invested in 2011
</li>
					<li>In all other years, the fund gave positive returns.
</li>

				</ul>
				<p>Despite a 35% crash, the fund has beaten traditional asset classes hands over fist.</p>
				<p>Now most of the investors ask what if we can avoid those 2 years, yes, that will be awesome for your returns and as advisors, will we advise you to exit the markets at the right time like just before the big crash of 2008 or 2011.</p>
				<h4>The answer is NO! Because as Advisors, our Job is to:</h4>
				<ul>
					<li>Understand your goal and help you choose the best investment option accordingly
</li>
					<li>Help you stay focused to your “goal
</li>
					<li>Make sure you do not get “Greedy” when your goal is achieved and revisit your financial stability and help you stay the course accordingly.
</li>

				</ul>
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
export default mfEarnMoney;