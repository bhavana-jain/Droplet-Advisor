import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class titanStory extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "A titan story"
	}
	render() {
		return (
			<div className="container blogs-wrap">
				<h2>A  Titan Story – Delayed Gratification.</h2>
				<h6 className="blog-publish-info">By Admin | Mar 18, 2018| Uncategorized | 0 comments</h6>
				<img src="/images/A-Titan-Story-Delayed-Gratification-1080x675.jpg" alt="A titan story" />
				<p>How would you feel If were you to tell you that a piece of land that your Dad bought years back and sold immediately off is worth today 200 times its purchase price?</p>

				<p>How would you feel that If we were to tell you that instead of Buying RE classic 10 years back, had you bought the Stock of the Company, making REs it will be worth 100 Times now?</p>

				<p>How would you feel if i told you that had you given me One Rupee 25 Years back, I would give you Rs 200 today?</p>

				<p>	I am sure you would think like finding a machine like this! Wouldn’t you?</p>

				<img src="/images/Netru.jpg" alt="A titan story" className="img-center" />

				<p>or Get hold of a Watch like below ? </p>

				<img src="/images/24-watch.jpg" alt="A titan story" className="img-center" />

				<p>Use these time machines, go back in time and do something and get rich today.
But In real these do not happen. What happens is, You get really unlucky! Yeah I mean it, Unlucky.</p>
				<ul>
					<li>Buy the land &amp; forget that you bought itself.</li>
					<li>Some Friend suggests that you buy the share of the company rather than the bullet, You buy both and forget that you bought shares as well</li>
					<li>You give me a rupee, forget that you gave (after all one rupee only), We being we, duly return the money to you along with appreciation.</li>
				</ul>
				<p>What happens often is by wanting to become rich quickly we “Pump, Jump and Fall Flat” where we started. In each of the above cases, one thing we should pay attention to is time. The longevity of it. 20 Years, 10 Years, 25 Years so on.</p>

				<p>Why Am i talking about all these? Well it happened that my Partner was talking to his Uncle about the Power of Equities, Power of Compounding &amp; Power of Longevity and as like all Indian conversations this one too spilled and these two started to talk about relatives, Friends, colleagues. Out came a name “Tanigai Velan”. This gentleman lives in Hosur, works at Titan and has been a Titan Employee since 1992.</p>

				<p>It happened that in 1992, Titan issued Employee Stock Options (ESOPs). A scheme under which the employees can buy the shares of the company that they work in. In our case, Mr Velan was working in Titan and had as an “Employee”, “Option” of buying Titan “Stock”. He, along with his friends, duly exercised this option and bought 300 Shares of Titan (<strong className="underline">Pump</strong>) at Rs. 50/share. The Markets were hot around that period and the Price of Titan doubled in 6 months (<strong className="underline">Jump</strong>). Excited that his Money doubled he &amp; his friends decided to sell their shares and spend the Money else were (<strong className="underline">Fall Flat</strong>).</p>

				<p>But the only twist in the story is Mr Velan would sell only 200 Shares earning Rs. 10,000 profit and he fell flat only to the extent of 200 shares. Mr Velan tried everything in his knowledge to sell the remaining 100 shares while the price was still double. But Luck eluded him and he would not sell the remaining 100 shares.</p>

				<p>In days to come he got married, went the family way and life kept him busy. He <strong>Forgot</strong> these 100 Shares. Between 1992 and today is a chasm of about 25 Years. Lets see how “Bad Luck” played its part in Mr Velan life.</p>

				<h4>The Boring Calculations Part</h4>

				<img src="/images/Excel.JPG" alt="" className="img-center" />

				<p>Had Mr Velan not sold his 200 shares as well, those would be easily worth 48 lacs today. An investment of just 15,000 turned out to half a crore, mind boggling isn’t it. Even after this, If he were prudent, he would save some shares for his next generation or invest the part of it in better available funds.</p>

				<p>I know you would be wondering why did he not sell his 100 shares, he never thought of holding the stock in his wildest dream. Only Bad Luck (mismatch of signature) of not being able to sell the shares helped Mr Velan to hold 1/3rd of his shares while others around him Pumped, Jumped and fell flat, while Mr Velan has built some wealth for sure. </p>

				<p>Only lesson we want to tell our readers is, never run for instant gratification. Start early, start small, stay the course and reap big benefits over the period of time! Remember one thing, in investing time &amp; emotion are the two most important factors determining one’s fate!
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

			</div >
		)
	}
}
export default titanStory;