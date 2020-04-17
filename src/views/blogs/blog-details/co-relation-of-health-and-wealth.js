import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class healthWealthConnection extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "Co-relation of health and wealth"
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>Co-relation of Health and Wealth!</h2>
				<h6 className="blog-publish-info">By Admin | June 24, 2019 | Uncategorized | 0 comments</h6>
				<img src="/images/healthWealthConnection.jpg" alt="Co-relation of Health and Wealth blog banner" className="img-center" />
				<ol>
					<li>
						<strong>Start early.</strong> Be it be health or wealth start early. It does not matter whether you run a full marathon or talk a small walk around the park. Starting early only matters. Likewise, start saving right away, Even Rs 500 is Okay.
					</li>
					<li>
						Avoid <strong>excessive calories &amp; fat</strong> for a peaceful healthy life. Likewise, avoid debt.
</li>
					<li>
						Understand the <strong>importance of compounding</strong> in life. Have a long-term mind set.
</li>
					<li>
						<strong>Be consistent</strong> in whatever you do. Let it be gyming, Saving or investing. Only then you will achieve your desired results.
</li>
					<li>
						Everything in life would take time. You have to believe in the process. <strong>Six packs do not appear in a month</strong> and neither does wealth. Continue the process and it would happen for sure.
					</li>
					<li>
						Have a plan in place and <strong>measure the progress</strong>at regular intervals. So you will understand where you are and what needs to be done to reach the destination on time.
					</li>
					<li>
						Understand the significance of diversification. You <strong>don't eat the same food for all the three times</strong>. Similarly, <strong>don't put all your money in one place </strong> throughout your life.
					</li>
					<li>
						Understand the risk. <strong>Risk comes from not knowing what you are doing</strong>. Seek help from someone who could guide you and make you physically/financially fit.
					</li>
					<li>
						Don't eat Junk food. It will take its toll on your health gradually even if it satisfies your taste bud instantly. It's the same with loans. Getting something on a loan will satisfy your immediate need but destroy your financial health.
					</li>
					<li>
						You <strong>don't have to be smart than the others.</strong> You have to be disciplined in whatever you do (Health &amp; Wealth). Knowledge is 20% and behavior is 80%. Everyone knew regular exercise will keep them healthy, but only few do. Saving &amp; Investing keeps you financially healthy, but hardly anyone does.
					</li>
					<li>
						Prevention is better than cure. Make sure you avoid unhealthy habits in the 1st place rather than thinking about treating your illness at a later point. Similarly AVOID guaranteed 25%+ returns scheme, capital protection is more important than the returns.
					</li>

				</ol>
				<p>Finance and life are the same. It's all simple. We just complicate it.  Have a happy week ahead.</p>
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
export default healthWealthConnection;