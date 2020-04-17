import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class chasingReturns extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "Chasing returns";
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>chasingReturns</h2>
				<h6 className="blog-publish-info">By Admin | Nov 09, 2019 | Uncategorized | 0 comments</h6>
				<p>
					People are so obsessed with returns. Generally, we look at equities as a lottery ticket to get rich overnight. Which is the precise reason why most of us fail and run away from equities and advise others that the stock market is sheer gambling!
				</p>

				<p>
					In Order to get rich overnight, people keep chase returns by jumping from one Investment to another or from One Fund to another. Alas, only to miss the bus of returns in most of the cases.
				</p>

				<p>
					Let us now look at a few examples of what happens if you chase returns. We have taken 2 funds of ICICI Prudential Mutual fund company - Large-cap Fund &amp; Mid-Cap Fund.
				</p>

				<p>
					Assume Mr. Investor starts investing in 2010 and based on the previous returns he chooses the mid-cap fund. 3 years later he reviews his portfolio and sees that large-cap fund has given a better return than mid-cap fund -
				</p>

				<img src="/images/Droplet_Midcap 01.jpg" className="img-center" />

				<img src="/images/Droplet_Largecap 01.jpg" className="img-center" />

				<p>So he jumps from Mid-cap fund to Large-cap fund and continues to invest for 3 years. Look what happens now -</p>

				<img src="/images/Droplet_Largecap 02.jpg" className="img-center" />

				<p>
					Oh wow! he made 17% returns, that's excellent but wait.. let's look what his 1st choice mid-cap fund returned
				</p>

				<img src="/images/Droplet_Midcap 03.jpg" className="img-center" />

				<p>
					Alas, he would have made double the returns. Now he says I was correct in my 1st choice and let me go back to it and jumps from Largecap fund to Midcap fund and continues investing for 3 years and at the end of 3 years he reviews the same -
				</p>

				<p>
					While the mid-cap fund returned 10% on his investment, Large-caps gave a higher return of 15%.
				</p>

				<img src="/images/Droplet_Largecap 03.jpg" className="img-center" />

				<img src="/images/Droplet_Largecap 031.JPG" className="img-center" />
				<p>
					Obviously, this Investor would be left scratching his head as to why and how he missed the best fund all the times? More importantly, if he stayed invested in the mid-cap fund throughout the period he would have got higher returns (Midcap fund gave 18% compared to 15% from large-cap) and achieved his objective of higher returns.
				</p>
				<p>
					One of the follies of the investors is, they chase returns. Meaning they keep jumping from one product to the other product looking at the past returns. Eventually, missing all the buses, they remain in the same place they started their journey in.
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
export default chasingReturns;