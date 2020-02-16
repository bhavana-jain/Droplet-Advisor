import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';

class happyNewYear extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2 className="blog-details-title">Happy <span>New year !</span></h2>
				<h6 className="blog-publish-info">By Admin | Jan 07, 2018| Uncategorized | 0 comments</h6>
				<img src="/images/Happy-New-Year-1080x675.jpg" alt="Happy New Year blog banner" />

				<p>We wish a very Happy &amp; wealthy New year to all our blog readers!</p>

				<p>We have been blogging for a couple of months now. We are so glad that our blog has reached over 1500 readers in aggregate. Our ultimate intention through this blog is to inculcate the importance of financial planning and giving you advice securing your financial Today, Tomorrow and forever.</p>

				<p>Being advisors in the field of finance, it is not possible we avoid numbers. Like 365 days divided in 12 months and 12 months making a year, one of which has just ended and a new one started. Imagine if we did not have these numbers – 30 Days, 54 Weeks, 12 Months – how can we turnover a page in life and say to ourselves- Oh Yeah! Let me start fresh now that a new year has begun.</p>

				<p>Numbers are boring no doubt but if one needs to be financially secure and independent, then one has to pay due attention to the numbers that govern one’s life. Like </p>
				How much has my income increased over the past year?

				<p>How much have my expenses increased in past year? </p>

				<p>How much do i need to live off this year?</p>

				<p>So on…</p>

				<p>Most of the readers, we understand would not have given it a serious thought thinking that it is too much. But the fact is once you look at your life through the prism of numbers, You will realize how easy and simple it is to have a “Healthy”-Wealthy life.</p>

				<p>At the turn of New Year, we request our readers to resolve and achieve the below goals –</p>

				<p>Initially we thought of coming up with a write-up which is close to our heart anytime. But fortunately we did learn a lot and got to know a few interesting things about Provident Funds (popularly known as PFs) So we decided to postpone the actual blog and wrote this one, as this will help readers to correlate with the next one! So, this week let us look at what Provident Funds are all about!</p>

				<p>Provident Funds are two types Employee Provident Fund (EPF) &amp; Public Provident Fund (PPF). Both Employee Provident Fund and Public Provident Fund are long term investment tools which helps you secure your retirement days. Before you invest in either EPF or PPF, it is important you know about these plans.</p>

				<ul>
					<li>Have a term insurance including accidental cover for sum assured equal to 10 times of your annual income and a medical insurance. </li>
					<li>Have a Mediclaim Policy. </li>
					<li>Have an emergency fund not less than 1.5 years of your monthly survival expense (rent, grocery, fees, medicine etc.).</li>
					<li>Pen down your monthly earnings and expenses. See how you can make your spending efficient. Make sure you save minimum 25%, the more the better.</li>
					<li>Start investing your savings. So that your money works for you too.</li>
					<li>While investing keep a long-term view – minimum 10 years. Do not stop investing when the market is down. Continue your investments irrespective of the market conditions.</li>
					<li>Equity is the only asset class, which has given better returns in the long run compared to any other asset class historically.</li>
					<li>Don’t take loans except for buying a house. However, have atleast 35% cash as down payment and go for loan for the balance 65%. Make sure the house you buy is not more than 5 times of your annual salary.</li>
					<li>Do not have more than one credit card. Moreover, make sure you pay off all your bills on time. No revolving credits. (Credit cards are only for emergency)</li>
					<li>Do not check your portfolio value every now and then. Treat your investment as you treat your house.</li>
					<li>Have a financial advisor who can guide you through the investment cycle and help you in creating wealth.</li>
					<li>Make sure you always invest with a purpose in mind and get out once the purpose is achieved.</li>
				</ul>
				<p>Its still the 1st week of the New Year – Just take the Pen & Paper, jolt down the numbers and Decide to make your Life – “Healthy” Wealthy.

</p>




				<BlogComment />
			</div>
		)
	}
}
export default happyNewYear;