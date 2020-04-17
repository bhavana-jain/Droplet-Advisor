import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import { NavLink } from "react-router-dom";

class nonPerfomingSaving extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		document.title = "Non performing Saving"
	}
	render() {
		return (
			<div className="container blogs-wrap">
				<h2>Non Performing Saving!</h2>
				<h6 className="blog-publish-info">By Admin | Nov 25, 2017 | Uncategorized | 0 comments</h6>
				<img src={require("../../../images/blogs/NPS-Non-Performing-Saving-1080x675.jpg")}
					alt="Non Performing Saving Demo" />
				<p>It was a rainy afternoon and I was peeping through a large window and enjoying the scenery of rains, waiting for the lift to take us closer to earth from these bundles of Elixir that clouds are. I work on the 12 floor (closer to heaven) and join my friends on the ground floor for meals. Still lost in Rains, I did not pay heed to the conversation of colleagues next to me until a gentle-man aged in his early forties stepped in and was discussing about opting for NPS (National pension scheme) very seriously, Since this rainy day was the last day if one had to do so. He was desperate to apply for NPS since he believed it will take care of his retirement life.</p>
				<p>He continued saying, I’m not sure whether the present generation kids will take care of us &amp; so it is a must to opt for NPS as it will secure our life with steady income post retirement. Until then, I did not consider that I too will be old someday and will be resigned to the same fate this gentlemen predicted</p>

				<p>Intrigued if NPS can be really be a serious investment option, I digged into my lunch box as fast as I would and ran up closer to heaven and asked questions of Modern day Brahma, that Google is.</p>
				<p>My little research about NPS and its marketing by sellers as an investment and tax savings instrument made me understand that it is simply a Non-Performing Savings. Ignorance is bliss only until it does not let you choose NPS!.</p>
				<div>
					<p>Below I would like to lay down my findings, the positives (if any) and negatives about the pension scheme.
Firstly, let us have a look at what NPS is all about – </p>
					<ul>
						<li>NPS is National pension scheme controlled by PFRDA.</li>
						<li>Earlier govt., paid 10 months pension to all govt employees and from the year 2004, govt., decided to reduce its liability and introduced NPS, through which employees should mandatorily contribute to cover-up their financial security post retirement.</li>
						<li>From 2009 onwards, govt., opened the NPS scheme to private employees as well.</li>
						<li>Anyone between 18 to 60 years can invest in NPS</li>
						<li>Minimum contribution Rs. 6000/year</li>
						<li>Two accounts – Tier I &amp; Tier II</li>
						<li>Service Charge – 0.0102% for govt employees &amp; 0.25% for private employees</li>
						<li>Annual Maintenance charges of Rs. 190</li>
						<li>Now that we know What it is, let’s get to the knowing the Pros &amp; Cons of NPS</li>
					</ul>
					<h4>Pros –</h4>
					<ol>
						<li>Rs. 50,000 Additional tax benefit under section 80CCD (1B) for the investments made in NPS (stay caution) You save 15K if you are in top most bracket</li>
						<li>Safety of your investment is guaranteed as it is with Government of India (Hopefully as claimed as long as another Lawyer does not become Finance Minister.)</li>
					</ol>
					<h4>Cons-</h4>
					<ol>
						<li><strong className="underline">Life Term Jail Sentence for your Money</strong> – Majority of the portion can be withdrawn only after retirement (after reaching 60 years, once you get in to Jail of old-age, your Money will earn its freedom. Guaranteed)</li>
						<li>One can <strong className="underline">withdraw only 20% of the investments</strong> made before reaching the retirements. Oh yeah! 20% gets a parole.</li>
						<li>Taxation Tricks –  Sellers of NPS claim that you can save tax on NPS Investments (Exempt upto Twoooooooo laaakhs Sir, they would say). 2 lacs can be broken as 1.5 Lacs under 80C and another 50K in another 80 something category. So if you are smart, you will understand that your 1.5 lacs investment under 80C is of no use, since you PF/Life Insurance Premium will ideally cover 60% of 80C, meaning only 60K is tax exempt even if you buy NPS for 1.5 lacs (Did somebody say ignorance is bliss!). Since NPS is competiting against others options in 80C Govt created another section and allowed 50K under the new section. (So desperate to raise cheap money)</li>
						<li>NPS does fall in the EET category (Exempt-Exempt-Tax). So you will have to pay tax either now or later. Investing in NPS is like postponing you taxes to your retirements.</li>
						<li>Only 40% of the money can be withdrawn without any taxes and <strong className="underline">20% will be taxed based on your tax bracket </strong> and the remaining <strong className="underline">40% should be compulsorily invested in an annuity </strong> to earn monthly pension and the stupidest thing is, the pension is taxable.</li>
						<li><strong className="underline">Inability to beat inflation.</strong> Insurance annuities will provide a return of 3 to 7% pre-tax making it an incompetent instrument to beat inflation.</li>
						<li>NPS returns are not assured as it is market linked and you cannot have great control over your investments, They work like other financial investments except that <strong className="underline">returns are Far Poor</strong></li>
					</ol>
					<h4>Conclusion-</h4>
					<p>In anyway given situation NPS doesn’t stand out to be a better investment or Saving instrument. It is like our Politicians who are NPS too! (Naan Pesaamattum Seivaen), high on noise, low on performance. So a smart Investor should think twice before opting for NPS</p>
					<p><strong>Note –</strong> If you are young, you have most important Asset to Invest ie., Time. Please do not sentence your money to life term Jail, Let it go out and work for you. Feel free to write/contact us, if you wish to be financially Independent sooner.

</p>
				</div>
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
export default nonPerfomingSaving;