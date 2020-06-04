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


class behaviour extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: [],
			likes: ''
		}
		this.likePost = this.likePost.bind(this);
	}
	componentWillMount() {
		document.title = "The Behaviour!";
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
						<h2 className="blog-details-title">The <span>Behaviour!</span></h2>
						<h6 className="blog-publish-info">By Admin | Feb 23, 2019 | Uncategorized | 0 comments</h6>
						<div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
					</div>
					<div><Addthis /></div>
				</div>
				<img src="/images/behavior.jpg" alt="behaviour blog banner" className="img-center" />
				<p>
					Investing is simple but not easy. Meaning, anyone can step into a broking firm open a demat account and start investing. However, in reality not all those who have a demat account or someone professionally qualified have succeed dramatically in the equities market. If knowledge is the only required criteria then all the chartered accountants & finance professionals would have been millionaires and minting money on their investments.
				</p>
				<p>
					When asked about investments &amp; knowledge, Warren Buffet candidly replied – “If book knowledge made great investors, then the librarians would be all rich”. Ideally, it is the behavior, which differentiates successful investor from the rest of the world
				</p>.

				<p>
					In short, it is not just the knowledge which defines the success but the behavior. We have outlined a few behaviors, which will help investors to be successful in the markets –
						<ol>
						<li><strong>Being Patience –</strong>
							<strong>Wealth is not created overnight.</strong> Many fail to understand this simple thought process. Let us take an individual from any profession, it takes them several years to reach the peak of their career. No one became wealthy or attained stardom overnight. Right from Ambani to Rajinikanth to Virat Kohli; everyone started from the scratch; they just repeated the process patiently. Decades of hard work and patience let them to be successful in their respective careers. Same applies to the investments, for instance – Reliance Growth Fund NAV grew 100 times in the span of 15 years. If one had invested One Lakh rupees in the fund and patiently waited for 15 years, the one ONE LAKH had turned toONE CRORE>. Remember, “Patience is the KEY”.</li>

						<li><strong>Ignoring the noise –</strong>
						 In investing and in life, you will hear too many noises around you. How you behave/react to them matters the most. Some people will move ahead in their life faster, some will slowdown and you may stay there for years and the people around you will influence you with their thoughts. Just take the positives and ignore the noise. Similarly, in investing, you may listen to many noises like, inflation has risen, interest rates are risen, and GDP growth forecasts are fallen and so on. All these are short-term events and are not going to affect the growth of the country in the long run. It is better to <strong>IGNORE THE NOISE AND MOVE ON.</strong></li>

						<li><strong>Keep it simple &amp; Stay focused –</strong>
						Almost everything in our life is very simple. We believe or made to believe that simple is useless and the complex is worthwhile. However, it is the other way round. If you really cannot do something simple, then never do it.  Likewise, keep your investments simple. Don’t run behind everything to make money. Understand a product and invest your hard earned money which beats Inflation. Never mix your investment &amp; insurance. In simple terms, just focus on a one simple thing to succeed.</li>

						<li><strong>Disciplined Approach –</strong>
						 Discipline is the foundation upon which all the success is built. Lack of discipline inevitably leads to failure. If you start with something, never let it go. The discipline to continue determines the success. We may go through the thick and thin of whatever we do, never excuse yourself when you find it difficult. If you have started walking, do it religiously to reap the health benefits in the long term.
						<img src="/images/WBQuoteDisciplien.jpg" alt="Warren Buffet Quote" className="img-center" />
						Similarly, if you have committed to do invest every month, then do it without any excuses. You may be forced to buy unwanted stuff looking at your colleagues and neighbors, but what matters most is your DISCIPLINE of sticking to your approach.
							</li>

						<li><strong>Accepting the failures –</strong>
						Most of the time we do not have enough courage to accept our failures, correct our self and move on. Rather we keep doing the same mistakes repeatedly and stay in the same place. We people do the same with money. When our investment thesis did not work out well, it is better to accept the losses and move on rather than averaging and waiting for the recoveries to happen.</li>

						<li><strong>Being Prudent –</strong>
						 One must be careful of what he does. Never fall for false promises. Be very realistic and do not run behind get rich quick schemes. If you believe you can do it yourself and very well know about something that you do, go ahead and do it without second thought. On other hand if you are in doubt, it is always better to consult an expert in the filed rather than burning your fingers. A wise man makes right decision. An ignorant man thinks he is an expert in all fields and fools himself. Be prudent.</li>

					</ol>
				</p>

				<p>Happy Investing :)</p>

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
export default behaviour;