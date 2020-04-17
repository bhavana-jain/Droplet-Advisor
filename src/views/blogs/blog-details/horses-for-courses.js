import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class horsesForCourses extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "Horses for courses"
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2 className="blog-details-title">Horses for <span>Courses!</span></h2>
				<h6 className="blog-publish-info">By Admin | Dec 30, 2017 | Uncategorized | 0 comments</h6>
				<img src="/images/Horses-for-Courses-1080x675.jpg" alt="Horses for Courses blog banner" />

				<p>On this fine Saturday, Dharam my Investment Partner, and myself were attending a training on various financials products! Along with us there were other participants mostly aged 45+ and it was obvious that their best days were past them. An Interesting subject and students past their prime makes a peculiar combination and while we were still getting a feel of this peculiar-ness, Lunch was announced.</p>

				<p>A gentle man aged 50 along with couple of others followed us. It seemed they were still juveniles of Capital market and we were happy for them attending this training.  Fortunately, Dharam &amp; I had immense interest towards equities in our early twenties and we did gain precious knowledge about equities. Though there were many failures in the initial days, we did learn a lot and have been successfully investing of late; it has been almost 7 years now and we have quite a good portfolio and aiming to use our knowledge to our clientele’s benefit in future! What is knowledge if it is not used for common welfare is our humble view.</p>

				<p><strong><i>Ok, let us get back to the old gentle man. </i></strong></p>

				<p>He received a call, as he spoke we understood that he is in fact an insurance agent and was talking to his new client who was inquiring about saving his money. This gentle man said insurance is a wonderful investment and it gives you <span className="underline">guaranteed returns</span>. As we were hearing his Sermon on <strong className="underline">“Insurance &amp; investment” </strong>all that happiness we sensed minutes back drained our face. We were completely wonderstruck!</p>

				<p><strong><i>How in a world of investment can someone say treat insurance as an investment asset class?</i></strong></p>

				<p><strong>According to Wikipedia “Insurance is a means of protection from financial loss”</strong></p>

				<p>Insurance is a risk protection tool and HAS ABSOLUTELY NOTHING to do with investments. Alas, in this great country of Jugaad, someone just re-invented Insurance as investments and my naïve people have so far been taken for ride!</p>

				<p>
					This made us to look into what benefits do insurance policies give its “Policy Holders”. Through research, we got to know about Jeevan Anand is the most popular policy of our country sold by most trusted insurance company of India – the LIC! So we decided to take this as benchmark for our advice-
				</p>

				<h4>Let’s see what are the benefits we get by opting for Jeevan Anand-</h4>

				<img src="/images/Jeevan Anand.JPG" className="img-center" />

				<p>If you survive the Policy, the returns you get work out to roughly 6% only.  Right now, we are in an economy running at an inflation rate of 6%, so the net returns is “ZERO”. If an asset class cannot generate inflation beating returns then what is the use of investing in it? This blog post is not against insurance or its agents or companies. However, to educate people that the purpose of insurance is just to insure yourself for the risk of your life like you do for your vehicle! Insurance is necessary, as it covers the risk of your life. However, choosing the right product is the basic step.</p>

				<p>As Financial Advisors, Our job is to provide you the best option through which you can both insure your life and make sure your Money otherwise locked works better – Let us now look at the alternative ways we can achieve the same thing.</p>

				<p>The 1st thing we suggest is taking a <strong>TERM Insurance</strong> to cover your life. Though Term insurance does not give you any guaranteed returns in case of survival, the benefit far outweighs! Our Attempt in explaining the Benefits below –</p>

				<img src="/images/Droplet Insurance.JPG" className="img-center" />

				<p>Benefits of Investing the Surplus – </p>

				<ul>
					<li>Of Course Better Buck for your monies</li>
					<li>High liquidity. In case of Life Insurance, the Sum Assured is generally locked and redeemable only at given periods.</li>
					<li>No compulsion of paying huge premiums at specific time. Only 6% of Premium needs to be paid at specific time. Remaining can be saved as per convenience.</li>
					<li>Earning a substantial corpus that can set aside for Retirement.</li>
					<li>The Corpus earned can be redeemed in small portions as and how much required</li>
				</ul>

				<p>As we are nearing the end of financial year. We will be approached by the insurance agents who will <strong>hard Sell Insurance for tax planning/Investment</strong>. It is upon us to choose the Horses for Courses, means choosing “Insurance” for “Risk Protection” and not for Investment.</p>

				<p>The choice is yours If you will bet your money on Horse or Donkey 😉</p>
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
export default horsesForCourses;