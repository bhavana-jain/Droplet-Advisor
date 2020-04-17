import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class savingsYouCant extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "Savings you can't do it"
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>Savings, You (can’t) WON’T Do It!</h2>
				<h6 className="blog-publish-info">By Admin | Mar 23, 2018| Uncategorized | 0 comments</h6>
				<img src="/images/Savings-You-cant-WONT-Do-It-1080x675.jpg" alt="Tax saver or investor" />
				<p>Let us tell you something. It is not just the money that you invest helps you build the wealth nor the returns. It is the habit of savings that you make. Wealth created over the years can be destroyed faster than it is earned. What makes you wealthier &amp; stay wealthy is; the rate of savings and the spending that you make. It may look hard-hitting but that’s the truth. </p>
				<p>One does not really need to have a sky scorching income to become wealthy, but should have the habit of higher savings and investing the same in appropriate asset classes that give better returns.</p>
				<h4>Think before you spend –</h4>
				<p>More savings meaning lower spending. By slowing down your expenses your bank balance balloons up. Moreover, the savings varies between people, for someone a rupee of 1,000 saved will differ from another. Stick to your basics of spending.</p>
				<h4>Rise in income leads to rise in expense –</h4>
				<p>Almost for everyone, including us. The expenditure goes up the way the income goes up. Sometimes the expenses goes up faster than the income. If we break down the expenses, we end up with three layers – essentials, Comfortable essentials and Un-necessary show off.</p>
				<p>Everyone in this world should and will spend on the essentials such as food, shelter and so on. Comfortable essentials are the expenses that you make towards your comforts, entertainment &amp; so on. Un-necessary show off is just the reflection of your ego towards the society. You start spending on things that you really do not need, just to appease people around you and you keep on spending more &amp; more to appease them every other time. You really do not have to appease someone. Be simple and save more.</p>

				<h4>You have control over your savings –</h4>
				<p>If you think savings needs hefty paychecks, then you can never become wealthy. I’m telling you right away. Savings should urge as a habit. One should change his perspective towards spending. If spending dents your savings, then you should be meaningful in your spending. You are throttling your vehicle and you should know the limits to juice out the excess mileage.</p>

				<h4>No reason at all –</h4>
				<p>One should never have a reason to save. If you say, I am saving for a house, to buy a car or a gadget, then I would say that really is not saving; it is just spending postponed for a later date. To me savings should never depend on a goal. Saving is hedging. No friend/family/alien will help you during the worst moment of your life, but your hard savings does.</p>

				<h4>The time is yours –</h4>
				<p>You can buy anything with the money you earn but not time. Time is the intangible thing we let out to someone for the money we are being paid. On an average an individual is tied 10 to 11 hours a day for the paycheck he receives a month. Savings gives you time to think, look out for opportunities, and options to choose.</p>

				<h4>The unprecedented wealth –</h4>
				<p>Having control over time and being flexible are the treasure for your life. By being flexible, you can wait and take on the opportunities that you love to do the most.  It really does not matter to you if you get a lower salary job but with a meaningful purpose to life. The treasure is achieved by saving more.</p>

				<p>If you believe, you are so intelligent and you are irreplaceable. Then you are wrong. Intelligence isn’t going to be an sustainable advantage in the near future with the presence of AI’s. But flexibility is and will always be. AI’s can do better job than the smartest people on earth. So, it really doesn’t matter how smart and intelligent you are. What matters the most is, the control over your time and options to choose. Having said that, I repeat, “SAVE MORE”.</p>

				<p>If you still argue about life’s uncertainty to save for future but go buy a fancy gadget (aka Mobiles, High end Watches, bla bla what not! ) worth 30,000 bucks earning monthly income of 40,000 bucks to appease people around you then </p>

				<ul>
					<li>You can never become wealthy nor have your time.</li>
					<li>You have seriously wasted 10 mins of your time reading a masterpiece</li>
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

			</div >
		)
	}
}
export default savingsYouCant;