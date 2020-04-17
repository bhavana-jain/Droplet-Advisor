import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class mutualFundsWontMakeMoney extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "Mutual funds wont make you money"
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>Mutual Funds wont make you MONEY! Be Careful</h2>
				<h6 className="blog-publish-info">By Admin | March 23, 2019 | Uncategorized | 0 comments</h6>

				<p>Now, those of you who read the title and thought you already knew this and hence you are right, you are wrong. Those of you who think the title is wrong, you are still wrong. So what is right then? You have come this far, so read on...</p>

				<p>We were meeting one of our clients and they were really excited about getting their financial planning in place. With usual questions of what would happen to their money in case the Markets fall among others, the meeting went well. We thought we did a good job of enlightening this couple. Just then the bomb dropped- the bomb being a Question -
</p>
				<p>"What if I suddenly want to take my money out?"</p>

				<p>
					All the enlightenment down the drain it went...
						<img src="/images/planA_B.jpg" alt="Plan A or B" className="img-centre" />				</p>

				<p>The first time investors, please note that in case you are investing in markets thinking that you will be rich overnight. Forget it, cos If you were that lucky, You would have been already married to Isha! But you are only as lucky as reading this blog ;)

</p>

				<p>
					Below is the checklist an Investor must go through before investing in stock Markets -
						<ol>
						<li> Make sure you have paid all your Luxury loans aka Personal loan, Mobile EMIs, Car EMIs, Blah blah, It's okay to have an outstanding home loan. </li>
						<li> Make sure you have at least 18 months of fixed family expense as a liquid investment. An ideal situation would be having 24 months expense. </li>
						<li> Make sure you have a Health Insurance equalling 12 to 15 months salary covering your entire family. </li>
						<li> Only now should you start investing</li>
						<li> Now your investment should be at least spread over a period of 36 months. </li>
						<li> This should be invested in Markets for another 60 months, In all <b>8 Years.</b> </li>
						<li> So from Day 1, you should at least stay in Markets for 8 years. Like Superstar Rajnikanth's rule of 8! </li>
					</ol>
				</p>


				<p>So if you don't have this as your Plan A, then your Plan B of pulling out money from Markets in your "Emergency needs" will only mess things for you and Your Mutual Funds won't make you MONEY! Be careful.
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

			</div >
		)
	}
}
export default mutualFundsWontMakeMoney;