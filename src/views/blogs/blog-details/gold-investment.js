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

class goldInvestment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: [],
			likes: ''
		}
		this.likePost = this.likePost.bind(this);
	}
	componentWillMount() {
		document.title = "Gold-  An Investment";
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
						<h2 className="blog-details-title"><span>Gold - An Investment</span></h2>
						<h6 className="blog-publish-info">By Admin | July 04, 2020 | Uncategorized | 0 comments</h6>
						<div onClick={this.likePost} className="clap-icon"> {this.state.likes}Likes</div>
					</div>
					<div><Addthis />  </div>
				</div>
				<p></p>
            In the previous two blogs we saw-
            <ol>
            <li>Gold does not necessarily out beat other asset classes. </li>
            <li>Because of the way we "Buy" Gold, the returns further diminish. </li>
            </ol>


<p>
            Gold can never become an investment. It is purely an hedge, <br/>
Hedge  -
<ul>
            <li>against Inflation, </li>
<li>against a falling equity market or </li>
<li> against a collapsed debt market. </li>
            </ul>
            </p>

<p> So it would be naive on our part to "Invest in Gold" and expect out sized returns.   </p>

<p> So in this blog, we would like to layout probably an easy guide on how to handle Gold as an "Asset" for layman investors. </p>

<p> <strong>Allocation</strong> -  Try and keep 10% of your Net worth in Gold.   </p>
<p>
<strong> Options for Investment - </strong>

<ol>
            <li> <strong> Physical Gold (Jewellery) </strong> - If you have no gold at all then start a monthly Gold Scheme for 10% of your savings and start accumulating the same. Sometimes, you might already have Jewelry but if you prefer accumulate further gold in Physical form then continue to do this or buy as gold coins. </li>

 <li> <strong>Gold ETFs</strong> - Best suited for somebody who is interested in saving a fixed % monthly but does not want to buy Physical gold. Also it suits Investors seeking to move investments from one asset class to another. </li>

<li> <strong>Sovereign Gold Bond</strong> - Introduced by Govt of India in 2015, this we believe is the best way to stay invested in Gold for longer periods of time since it is highly secured, in demat form and investor gets an additional interest of 2.5% on top of Nominal Gold Price appreciation. </li>
</ol>
        </p>

<p> Below for the ease of our readers a comparison between the 3 options -
    				<img src="/images/Physical-ETF-SGB.jpg " alt="Investment option comparison" className="img-center" />
    </p>
<p> Note - tax is applicable on SGB if one sells the same in secondary markets before maturity which is before 8 years. Interest received is taxable as per tax slab. </p>

<p> Today investors are investing in gold seeing the returns so they also need to know which is the best choice for them. Just like understanding an Insurance or Mutual fund before buying is important, if Gold is chosen to be invested in, we need to understand the mode of investment and allocation and proceed judiously. </p>

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
export default goldInvestment;
