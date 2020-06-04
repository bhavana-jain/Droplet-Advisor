import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import firebase from 'firebase';
import { NavLink } from "react-router-dom";

import LoadScript from "react-load-script";
const Addthis = () => {
	const handleScriptLoad = () => {
		window.addthis.init();
		window.addthis.toolbox(".addthis_toolbox");
		console.log("addthis Loaded");
	};
	return (
		<div>
			<LoadScript
				url="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ea2a77e918821b6"
				onLoad={handleScriptLoad}
			/>
			<div class="addthis_inline_share_toolbox"></div>

		</div>
	);
}
class unionBudget extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			childExist: false
		}
	}
	componentWillMount() {
		document.title = "Union Budget 2020";
		let postname = window.location.pathname.split('/')[2];
		let clapCount;

		firebase.database().ref('allBlogs').on('value', (snap) => {
			console.clear();
			// Check if child with pagename exists or else create one
			let checkChild = snap.hasChild(postname);
			if (!checkChild) {
				snap.child(postname);

			}
			// If child already exists, get theLikes and update in DOM
			else {
				clapCount = snap.child(postname).val().claps;
				this.setState({
					likes: clapCount,
					childExist: true
				})
			}

		});
	}
	likePost() {
		let postname = window.location.pathname.split('/')[2];
		let clapCount, newClapcount;

		// Create unique key with user name 
		let newPostLikes = firebase.database().ref('allBlogs').child(postname).child("claps")

		// Increment and return new value based on current value
		newPostLikes.transaction(function (likes) {
			return likes + 1;
		})

		this.setState({
			childExist: true
		})
		// Add data to the newly created key

	}

	render() {
		return (
			<div className="container blogs-wrap">
				<h2>Union Budget 2020</h2>
				<h6 className="blog-publish-info">By Admin | Feb 15, 2020 | Uncategorized | 0 comments</h6>
				{this.state.childExist ? <div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div> : ''}
				<div><Addthis /></div>
				<p>We were worried as financial advisers about the budget. Of course the Union Budget because if the budget was perceived to the be good then the markets would rally and our investors will not get discounts on their Investments. Discounts are always good, Who knows it better than you guys! The fact is good business shall always thrive irrespective of the budget and when we choose to invest in equities we invest in businesses that will do well in future. Note that we have used the word "Perceived". Again most of the govt policies being good or bad are perceptions of the people. A good businessman would identify each of them as an opportunity. A classic example is Titan which when was forced to import Gold due to "Govt Policies", it started Tanisq and today Tanisq is one of the largest contributor to Titan's Profits.</p>

				<ol>
					<li>As a (Citizen) Owner of the Country and </li>
					<li>As a (investor) Owner of the Companies. </li>
				</ol>

				<ol>
					<li><strong>Owner of the Country -</strong> <br /> We are sure by now, every one would be familiar with the equation - "Income - Saving = Expenses". This is exactly what has been tried in the budget. The ruling dispensation has not tried to be populist meaning announcing some freebies or waive offs, Tax cut, Increase 80C limits and such stuff that we cannot afford. Instead they have tried to look at what they have and what can be done with it and have stuck to it. Meanwhile trying to increase the income( improve tax collection, tariffs etc.,). This, we believe, is good for the health of the financials of the country. For Indians, this is unusual because for very long years we are so much used to "discounts" of this type. Free electricity, Free loan, this and that. So when the budget did not come out with any of these fancy stuff, it felt like a salt-less budget, leaving no taste in anybody's mind. Hence so much negativity around the budget. Of course there is lack of innovation and we hope this will be answered sooner or later. By being within the budget, the Country has tried to become less under debt (Income @ hand). Now, we leave it to the readers to decide which is good - to be debt free or to be in high debt.
					</li>
					<li><strong>Owner of the Companies - </strong> <br />In God we believe others bring data. As an investor, nothing can beat data. So lets look through numbers how have the investments made right after the Budget day fared.
Below is the list of worst Budget day reactions of the stock market.
						<p><img src="/images/union-budget.jpg" alt="Union Budget 2020" className="img-center" /></p>
					</li>
				</ol>
				<div>
					<p>Next we have plotted the returns of the Investment made on the worst Budget Days</p>
					<img src="/images/dropletBudget.png" className="img-center" alt="Droplet Insurance Budget" />
					<p className="text-tiny">We have chosen this Fund as it has existed  since 1996 and has a nifty 100 orientation. We do not recommend this fund.

</p>
				</div>
				<p>As you can see the returns have been far better than any of other traditional savings even if your chosen time for investment coincided with worst budgets of the history. </p>

				<p>Droplet's View - Budget are at best gimmicks used by marketeers to get their job done. As far as personal finance goes, <i>Trust, Discipline and Longevity is all that matter</i>. </p>

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
export default unionBudget;