import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";


class budget2020 extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "Budget 2020"
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>Budget 2020</h2>
				<h6 className="blog-publish-info">By Admin | Feb 01, 2020 | Uncategorized | 0 comments</h6>
				<img src="/images/DropletBudgetinPlanning.jpg" alt="Droplet Budget Planning" className="img-center" />
				<p>We just put up a whats app status and One of the replies inspired us to make that into a blog.</p>
				<p>Of course, like with all things @ Droplet, this one is not related to Superficial things like Budget/macro economics. So if you want to know our feedback on this year's budget, here it is -</p>
				<p className="text-center bold">---N-----O-------C-----O-------M------M--------E---------N---------T-------S---</p>

				<p>It is that. Because, in our fiefdom of Personal Finance, such things do not matter. Well then, let us use this opportune time to turn your attention to a more important budget, that is your <strong className="underline">Personal budget</strong>.</p>

				<p>Below are a few simple things that you should deliver on if you are want to make your country (ie., Family) Rich, Prosperous &amp; Wealthy.</p>

				<ol>
					<li><strong>Earnings -</strong> Make sure you have an active Income and work to increase that income by 10% every year. Improve you skill sets, shift jobs, start a part time venture, do anything (legal) and try to increase your income by 10% year on year. </li>

					<li><strong>The Holy Grail - </strong> <span className="underline">Income - Savings = Expenses</span>. Always see <strong>"savings" as expense</strong> and learn to live with that expense.</li>

					<li> <strong>Savings -</strong> It is so easy to say save but how much to save? How much is enough? Ideally it should be <strong>30% of your income</strong>.</li>

					<li><strong>Where to Save -</strong> With in the holy grail, this is the toughest question to answer. If you want a honest answer, seek a good Advisor. (No No! We are not trying to market ourselves - Pun intended!). A general plan can be as below-
					<ol>
							<li><strong>Pre- Payment of Loans -</strong> If you have loans (other than Home &amp; Car), paying it off should be your priority, that should be the 1st savings. </li>
							<li><strong>Having 6 months expenses in either bank/cash/liquid fund per your comport. </strong>This may not include your Home &amp; Car EMI.</li>
							<li><strong>Having a simple Term &amp; Health cover (Other than the cover given by Employer).</strong></li>
							<li><strong>Finally, plan and save for any short/long term goals.</strong></li>

						</ol>

					</li>

				</ol>

				<p>A simple google search tells us that Delhi is 2203 Kilometers away from Chennai and if we think that some one as far away would help you then one might as well look east and buy a Nagaland lottery and wait for the miracle to happen or start working on the BUDGET that matters right now! </p>
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
export default budget2020;