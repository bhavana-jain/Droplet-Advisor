import React from 'react';
import ReactDOM from 'react-dom';
import './blog.css';

export default class RealtyReality extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container blogs-wrap">
				<img src={require("../../images/blogs/Reality-about-Realty-1080x675.jpg")}
					alt="Reality about Realty" />
				<h2>Reality about Realty</h2>
				<h6>by admin | Apr 15, 2018 | Uncategorized | 0 comments</h6>
				<p>The state of our mind is in such a state that it takes a lot of courage to just state the facts since the facts we state have to peddle through the fake facts (aka lies) to reach it shores. The shores we are trying to reach are nothing but you  – “Readers”. And by the time, it reaches its shores, it is so confusing which is real and fake that the confusion swallows everything leaving nothing for the readers who await. We are afraid the knowledge is not crossing the shores! For the sails have not left the shores, not set forth towards knowledge. Alas!
				</p>
				<p>However we said – “Let’s persist!” This week we decided to bring to your notice a couple of newspaper articles that talk about returns from real estate. These articles appeared in Property Times supplement of Times of India
				</p>
				<p>Here are they-
					<h4>Before you proceed to read them, try to grasp these information from them –</h4>
					<ul>
						<li>What area the Investments were made in </li>
						<li>When was the Investment made (to judge the “development” of the locality)</li>
						<li>Years that the person stayed Invested (Longevity)</li>
						<li>Returns they have given (to judge if the Investments are good and decide if we can delay the investment)</li>
					</ul>
				</p>
				<div className="realty-articles">
					<div>
						<h4>Article One</h4>
						<div className="realty-toi1"></div>
					</div>
					<div>
						<h4>Article Two</h4>
						<div className="realty-toi2"></div>
					</div>
				</div>
			</div>
		)
	}
}