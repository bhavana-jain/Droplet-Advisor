import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class creditcard extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		document.title = "Paying minimum balance on credit card"
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>Paying Minimum Balance on Credit Cards ?</h2>
				<h6 className="blog-publish-info">By Admin | Jan 25, 2020| Uncategorized | 0 comments</h6>

				<img src="/images/creditCard.jpg" alt="paying-minimum-balance-on-credit-cards blog banner" />

				<p>Why minimum balance payment on credit card is the worst thing?</p>

				<p>	Of late credit card penetration in India has increased multi-fold. A decade back 1 in 10 would have a credit card. Today 9 in 10 have 3 credit cards each. A ratio of 1:27. All these are mostly owned by salaried people, because they are the ones who pay off at any cost and are easy targets. I myself had six credit cards until 2017. And today I have two, closed the other 4. Stopped using it much.</p>

				<p>A recent statistics reveals that there are approximately 50 million credit cards. Of which 25 million are active cards meaning at least one transactions happens every month.</p>

				<p>The whole purpose of getting a credit card is for emergency needs and/or cashback points. However we start using it for LUXURY WANTS! This is where our financials would go for a toss</p>

				<p>While applying for a credit card, we look out for offers, interest free credit period (as if we will pay it on time), cash withdrawal limits, annual fee and so on. And fail to note that the interest charged is anywhere between 42 to 48% per annum. Yeah it's a <strong>meter vaddi</strong>. And if you fail to pay, there comes a <span className="underline">late Payment fee + Interest + tax on interest</span>.</p>

				<p>In no time we will exhaust the credit limit which would be 2 or 3 times our monthly salary. And run behind the bank to convert this to an EMI. Certain banks do and certain banks do not offer the conversion citing no conversion policy for the month or the card (happened to me several times). Instead they would offer a personal loan for the same amount. Ever wondered why? That's because you will pay off the credit card outstanding and start using your card again! </p>

				<p></p>And exactly this is were we would start paying only the minimum balance. By paying minimum balance you are just keeping the card alive. Your outstanding balance will remain the same even after years of minimum balance payment. Not that with each month, there is interest added to the outstanding balance which already includes Interest from the Previous month. This is a vicious cycle. At times you may a little extra and free up the credit limit, so that you can use the card again. You are losing your credit score as well. Think!

				<p>I was doing the same until 2014-2015. Then I realized I'm doing nothing but paying 42% interest and taxes on the payments I make month on month. Finally I made up my mind to sell of my equity shares and paid all the outstanding dues. My hard earned savings gone for a toss and I had to start from the scratch again.</p>

				<p>Plastic cards are literally a kind of addiction if you don't have control over it.</p>
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
export default creditcard;