import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class investmentsUpDown extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "What to do when investments go up or down"
	}
	render() {
		return (
			<div className="container blogs-wrap">
				<h2 className="blog-details-title">What to do when my <span>Investments go up or down ?
</span></h2>
				<h6 className="blog-publish-info">By Admin | Apr 12, 2019 | Uncategorized | 0 comments</h6>
				<img src="/images/What-to-do-when-my-Investments-go-up-or-down-1080x675.jpg" alt="Investments go up or down blog banner" />

				<p>	We have spoken to a whole lot of people and were surprised to notice the same mentality among most of the them. What is that mentality ?</p>

				<p>Before we answer that question, Please choose one of the 2 options for each of the questions below – (take a paper and write “a” or “b” whatever your answer is)</p>

				<h4>Q1. If the Stock market investments you make fall regularly will you increase your investments ? </h4>

				<ol type="a">
					<li>Yes</li>
					<li>No</li>
				</ol>

				<h4>Q2. If the Stock market investments you make rise regularly will you increase your investments ?</h4>
				<ol type="a">
					<li>Yes</li>
					<li>No</li>
				</ol>

				<h4>Q3. If the price of Gold fell regularly will you buy more Gold ?</h4>
				<ol type="a">
					<li>Yes</li>
					<li>No</li>
				</ol>

				<h4>Q4. If the price of Gold rises regularly will you buy more Gold ?</h4>
				<ol type="a">
					<li>Yes</li>
					<li>No</li>
				</ol>

				<p>Most of us would choose Option A for all the questions. This is the mentality we noted. </p>

				<p>In this weeks’s blog, we are will try to change this mentality as this is a BIG hindrance in the journey of wealth creation.</p>

				<h4>Firstly let us understand below facts – </h4>

				<ul>
					<li>Equities perpetually do not go up or down.</li>
					<li>Equities “DO NOTHING” for long periods of time, only 20% of the time they move up or down. Rest of the times, they “Do NOTHING”. They more or less remain in same place.</li>
					<li>Equities will go up only if earnings go up.</li>
				</ul>
				<p>Now going back to the answers of the above question, we believe most of the readers would have chosen option A for the question 1 and 2. (Those who chose option B for both the questions, Please comment below your logic before proceeding to read). Since we don’t consider gold as an investment, we will avoid talking about it.
				</p>

				<h4>Scenario 1 -</h4>
				<p className="bold">If the Stock market investments I make rise regularly Yes, I will increase my investments</p>

				<p>Assume Mr Joe invests Rs 5k every month and markets have gone up regularly for 3 years each year giving you 15% returns. So his investment of 1,80,000 will be worth Rs 2,24,000 earning him a handsome profit for Rs 44,000. Mr Joe invested just to see how markets perform and whether actually markets will give you any returns. Now at the end of 3 years, since he has made good money, Mr Joe is confident that markets will make you money. Since Joe did not read this blog, he remains an average Joe and will now increase his investments. He does not know fact# 1 above which is “Equities perpetually do not go up or <strike>down</strike>"</p>
				<h4>Lets see what happens now – </h4>

				<p>Remember <strong>Fact#1</strong>, market does not go up perpetually.  So now it starts correcting. But Joe just increased his investments and so he will take a bigger loss since he increased his investments.</p>

				<p>Assume that Markets correct 20% meaning the prices fall by 20%.</p>

				<h4>What happens - </h4>

				<img src="/images/Capture.JPG" className="img-center" />

				<p>After 6 Years of disciplined investment, Joe will face a loss of 2% on his investment. His Aunt and uncle will tell – “Had he put his money in FD itself it would have gained at least 30-40%”.</p>

				<p>Being Where Joe is, We are sure at the end of 6 years, Joe will realize that Equity investing is worthless and will leave the markets for good, never to return ever after. Another “Would be” wealthy man lost!</p>

				<p>This is the case with most of the investors and we should avoid this mistake. </p>

				<h4>Scenario 2 -</h4>
				<h4>Q1. If the Stock market investments I make fall regularly “NO” I will not increase my investments ? </h4>

				<p>This is no brainer. When the money that you already invested does not make you profits you will not invest more automatically because of the fear that it will never make profits. To confirm your doubts, you have ready proof in form of your investments which has not made any money. </p>

				<p>But what does he loose by not increasing his investment.</p>
				<h4>Refer below workings – </h4>

				<img src="/images/Capture (1).JPG" className="img-center" />

				<p>Remember <strong>fact#1</strong>, Prices do not go perpetually down. So the stock price starts moving up, Ideally it has to go up by 115% (20% to regain the original price and 90% return, 15% every year for 6 year period)</p>

				<p>So the price per stock will be 80*215% = 172.</p>

				<p>Note you hold 4050 units of the stock.</p>

				<p>Joe’s corpus will be 132*4050 = 6,96,000. This will translate to a nice profit of 76%.</p>

				<p>So instead of loosing Rs 1,200, Joe will have made a healthy profit of 3,00,600 on his investments.</p>

				<h4>In reality What should you do ?</h4>

				<ul>
					<li>Whenever your investments have made handsome returns in near past(past 3 Years), Do not increase your investments significantly. </li>
					<li>Wait for the markets to correct, for every 5% fall, increase investment by 5%. upto until 20%.  </li>
					<li>Whenever your investment have not made your significant money, Plan to increase your investments gradually. Ideally by 5% every 6 months until you increase it by 20%.</li>

				</ul>
				<h4>Dont's - </h4>

				<ul>
					<li>Do not get disappointed when stocks don’t perform, wait for the earnings to catch up (fact# 3)</li>
					<li>Do not get excited when the markets have rewarded you handsomely, gear up for some correction.</li>
					<li>Never Invest with out a goal. Goal based investing helps you to get in and get out of markets to your advantage.
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
export default investmentsUpDown;