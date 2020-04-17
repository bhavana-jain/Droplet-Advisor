import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class unlimitedPeriodOffer extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "Home loans at 50% discount"
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>Home “Loans” at 50% Discount</h2>
				<h6 className="blog-publish-info">By Admin | Nov 18, 2017 | Uncategorized | 0 comments</h6>
				<img src={require("../../../images/blogs/Unlimited-Period-Offer-Home-Loans-@-50-Discount-1080x675.jpg")}
					alt="Home Loan Offers" />
				<p>Recently friends of mine were discussing the rush @ global brand Apparel store because of the discount that they were offering to the customers. A certain 50% discount made sure that people rushed to the store and the store ran out of inventory within a week. I was imagining if “a common need” product is sold@ 50% discount, won’t the rush be larger.  Hence i decided to post it here.</p>
				<p>The common commodity that I’m talking about is a “Sontha Veedu” (own house) we all crave to buy. Sometimes i have seen people buying a house without having a plan for it and feel so burdened by the EMIs they have to pay especially in the initial years where their earning capacity is still limited and the interest outgo is high.</p>
				<h3 className="text-grey">Alright, let me get to the Story or to say correctly “Maths” of the Story! </h3>
				<p>Lets assume the Average cost of apartment is 40 lacs. So a prospective Buyer has to first have a down payment of 15% ie., ~5 lacs in hand. Then further he will go for home loan of 35 lacs (40 lacs – 5 lacs down payment).</p>
				<p><strong>To Buy a house worth 40 lacs – </strong></p>
				<ol>
					<li>The Buyer has to have a cash of ~6 lacs.</li>
					<li>The Buyer would go in for a loan of 34 lacs. <br />A loan of 34 lacs @ 8.65% to be repaid in 15 Years requires the buyer to pay a EMI of 33,780(assume 34K). At the end of 15 Years, Buyer (now the house Owner) will have repaid 61 lacs (34 lacs towards his principal, 26.8 lacs towards Interest).</li>
					<li className="note-text">The Buyer will pay 26.8 lacs towards Interest.

					Here I would like to highlight to the prospective Buyer that half of the Interest is paid during the first 5 Years of the Loan Tenure. In this case, The Prospective Buyer will pay 13.3 Lacs (2.9+2.8+2.7+2.5+2.4) towards interest in first 5 years out of 26 lacs.
						<p>Now is where the Buyer has to play smart – Instead of Buying the house right away, he should stall his decision by 5 Years and Invest the Interest amount he will pay in these years in a good fund (Don’t Worry, we are there to help you!) which yields 15% compounding return. So he should start saving 13.3 lacs/5 (Years) / 12 (Months) ie., 22,000 every month. Use the remaining portion of the EMI to move into a rented house in the same area. I’m sure you can easily get a 45 Lacs apartment @ 12K rent or even lesser than that (34K-22K).
						In 5 Years, the 22,000 prospective Buyer’s monthly  investment will grow in to 19.2 lacs. Add to this the Initial Down payment, 6 lacs Invested likewise will be 12 lacs. Both the monthly SIP &amp;  lump sum when invested in a fund yielding 15% returns over the 5 years will aggregate to INR 31 lakhs.
Alas! the price of your home will not be the same, It will raise too! So @ 7 % appreciation, the value of the same property will be 56 lacs. Good News is you already have 31 lacs and you need a loan of only 25 lacs and on top of that, You can easily afford to pay an EMI of 34K. Let me remind you, In 5 years’ time, your earning will have improved too and you can afford to pay 25% extra hardly feeling a pinch. So in all you can pay a EMI of 34*125% = 42.5K.  You can now repay the loan of 25 lacs in 6.5 Years. The interest outgo will only be 8 lacs.</p>
					</li>
					<li>Buyer now pays only 8 lacs interest instead of 36 lacs (refer point 3), in the process saving himself 28 lacs!</li>
					<li>Buyer becomes the owner (forecloses the loan) in 11.5 Years instead of 15 Years initially expected, saving 3.5 Years of time.
						<p>Since the Buyer (now the house owner) is smart he will continue to assume the loan is on going, will invest the EMI amount of 43K in  a good fund (again don’t worry, we will guide you for sure). He will continue to save (invest) 43K monthly for 3.5 Years (time saved from Point 5). At the end of 3.5 Years, his corpus will be 23 Lacs. The home owner should set aside this corpus for his retirement and continue to hold for 20 years, the corpus will be 3.7 Crores. So if the Buyer plans properly, in 15 years, He can retire with a house to live &amp; without any financial worries.</p>
						<p>On a personal note, I think it is very important that we all own a piece of roof we can call ours. If We have not started planning, We should start planning towards it right now. No good day to start than Today!</p>
						<p><strong>Notes - It is assumed that the Buyer invests in Balance fund which have given a average return of 16% in last 5 Years.

</strong></p>
					</li>
				</ol>
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
export default unlimitedPeriodOffer;