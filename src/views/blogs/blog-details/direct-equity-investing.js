import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class directEquityInvestingI extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "Direct Equity investing"
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>Direct Equity Investing</h2>
				<h6 className="blog-publish-info">By Admin | July 27, 2019 | Uncategorized | 0 comments</h6>
				<img src="/images/Risks.jpg" alt="Direct Equity investing blog banner" className="img-center" />
				<p>
					A lot of us know mutual funds invest in Stock Markets. Stock markets aka Equities aka share markets aka companies. So a simple thought that comes to our mind, why not invest in shares by ourselves. The self-realization that we are smart than others props this thought to the next level and we commit. If not this then the greed of becoming Wealthy soon props this thought. If not now, then at some point it will. So you are caught and our job as advisors is to help you escape.
				</p>

				<p className="bold">
					Let us caution you - The very purpose of this post is not to Frighten you from Stock Markets but to frighten those who think stock market is a place to become filthy rich over night by investing based on a random tip. Read on.
				</p>

				<p>
					We have for now kept the legends who take personal loans and invest in the stock market away. We are only talking about individuals passionate about investing and want to make serious wealth by Investing in Stock Markets. By serious, we mean a number no less than a few crores.
				</p>

				<p>Let's say one can save 5k each month. And we know that we cannot be super-rich by investing in companies that have already given Investors super-duper returns. <strong>A novice Investors always looks for the <span className="underline">next</span> HDFC Bank/Reliance Industries/Infosys/Sun Pharma and never invests in the above stocks.</strong> So he goes hunting for companies that are Small and has the potential of becoming Very Big. Basically Small &amp; Mid Size companies. There are a few good reasons for it -
					<ol>
						<li>
							The Price of these Big companies is so high that we cannot invest in them all with paltry 5K. Then there is thought that since Price is so high they are costly too.
						</li>
						<li>
							The Price of the small &amp; mid-size companies is, well, small. Hence they are affordable, means you can buy 10 Companies with 5K monthly investment.
</li>
						Moreover, since the price is small, Say Rs 20, We tend to think it can easily go to 200 as against a share which is already 200 &amp; has to go to 2000 to give the same returns.

					</ol>
				</p>

				<p>
					Promise you guys, we were no different back in our days.
				</p>

				<p>
					So Alright we are looking to buy cheap companies that can go up easily and make us rich quickly and easily. We google and find next Exciting companies-
				</p>
				<ul>
					<li>
						Companies that have cutting edge technology
					</li>
					<li>
						Companies that will turnout (that becomes profitable.)
									</li>
					<li>
						Companies that have "connections", you know what I mean.
									</li>
					<li>
						Companies that are run by the heirs of Super successful businessman.
									</li>
					<li>
						Companies, just anything, as long as price is cheap and we are told a story we can believe.
									</li>

				</ul>
				<p>
					So a little bit of hearsay and a little bit of google help us build the next Super-Duper Stock Portfolio -
									</p>

				<p className="bold">Below a Sample
					<img src="/images/Pic 01.jpg" alt="" className="img-center" />
				</p>
				<p>
					Fall after fall, we continue to build more positions, We tell ourselves- we are getting the same stock @ lesser price, Stock markets will face fall but we should hold, in long term, we will make money, rupee cost averaging, Pyramiding, Etc., and what not!
				</p>

				<p>
					Eventually years later - this is how our portfolio looks -
					<img src="/images/Pic 02.jpg" alt="" className="img-center" />
				</p>
				<p>So as of this month, we might have lost as much as 98% of our investments. Many would still persist saying that this is the fee we have to pay to market to learn about investing. However, @ Droplets, we would suggest a wiser way to do the same things, more on that in our next blog-

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
export default directEquityInvestingI;