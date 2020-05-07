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


class startOrStopStockMarket extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: [],
			likes: ''
		}
		this.likePost = this.likePost.bind(this);
	}
	componentWillMount() {
		document.title = "Should I start or Stop my Stock Markets Investments";

		let postname = window.location.pathname.split('/')[2];
		let clapCount;

		firebase.database().ref('allBlogs').on('value', (snap) => {
			console.clear();
			// Check if child with pagename exists or else create one
			let checkChild = snap.hasChild(postname);
			if (!checkChild) {
				snap.child(postname);

			}
			// If child already exists, get the claps and update in DOM
			else {
				clapCount = snap.child(postname).val().claps;
				this.setState({
					likes: clapCount,
					childExist: true
				})
			}

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
						<h2 className="blog-details-title"><span>Should I start or Stop my Stock Markets Investments
</span></h2>
						<h6 className="blog-publish-info">By Admin | Mar 28, 2020 | Uncategorized | 0 comments</h6>
						<div onClick={this.likePost} className="clap-icon"> {this.state.likes} claps</div>
					</div>
					<div><Addthis /></div>
				</div>
				<img src="/images/shutterstock_1083474668.jpg" alt="Start or Stop Market Investments blog banner" className="img-center" />
				<p>
					The mighty fall in the stock market has spooked a large many investors and they face the conundrum as titled in the blog. But fortunately for us, with exception of 3-4 Investors, our clients have remained resolute to the path laid out for them and not bothered by market volatility. We thank them :)
</p>

				<p>
					Back to the question now, honestly there is no one answer that can be applied to all those who are investing. In personal finance, One Size never fits all. But like always Droplet will try to throw some data at our readers and let their sagacity decide what to do. After all, Stock market Investing is not everyone's cup of tea. It is all the more true if you are a "Do-it-yourself Investor".
										  </p>

				<p>
					Retail Investors are always late since they wait for "Proof of Returns". This is big Fallacy
</p>

				<p>
					A lot of you might have started investing between 2017-2018. This is because the returns from equity markets were great during the previous 3-4 years. Look at Image below -
										<img src="/images/pic01.jpg" alt="Equity market return" className="img-center" />
				</p>
				<ul>
					<li>
						A Sip started in Jan 2014 would have earned a Minimum return of 16% and a maximum return of 17.5%.
					</li>
					<li>
						Now since you have seen the return in 2017 or 2018, you should have become excited about making 16% returns and started investing. Oh yeah, you have the "proof of returns" to support your excitement
					</li>
					<li>
						But 3 years later, lets see what is the status of your investment started after seeing the "Proof of returns"
							<img src="/images/pic02.jpg" alt="Equity market return" className="img-center" />
					</li>
					<li>Alas, all of them are showing losses. The things that were shown to you in 2017/2018 all seem to be bunch of lies.
					Honestly the profits shown then are true as as loses shown now.</li>
					<li>
						But lets do some rational thinking, if someone made money in 2017 or 2018, he should have started investing in 2014 or 2013. So he should have seen returns on investment made 3-4 years earlier. That is started in 2010
</li>
					<li>
						Now lets see the status of SIP started in 2010 (4 years before 2014)
							<img src="/images/pic03.jpg" alt="Equity market return" className="img-center" />
					</li>
					<li>
						The returns during the 4 year period are around 8% or even lesser. This is lesser than the PPF or EPF returns.
					</li>
					<li>
						So Ask yourselves would you have chosen to invest in a product which gave less than PF returns?
</li>
					<li>
						Of Course No! But in hindsight that would have been the best period to start investment because the succeeding period gave double the PF returns.
</li>
				</ul>
				<p>
					So if you are Investor who is fiddling in markets on own thinking Yesterday was good and because of that, Tomorrow will be good, mind you, every day in not Sunday.
</p>

				<p>
					Should one Start/Stop a Stock Market Investment? Well, It is a perilous path to take. So our Advice - Seek out a good adviser and stick to him. In matters of personal finance, there is more than what meets the eye and Doing-it-yourself is doing-it-at your peril.
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
export default startOrStopStockMarket;