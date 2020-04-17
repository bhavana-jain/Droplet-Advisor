import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class greedGainPain extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = " Greed.Gain.Pain"
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2 className="blog-details-title">Greed. Gain. <span>Pain</span>.</h2>
				<h6 className="blog-publish-info">By Admin | Feb 04, 2018| Uncategorized | 0 comments</h6>
				<img src="/images/Greed.-Gain.-Pain.-1080x675.jpg" alt="Greed Gain and Pain blog banner" />

				<p>We all live in a world of instant gratification. With the prevailing technological disruption, we were able to buy everything and anything in an instant click and it is delivered at our doorstep without any pain or work from our side. Similarly, we want everything to happen in minutes, hours or days including wealth creation. We are living the 2 minutes noodles life.</p>

				<p>However, we forget that Life is all about being patient and sailing through the vicissitudes that comes along the way. In today’s blog, let us see some of the economic bubbles and peoples greed to become rich overnight and how it put people off the course of wealth creation for the rest of their life.</p>

				<h4>The Tulip Bubble –</h4>

				<p>
					It happened in the year 1637 (1630-1637) at Holland. After gaining independence from Spain, Holland was economically growing well led by technological advancement. Then came the weapon of mass destruction, the Dutch were introduced to the Tulip flowers. When the economy flourish, there comes a bubble. Tulips started to come into Holland from Turkey. It was in great demand and traded at hefty valuations. The twist started here, as the time goes, tulip flowers were affected with Virus which generated shades of different colors on their petals. The virus infection spread widely and because of which the color patterns of the petals were so unique. The speculation lead to more demand and prices were sky rocketing. With booming economy, all the cash were deployed to buy Tulip flowers as it was considered the greatest asset &amp; pride! People even sold their houses to buy the flower as it was priced n times that of real estate prices (this reminds me of crypto currencies today). In the last leg of Bull Run, the prices started to double every week! You cannot fill the balloon with air beyond a point. In the Month of Feb 1637 an auction was held and to everyone’s surprise, there were only sellers without any buyers. This news wide spread and people started to sell out in panic resulting in the collapse of the economy at large as n number of people have heavily invested in a flower which is worth nothing and many did sell their properties and other asset classes are on streets having a basket of flowers and nothing! One of the speculative investing happened until today, which the Dutch will never forget! The tulip prices went up close to 60 times in short time and collapsed by 90%.</p>

				<h4>South Sea Bubble</h4>

				<p>It happened in the year 1720 at UK. John blunt (founder of South Sea Company – SSC) who had influential connections with politicians took debt of 7.5 million pounds from government and issued shares in lieu of debts. With government funding he further influenced the politicians for monopoly rights to trade with Spanish colonies of South America. Shares of SSC was traded at 138 pounds a piece and blunt wanted to increase the price to 300 pounds so that he can issue less shares in the place of debt at inflated price. Less scarcity and 300 pounds valuation lead to more demand. The company to cash in on the opportunity came up with a innovative scheme – “Shares on credit”. The buyers can buy the shares of the company by placing the shares on credit with company itself resulting in lower liquidity and higher demand. In addition, people were encouraged to buy in installments. Speculation peaked, everyone queued up to buy the shares as it was more profitable and the economy started to slow down. In no time, the shares were traded at 1000 pounds a piece. Lots of new companies issued shares looking at the success of SSC and made money. As most of the shares were sold on credit and installments, government decided to launch prosecution and then the process started to fall off. When the bubble burst, the shareholders were paid only 44 pounds per share! Share prices went up 8 times in 8 months and collapsed 96% the following month.</p>

				<p>Let’s pause here.</p>

				<p>Greed never ends! There were unprecedented financial bubbles happened across the globe because of human greed and naivety. We will continue the series next week as well… You ponder until then😇</p>
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
export default greedGainPain;