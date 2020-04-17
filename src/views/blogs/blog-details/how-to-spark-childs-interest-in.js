import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class childsInterestInvest extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "How to spark a child's interest in investing"
	}
	render() {
		return (
			<div className="container blogs-wrap">
				<h2 className="blog-details-title">How to <span>spark a child’s interest in investing</span></h2>
				<h6 className="blog-publish-info">By Admin | Aug 03, 2019| Uncategorized | 0 comments</h6>
				<img src="/images/kid-saving.jpg" alt="Spark child's interest in Investment blog banner" />

				<h3>Read this interesting article last week and thought of sharing it with all our readers.</h3>
				<h4>
					client shared this story with us:
				</h4>
				<p>It started at the grocery store. Every time we were shopping, my older son, then eight years old, would bug me to buy him a certain cereal he’d seen advertised on morning TV. The same thing would happen when we passed a toy store. He’d beg me for highly advertised action figures.
I realized it was time to teach him about how businesses work and decided that the stock market might be a fun way to do that.</p>
				<p>We started small. I told him he could buy the stock of any company he wanted—so long as he paid with his allowance or with money received as a gift. I’d match his funds.
				Of course, he was drawn to companies he could relate to: computer stocks, Manchester United, and the like. When we ate in a restaurant he liked, he started asking if it had stock, and if so, how we could invest.
Our stock market game not only taught him a little about companies and their motivations, it also showed him that money invested could grow. At night, we’d sometimes go over the company watch list I created on my phone to track his stocks. He was thrilled to watch his portfolio increase in value.</p>
				<p>
					Of course, not every one of his stocks went up, and that was a good lesson too. He bought into one company because he liked the clothes it made. But, like many retail stocks, it took a beating because of competition from online outlets. When I explained this dynamic to my son, he wanted to find retailers with a stronger online presence.
</p>
				<p>A year later, I heard him, then nine, lecturing his cousin about how to use holiday money. “Don’t just buy toys—use your money to invest in the future,” he told the surprised older boy.
				My younger son, now age six, has been watching me and his brother—and wants to know when he too can buy stocks. I plan to start him investing on his next birthday. He wants to buy shares in a popular automaker because he likes trucks. The stock is currently at around $14. Works for me.</p>
				<h4>
					Our specialists observe:
				</h4>
				<p>Classic family dynamics are on full display here. Children astutely observe parents’ actions. Older children actively teach and serve as role models for younger siblings.
To empower your children in money matters, it’s wise to focus on the right lessons for the right ages. The primary focus for most children ages 6–8 should be earning, saving and spending, as, developmentally speaking, they are developing skills in problem solving and decision making at this stage.</p>

				<p>Investing is a terrific secondary focus for this age group, and likely shouldn’t be a primary focus until about ages 12–14, when children tend to develop greater facility in abstract thinking.
				This father’s approach is powerful because he’s made the stock picking and tracking a game for his eight-year-old. Also, instead of simply buying his son’s stocks for him, he has the child use his own money, helping him to be emotionally invested in the purchase. Matching those funds helps boost the boy’s enthusiasm.</p>

				<p>
					Later on, when the child reaches his young teens, the father might start pointing to articles that describe the larger economic conditions that drive markets. He might help his son branch out to—and learn about—other types of investments (fixed income and the like). Also, as the teens are a time when children start developing a peer identity, a school-based investing club might be fun and informative.
				</p>

				<p>Source - JP  Morgan
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
export default childsInterestInvest;