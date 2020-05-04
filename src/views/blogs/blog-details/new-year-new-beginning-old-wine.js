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


class newBeginningOldWine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: [],
			likes: '',
			isPageLoaded: false
		}
		this.likePost = this.likePost.bind(this);
	}
	componentWillMount() {
		document.title = "New Year. New Beginning. Old Wine";
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
		this.setState({
			isPageLoaded: true
		})
		Addthis();
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
						<h2 className="blog-details-title"><span>New Year. New Beginning.Old Wine.</span></h2>
						<h6 className="blog-publish-info">By Admin | Jan 01, 2019 | Uncategorized | 0 comments</h6>
						<div onClick={this.likePost} className="clap-icon"> {this.state.likes} claps</div>
					</div>
					<div>{this.state.isPageLoaded ? <Addthis /> : ''}</div>
				</div>
				<img src="/images/newYearOldWine.jpg" alt="New Year Droplet blog banner" className="img-center" />
				<p>
					Droplet is 365 days old, Yes with this New Year we will be “ONE” year old. Happy Birthday, Droplet! We would like to thank all our clients &amp; readers for supporting our small start-up. The idea of starting up a financial advisory service was never there until we realized there is serious lack of financial literacy among people and we wanted to take this opportunity and make people understand the significance of Starting Early, Financial Planning, Asset Allocation and more importantly differentiate insurance &amp; investments. That’s how Droplet was born.
</p>

				<p>
					When we started, we never anticipated we will get such a significant response from people. But, We are, least to say, humbled and bow down to your support and interest that each of you has shown in us. Thanks again for all your support all these days. We wish to that your high spirits will continue to brush us into achieving a higher goal.
					  </p>

				<p>
					As the saying goes – Old wine in New bottle. The same old financial resolutions one must adopt for a better future –
						<ol>
						<li>
							Make sure you follow this at any cost –> Expenses = Income minus Savings
						</li>
						<li>
							Save a minimum 30% of your monthly earnings. Alternatively, if you are a family with two earning members, try to save one person’s income at 100%.
						</li>
						<li>
							Have SIX months of your salary as an emergency fund. Park it in a good liquid fund. Never ever, touch it for luxury spending. It is only for <strong>“Emergency”</strong>.
						</li>
						<li>
							Have adequate medical &amp; life insurance. With growing medical expenses, it is better to have at least 10 to 15 lakhs as medical cover for the entire family (as of today).
						</li>
						<li>Make sure you have a life cover of 20 times your gross annual income. Revisit this once in every 10 years.
						Start investing while you are young, preferably in your mid 20’s. Sooner the better, always.</li>
						<li>
							Know the difference between endowment, ULIP and traditional insurance plans. None of them can be counted as "Investments". If you do not know, call us anytime.
						</li>
						<li>
							Understand the significance of financial planning &amp; asset allocation.
						</li>
						<li>
							If you think your parents and grandparents never bothered about financial planning and saving for his or her future; then you are simply mistaken. Introspect. Their lifestyle was completely different from ours.
						</li>
						<li>It is ultimately your life and you should “save”
						Align all your investments according to your goal and never break it until the goal is reached.
						</li>
						<li>
							Pay off your credit card bills ASAP. Try to pay at least 2 months of your loan EMI as part payment every year.
						</li>
						<li>
							Being debt free is heavenly. You will never understand it until you feel it.
						</li>
						<li>
							Remember this, inflation eats out most of your money. What you can buy for 100 bucks today will not be the same after 20 years.
						</li>
						<li>
							Ignore Inflation at your peril. Saving without understanding inflation is risky. That's why we say Fixed Deposit carries risk too. A Devil that we cannot see.
						</li>
						<li>
							Do not be greedy. Be happy if you can make 12 to 15% compounded returns for the next 20 years.
						</li>
						<li>
							Bitcoin/Commodities/Crypto - All are nothing but gambling. They will take your money down the drain. Do it for pleasure (A pleasure that comes at a heavy cost).
						</li>
						<li>
							Being frugal is the only way to become financially independent. More Importantly Being Frugal is different from Being Miser. Lookup @ <a href="https://www.thefreedictionary.com/" target="_blank">tfd.com</a>
						</li>
						<li>
							Consult with your family before making huge spending or investment (buying a car or apartment).
						</li>
						<li>
							Do not buy a depreciating asset on 85% loan.
						</li>
						<li>
							Never buy a car, which is worth more than 6 months of your take-home salary.
						</li>
						<li>
							Remember, nothing comes for "FREE" in life.
						</li>
						<li>
							In investing, always think long-term.
						</li>
						<li>
							Last but not the least and the most important resolution for the year, "READ OUR BLOGS REGULARLY". Lol 😜
						</li>




					</ol>

				</p>
				<p>	Have a Healthy, Happy and Wealthy New Year.</p>

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
export default newBeginningOldWine;