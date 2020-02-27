import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';

class directEquityInvesting extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2 className="blog-details-title"><span>Direct Equity Investing</span> II</h2>
				<h6 className="blog-publish-info">By Admin | Aug 17, 2019| Uncategorized | 0 comments</h6>
				<img src="/images/equityInvestment.jpg" alt="Equity Investment blog banner" />

				<p>
					So we promised we will suggest a different (better) way of Direct equity investing in our <a href="javascript:;">previous blog</a>. Here we are with our simple thoughts. Read on
				</p>

				<h4>Build your Capital</h4>

				<ol>
					<li>
						Give yourself an 8 year time period. Well, the obvious question then would be "Don't stock markets make people rich in quick time?" Not really. One would have "made" the money in one year but by staying invested for decades.
					</li>

					<li>
						In that 8 year period build your capital by saving in products that are exposed to stock markets. aka Equity Mutual funds.
					</li>

					<li>
						Why Equity Funds and not something else? That is because, this will give the experience of "Market Volatility" + compound your capital at a better rate.

						<p>That's only about capital. So how about the knowledge? </p>

						<h4>Build your knowledge</h4>

					</li>
					<li>
						During this 8 year period, Start reading books relating to investing.
					</li>

					<li>
						Based on what you read, Pick the Stocks and make a note of the reasons for your buying &amp; your expectations from the stock. This exercise is called paper trading.
					</li>

					<li>
						Repeat the exercise until you build confidence. In that process, generally, people bust their capital 2-3 times, meaning they may lose 100% of the capital they invest.
					   </li>

					<li>
						Once you have built the confidence then go live with 10-15% of your capital accumulated.
						<p>More importantly, <strong className="underline">How Much capital to build?</strong></p>
					</li>
					<li>
						This is one question most people don't consider seriously. So let us tell you why one should consider it seriously.
					</li>

					<li>
						Let us assume Mr. A, Mr. B &amp;  Mr. C, all become an ace stock picker over the course of time. but each one of them has a different amount of capital to invest.
 </li>

					<li>
						On average even the best stock picker makes a return of 30% p.a on his investment. At this rate, such a stock picker would double his investment in 3 years.
					</li>

					<li>
						Below table explains the income all the 3 would have made with their capital
						<img src="/images/estimatedIncome.jpg" className="img-center" />

					</li>


					<li>
						As can be seen, one can make anywhere between 75k/per month to 3.8 lacs per months depending on the capital.
					</li>

					<li>
						Most of us in our jobs rue the fact that we did not choose better graduation or course that would have given them a higher "starting package", well this is your chance to redeem that regret.
					 </li>
				</ol>

				<p>Again a lot of people think of markets gambling and things like that, we leave it to them. For us, the stock market is a great source of wealth creation should we show passion and work hard. </p>

				<BlogComment />
			</div>
		)
	}
}
export default directEquityInvesting;