import React from 'react';
import ReactDOM from 'react-dom';
import '../../blogs/blog.css';
import BlogComment from '../blogComments';
import firebase from 'firebase';
import { NavLink, Link } from 'react-router-dom';
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


class investorsInterestRate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: [],
			likes: ''
		}
		this.likePost = this.likePost.bind(this);
	}
	componentWillMount() {
		document.title = "Investors and Interest Rate";
		console.log(window.location.href);
		let postname = window.location.pathname.split('/')[2];
		let clapCount;
		firebase.database().ref('allBlogs').child(postname).on('value', (snap) => {
			console.clear();
			clapCount = snap.val().claps;
			this.setState({
				likes: clapCount
			})
		});
	}
	componentDidMount() {

	}

	likePost() {
		let postname = window.location.pathname.split('/')[2];
		let clapCount, newClapcount;
		firebase.database().ref('allBlogs').child(postname).on('value', (snap) => {
			console.clear();
			clapCount = snap.val().claps;
			console.log(clapCount);
			this.setState({
				likes: clapCount
			})
		});

		let user = "daram"
		// Create unique key with user name 
		let newPostLikes = firebase.database().ref('allBlogs').child(postname).child("claps")

		// Increment and return new value based on current value
		newPostLikes.transaction(function (likes) {
			return likes + 1;
		})
		// Add data to the newly created key

	}


	render() {
		return (
			<div className="container blogs-wrap">

				<div className="main-blog-header">
					<div>
						<h2 className="blog-details-title"><span>Investors &amp; Interest Rates</span></h2>
						<h6 className="blog-publish-info">By Admin | Feb 29, 2020 | Uncategorized | 0 comments</h6>
						<div onClick={this.likePost} className="clap-icon"> {this.state.likes} claps</div>
					</div>
					<div><Addthis /></div>
				</div>
				<img src="/images/Droplet_Interest_Rate.jpg" alt="Droplet Interest Rate" className="img-center" />
				<p>My Partner called me and told me that we are no different from laymen who know that Short term Interest rates are going to fall. We both know the same and hence we are the same. Yes I would say but only for the sake of that knowledge.
 </p>
				<p>
					The 1 Year FD in SBI in 2012 would have fetched a interest of 9.25% per annum but today it fetches only 6.25% and this is of course a grave matter for Fixed deposit holders. Because if they had known the interest rate would fall, they would have bought 10 Year FDs which would have paid the same 9.25 % today instead of ending up getting a measly 6.25 % today. So simple.
				</p>

				<p>
					Now it is expected that Interest rates can fall further - what do we do? Buy 10 Year FDs and lock the "assumed" higher interest today or Wait for the Interest rates to go up?
</p>

				<p>
					Speculate. Speculate. Speculate.
				</p>
				<img src="/images/Droplet_Asset Allocation.jpg" alt="Droplet asset allocation" className="img-center" />
				<p>This is where a good financial planner helps right decision rather than speculate on matters and get duped of returns. Most of the times the retails chases the Asset Classes with highest "past" returns and gets disappointed.</p>
				<ol>
					<li>
						One should have a proper asset allocation in place. Interest rates are largely function of inflation, higher the inflation, higher the interest rate. The rates themselves should not lead to decision making.
					</li>

					<li>
						In his latest Annual letter, Warren Buffet has re-affirmed the fact the Stock markets are still the No.1 option for wealth creation. But retail investors almost always loose money in stock markets due to lack of guidance.
</li>

					<li>
						In topic of FD investors, we should not be talking about Stock markets but if one chooses to invest in debt for 10 Years then he sure needs an adviser.
 </li>

					<li>
						Eventually all Investors who save, do so to build wealth but Debt ain't going to help them build wealth since it is a hedge against Inflation. Therein kicks in the need for a good adviser.
 </li>

				</ol>
				<p>So readers rather than toying with your money based on hearsay and half knowledge, seek out an good adviser. Merely Investing in FDs and speculating on Interest rates isn't going to be worth of your hard earned money. More Importantly, you might know as much as anyone else knows but knowing and doing are 2 different things. :)</p>

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
export default investorsInterestRate;