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

class moneyFromGold extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: [],
			likes: ''
		}
		this.likePost = this.likePost.bind(this);
	}
	componentWillMount() {
		document.title = "Gold - How much money do I actually make?";
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
						<h2 className="blog-details-title"><span>Gold - How much money do I actually make?</span></h2>
						<h6 className="blog-publish-info">By Admin | June 13, 2019 | Uncategorized | 0 comments</h6>
						<div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
					</div>
					<div><Addthis />  </div>
				</div>
				<img src="/images/moneyfromGold.jpg" alt="money from gold blog banner" className="img-center" />
             <p> What you see is not what you get!  </p>

                 <p> In the last blog, we showed that even though Gold has given better returns in recent times, the long term returns of Gold are still not the best among all asset classes. In that the returns compared were the returns of pure gold vs other Asset class. In this blog, let us understand the difference between the actual returns we make from Gold vs Paper returns based on Gold Prices we see. </p>

                       <p> Let us first bring to your notice that our families usually buy gold as Jewelry and not as gold coins or bars. When we buy Gold as Jewelry, there are costs that get added to it, making / wastage charges + Taxes that we have to pay. A friend of mine recently bought a ring and came to me totally surprised that a gram of Gold costs " Rs 5000" !. Back then Gold was selling @ Rs 4200/gram. I was surprised too. It turned out that the Jeweler charged him 20% as sundry charges & taxes, taking the cost to Rs 5000/gm. This has happened in the year 2020, imagine how gold might have been sold in the Year 2000 (there was no appropriate regulations, no hallmark impression, wastage calculations/charges and many more). Anyways the point we want to drive is, each time we pay Rs 1000, ideally we are getting approx Rs 800 worth Gold only. </p>

        <p> Now add to this the fact that when we sell the jewel or exchange it, there is again a wastage of about 3-4% deducted. That takes away almost 25% of total profits the Gold makes on paper. Let us now put the image from our last blog comparing the returns from Peak to Peak.
            <img src="/images/goldvsnifty.jpg" alt="gold vs nifty returns comparison" className="img-center"/>
            </p>
        <p> Then take away 25% from the Gold returns. This leaves only 7.5% on the table for people like you and me who buy Gold mostly in the form of Jewel. </p>

<p> Now you see there is a chasm between the Paper Profit and actual profit from gold and this one of the reason why we do not classify "Gold" as investment. One should always look @ Gold as hedge against inflation and as on choice during the asset allocation process. </p>

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
export default moneyFromGold;
