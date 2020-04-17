import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class happyNewYear2020 extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "happy new year 2020"
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>Happy New Year 20-20</h2>
				<h6 className="blog-publish-info">By Admin | Dec 28, 2019| Uncategorized | 0 comments</h6>
				<img src="/images/newYear2020.jpg" alt="happy New year 2020 blog banner" />

				<p>As we beckon a new year, Droplet recommends 20 things that will help you turn a new page in your financial life.</p>

				<ol>
					<li>
						Have a monthly budget in place.
					</li>
					<li>
						Earn. Save. Spend. - Start early. Start immediately.
</li>
					<li>
						Buy a term insurance covering 20 times of your salary. Helps your dependents largely during your absence.
					</li>
					<li>
						Have adequate medical insurance in place. You don't have to shell out cash in case of medical emergencies.
					  </li>
					<li>
						Do not mix insurance with investments.
					 </li>
					<li>
						Have atleast six months of your monthly expenses as contingency fund.
					  </li>
					<li>
						Have a plan in place before buying a property. Such as location, accessibility, resources, so on.
					 </li>
					<li>
						Don't buy a property due to peer pressure or societal pressure or for status. Buy only when you are ready and it is absolutely necessary.
					 </li>
					<li>
						Buy real estate only if you have 30% cash for down payment.
					  </li>
					<li>Buy real estate only if you are confident that you would stay there for next 20 years.
					 Plan and pay off your home loan in first 7 years.</li>
					<li>
						Don't buy a second house thinking it as investment. It is not.</li>
					<li>
						Invest according to your risk appetite.
					 </li>
					<li>
						Have an asset allocation.
					 </li>
					<li>
						Invest 80% of your money in equities and 20% in debt while you are young and vice versa as you near retirement.
					 </li>
					<li>
						Buy a car which is worth not more than six months of your(s) net income. Too much of luxury is a trap.
					 </li>
					<li>
						Stay healthy. There is no point in having wealth without good health.
					 </li>
					<li>
						Have goals and review them periodically. There is no point in having goal without a plan.
					 </li>
					<li>
						If you cannot figure out your investments or finding it difficult to chalk a financial plan, talk to an adviser. It will help you a lot.
					 </li>
					<li>
						The most important of all is - Spare sometime and read our blogs to improve your financial literacy.
					 </li>

				</ol>
				<p>Happy New Year!</p>
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
export default happyNewYear2020;